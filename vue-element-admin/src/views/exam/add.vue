<template>
  <div class="wrapper">
    <p class="text">添加考试</p>
    <div class="content">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" class="demo-ruleForm">
        <el-form-item class="babels" label="试卷名称" prop="name">
          <br>
          <el-input v-model="ruleForm.name" class="name" />
        </el-form-item>
        <el-form-item class="babels" label="选择考试类型" prop="region1">
          <br>
          <el-select v-model="ruleForm.region1" class="select" style="width: 120px;">
            <el-option label="周考1" value="zhoukao1" />
            <el-option label="周考2" value="zhoukao2" />
            <el-option label="周考3" value="zhoukao3" />
            <el-option label="月考" value="yuekao" />
          </el-select>
        </el-form-item>
        <el-form-item class="babels" label="选择课程" prop="region2">
          <br>
          <el-select v-model="ruleForm.region2" class="select" style="width: 120px;">
            <el-option label="javaScript上" value="javaScript上" />
            <el-option label="javaScript下" value="javaScript下" />
            <el-option label="模块化开发" value="模块化开发" />
            <el-option label="移动端开发" value="移动端开发" />
            <el-option label="node基础" value="node基础" />
            <el-option label="组件化开发(vue)" value="组件化开发(vue)" />
            <el-option label="渐进式开发(react)" value="渐进式开发(react)" />
            <el-option label="项目实战" value="项目实战" />
            <el-option label="javaScript高级" value="javaScript高级" />
            <el-option label="node高级" value="node高级" />
          </el-select>
        </el-form-item>
        <el-form-item class="babels" label="设置题量" prop="num">
          <br>
          <el-input-number v-model="ruleForm.num" style="width: 90px" controls-position="right" :min="3" :max="10" />
        </el-form-item>
        <el-form-item class="babels" label="考试时间" required>
          <br>
          <el-col :span="11" class="item">
            <el-form-item prop="starttime">
              <el-date-picker v-model="ruleForm.starttime" type="date" style="width:100%;" />
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11" class="item">
            <el-form-item prop="endtime">
              <el-date-picker v-model="ruleForm.endtime" type="date" style="width:100%;" />
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-button class="btn" type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import {momentTime} from '@/utils/index'
import { mapActions } from 'vuex'


export default {
  name: 'AddTheTest',
  data() {
    return {
      ruleForm: {
        num: 3,
        name: '',
        region1: '',
        region2: '',
        starttime: '',
        endtime: '',
        delivery: false
      },
      rules: {
        name: [
          { required: true, message: '请输入试卷名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        region1: [
          { required: true, message: '请选择考试类型', trigger: 'change' }
        ],
        region2: [
          { required: true, message: '请选择课程', trigger: 'change' }
        ],
        num: [
          { required: true, message: '请选择题量', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    ...mapActions({
      getSubmitExam:'exam/getSubmitExam'
    }),
    submitForm(formName) {
      // 创建试卷接口所需信息
      let req = {
        subject_id: 1,
        exam_id: this.ruleForm.region1,
        tite: this.ruleForm.name,
        number: 4,
        start_time: 1555470592, //this.ruleForm.starttime
        end_time: 1555470550    //this.ruleForm.endtime
      }

      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.getSubmitExam(req)
          // console.log(this.ruleForm,'vaild')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
  p {
    line-height: 0
  }

  .wrapper {
    position: relative;
    width: 100%;
    height: 850px;
    background: #f0f2f5;
    padding: 24px;
    box-sizing: border-box;
  }

  .text {
    line-height: 0;
    font-size: 20px;
    padding: 20px 0;
  }

  .content {
    padding: 24px;
    background: #FFF;
    border-radius: 10px;
  }

  .content p {
    display: flex;
  }
  .centent  span {
      padding-top: 3px;
      padding-right: 5px;
      color: red;
    }

  .item {
    width: 185px;
    margin-top: 10px;
  }

  .line {
    margin-top: 10px;
    width: 30px;
    text-align: center;
    height: 32px;
  }

  .babels {
    box-sizing: border-box;
    padding-bottom: 10px
  }

  .name {
    margin-top: 10px;
    width: 400px;
    height: 32px;
  }

  .select {
    margin-top: 10px;
    height: 32px;
  }

  .btn {
    margin-top: 20px;
    width: 136px;
    height: 40px;
    line-height: 40px;
    padding: 0;
    background: blue;
  }

</style>
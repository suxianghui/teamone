<template>
  <div class="wrapper">
    <p class="text">添加考试</p>
    <div class="content">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" class="demo-ruleForm">
        <el-form-item class="babels" label="试卷名称" prop="name">
          <br>
          <el-input v-model="ruleForm.name" class="name" />
        </el-form-item>
        <el-form-item class="babels" label="选择考试类型" prop="exam_id">
          <br>
          <el-select v-model="ruleForm.exam_id" class="select" style="width: 120px;">
            <!-- 类型列表渲染 -->
            <el-option v-for="(val,ind) in allExamTypes" :key="ind" :label="val.exam_name" :value="val.exam_id" />
          </el-select>
        </el-form-item>
        <el-form-item class="babels" label="选择课程" prop="subject_id">
          <br>
          <el-select v-model="ruleForm.subject_id" class="select" style="width: 120px;">
            <!-- 课程列表渲染 -->
            <el-option v-for="(val,ind) in allExamSubjects" :key="ind" :label="val.subject_text" :value="val.subject_id" />
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
        <el-button class="btn" type="primary" plain @click="exportExcel">导出Excel</el-button>
      </el-form>
    </div>

    <exportExcel v-show="show"></exportExcel>
  </div>
</template>

<script>
import {momentTime} from '@/utils/index'
import { mapActions, mapState } from 'vuex'
import exportExcel from '@/components/Exam/exportExcel.vue'


export default {
  name: 'AddTheTest',
  components:{
    exportExcel
  },
  data() {
    return {
      show: false,
      ruleForm: {
        num: 3,
        name: '',
        exam_id: '',
        subject_id: '',
        starttime: '',
        endtime: '',
        delivery: false
      },
      rules: {
        name: [
          { required: true, message: '请输入试卷名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        exam_id: [
          { required: true, message: '请选择考试类型', trigger: 'change' }
        ],
        subject_id: [
          { required: true, message: '请选择课程', trigger: 'change' }
        ],
        num: [
          { required: true, message: '请选择题量', trigger: 'change' }
        ],
        starttime: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        endtime: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ]
      }
    }
  },

  created() {
    this.getExamType();
    this.getExamSubject();
  },

  computed: {
    ...mapState({
      allExamTypes: state => state.exam.allExamTypes,
      allExamSubjects: state => state.exam.allExamSubjects
    })
  },

  methods: {
    ...mapActions({
      getExamType: 'exam/getExamType',
      getExamSubject: 'exam/getExamSubject',
      getSubmitExam:'exam/getSubmitExam'
    }),
    exportExcel(){
      this.show = !this.show;
    },
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          // 创建试卷接口所需信息
          let params = {
            subject_id: this.ruleForm.subject_id,
            exam_id: this.ruleForm.exam_id,
            title: this.ruleForm.name,
            number: 4,
            start_time: momentTime(this.ruleForm.starttime),
            end_time: momentTime(this.ruleForm.endtime)
          }
          // 获取创建试卷响应数据
          let res = await this.getSubmitExam(params);
          // 把数据存储在本地
          window.localStorage.setItem('getSubmitExam',JSON.stringify(res.data));
          // 跳转路由到创建试卷页面
          this.$router.push({ path: '/exam/addexam' });
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
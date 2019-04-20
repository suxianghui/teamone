<template>
  <div class="chart-container">
    <h2>班级管理</h2>
    <div class="main">
      <el-button class="class-btn" type="primary">
        <i class="add-icon">+</i>
        <span class="add-class" @click="changeClass">添加班级</span>
      </el-button>
      <el-table
        :data="data.classData"
        style="width: 100%"
      >
        <el-table-column
          prop="grade_name"
          label="班级名"
        />
        <el-table-column
          prop="subject_text"
          label="课程名"
        />
        <el-table-column
          prop="room_text"
          label="教室号"
        />
        <el-table-column
          label="操作"
        >
          <template  slot-scope="scope">
            <el-button
              size="small"
              type="text"
              @click.native.prevent="editRow(scope.$index)">修改</el-button>
            <el-button
              type="text"
              size="small"
              class="del-btn"
              @click.native.prevent="deleteRow(scope.$index)" >| 删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div v-if="diaIsshow" class="dialog-wrap">
        <div class="dialog">
          <div class="header">
            <span class="left">添加班级</span>
            <b class="cancel-btn" @click="cancelFn">X</b>
          </div>
          <el-form
            ref="ruleForm"
            :model="ruleForm"
            :rules="rules"
            label-width="100px"
            class="demo-ruleForm">
            <el-form-item prop="className">
              <div class="list first">
                <label><span>*</span>班级名：</label><br>
                <el-input v-model="ruleForm.className" :disabled="editclick"/>
              </div>
            </el-form-item>
            <el-form-item prop="roomName">
              <div class="list">
                <label><span>*</span>教室号：</label><br>
                <el-select v-model="ruleForm.roomName" size="medium" placeholder="请选择">
                  <el-option
                    v-for="item in data.roomMsg"
                    :key="item.room_id"
                    :label="item.room_text"
                    :value="item.room_id"
                  />
                </el-select>
              </div>
            </el-form-item>
            <el-form-item prop="subjectName">
              <div class="list">
                <label><span>*</span>课程名：</label><br>
                <el-select v-model="ruleForm.subjectName" size="medium" placeholder="请选择">
                  <el-option
                    v-for="item in data.subjectMsg"
                    :key="item.subjectvalue"
                    :label="item.subjectName"
                    :value="item.subjectvalue"
                  />
                </el-select>
              </div>
            </el-form-item>
            <el-form-item class="form-btn">
              <el-button>取消</el-button>
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data() {
    return {
      ruleForm: {
        className: '',
        roomName: '',
        subjectName: ''
      },
      rules: {
        className: [
          { required: true, message: '班级名', trigger: 'blur' }
        ],
        roomName: [
          { required: false, message: '请选择教室号', trigger: 'change' }
        ],
        subjectName: [
          { required: true, message: '请选择课程', trigger: 'change' }
        ]
      },
      value: '',
      subjectvalue: '',
      classInfo: {},
      diaIsshow: false,
      editclick: false
    }
  },
  computed: {
    ...mapState({
      data: state => state.class
    })
  },
  created() {
    this.getMangerGrade()
    this.getMangerRoom()
  },
  methods: {
    ...mapMutations({
      updateState: 'class/updateState'
    }),
    ...mapActions({
      getMangerGrade: 'class/getMangerGrade',
      AddMangerGrade: 'class/AddMangerGrade',
      getMangerRoom: 'class/getMangerRoom',
      editMangerGrade: 'class/editMangerGrade',
      deleteMangerGrade: 'class/deleteMangerGrade'
    }),
    changeClass() {
      this.diaIsshow = !this.diaIsshow
      this.ruleForm = {
        className: '',
        roomName: '',
        subjectName: ''
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        console.log('valid', this.ruleForm)
        if (valid) {
          // 用此来判断点击的是添加还是编辑：true为编辑，false为添加
          if (this.editclick) {
            this.editMangerGrade({
              grade_id: this.classInfo.grade_id,
              grade_name: this.classInfo.grade_name,
              subject_id: this.ruleForm.subjectName,
              room_id: this.ruleForm.roomName
            })
          } else {
            this.AddMangerGrade(this.ruleForm)
          }
          this.getMangerGrade()
          this.diaIsshow = !this.diaIsshow
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 编辑班级信息
    editRow(index, rows) {
      this.diaIsshow = !this.diaIsshow
      this.editclick = true
      const result = this.data.classData.find((item, ind) => {
        return index === ind
      })
      console.log('result', result)
      this.classInfo = result
      this.ruleForm.className = result.grade_name
      this.ruleForm.roomName = result.room_text
      this.ruleForm.subjectName = result.subject_text
    },
    // 删除班级信息
    deleteRow(index, rows) {
      const result = this.data.classData.find((item, ind) => {
        return index === ind
      })
      console.log('result', result)
      this.deleteMangerGrade({
        grade_id: result.grade_id
      })
      this.getMangerGrade()
    },
    // 关闭弹窗
    cancelFn() {
      this.diaIsshow = !this.diaIsshow
    }
  }
}
</script>

<style scoped>
  .chart-container{
    padding: 0 24px 24px;
    background: #eee;
    font-size: 14px;
  }
  h2{
    margin: 0;
    padding: 28px 0;
    font-weight: 400;
    font-size: 20px;
  }
  .main{
    width: 100%;
    height: 863px;
    padding: 24px;
    box-sizing: border-box;
    margin: 0 0 20px;
    background: #fff;
    border-radius: 10px;
  }
  .class-btn{
    padding: 10px 45px;
    margin-bottom: 24px;
  }
  .add-icon{
    font-size: 20px;
    font-style: normal;
    margin-right: 6px;
  }
  .del-btn{
    margin: 0;
    padding: 0;
  }
  el-table-column{
    width: 25%;
  }
  /*修改弹窗*/
  .dialog-wrap{
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0, 0, 0, .3);
    top:0;
    left: 0;
    z-index: 999;
  }
  .dialog{
    width: 524px;
    background: #fff;
    position: relative;
    margin: 0 auto;
    padding-bottom: 50px;
  }
  .dialog .header{
    width: 100%;
    padding: 16px 22px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    border-bottom: solid 1px #eee;
    font-size: 16px;
    font-weight: 400;
  }
  .dialog .header b{
    color: #aaa;
    font-weight: 300;
  }
  .dialog .list{
    width:520px;
    padding: 0 22px;
    box-sizing: border-box;
    position: relative;
    left:-100px;
  }
  .first{
    margin-top: 20px;
  }
  .dialog .list label{
    font-weight: 400;
    font-size: 14px;
  }
  label span{
    position: relative;
    top:4px;
    color: red;
    padding-right:3px;
    font-size: 16px;
  }
  .list .el-select{
    width:480px;
  }
  .el-select-dropdown{
    width: 100%;
    z-index: 9999;
  }
  .el-form-item{
    margin-top: 10px;
  }
  .form-btn{
    position: relative;
    left:80px;
    top:50px;
  }
  .bottom{
    display: inline-block;
    position: absolute;
    left: 50%;
    bottom: 30px;
    margin-left: -90px;
  }
  .bottom button:nth-child(1){
    padding: 6px 17px;
    background: #fff;
    outline: none;
    border: solid 1px #ccc;
    border-radius: 1px;
    color: #bbb;
  }
  .bottom button:nth-child(2){
    padding: 6px 38px;
    background: #416bff;
    border-radius: 3px;
    color: #fff;
    outline: none;
    border: solid 1px #ccc;
  }
</style>

<template>
  <div class="chart-container">
    <h2>教室管理</h2>
    <div class="main">
      <el-button class="room-btn" type="primary">
        <i class="add-icon">+</i>
        <span class="add-room" @click="changeClass">添加教室</span>
      </el-button>
      <!-- table教室列表的渲染 -->
      <el-table class="table-wrap" :data="data.roomMsg" style="width: 100%">
        <el-table-column prop="room_text" label="教室号" />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click.native.prevent="deleteRow(scope.$index, data.roomMsg)"
            >删除</el-button>
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
            <el-form-item prop="roomName">
              <div class="list first">
                <label><span>*</span>教室号:</label><br>
                <el-input v-model="ruleForm.roomName" />
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
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      diaIsshow: false,
      ruleForm: {
        roomName: ''
      },
      rules: {
        roomName: [
          { required: true, message: '请选择教室号', trigger: 'change' }
        ]
      }
    }
  },
  computed: {
    ...mapState({
      data: state => state.room
    })
  },
  created() {
    this.getMangerRoom()
  },
  methods: {
    ...mapActions({
      getMangerRoom: 'room/getMangerRoom',
      AddmangerRoom: 'room/AddmangerRoom',
      DeletemangerRoom: 'room/DeletemangerRoom'
    }),
    changeClass() {
      this.diaIsshow = !this.diaIsshow
    },
    // 确认添加教室数据
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('valid', this.ruleForm)
          this.AddmangerRoom(this.ruleForm)
          this.getMangerRoom()
          this.diaIsshow = !this.diaIsshow
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 删除教室
    deleteRow(index, rows) {
      const result = this.data.roomMsg.find((item, ind) => {
        return index === ind
      })
      this.DeletemangerRoom({ room_id: result.room_id })
      rows.splice(index, 1)
    },
    // 编辑教室
    updateClick(e) {
      this.diaIsshow = !this.diaIsshow
      console.log(e)
    },
    // 关闭弹窗
    cancelFn() {
      this.diaIsshow = !this.diaIsshow
    }
  }
}
</script>

<style scoped>
.chart-container {
  padding: 0 24px 24px;
  background: #eee;
  font-size: 14px;
}
h2 {
  margin: 0;
  padding: 28px 0;
  font-weight: 400;
  font-size: 20px;
}
.main {
  width: 100%;
  height: 863px;
  padding: 24px;
  box-sizing: border-box;
  margin: 0 0 20px;
  background: #fff;
  border-radius: 10px;
}
.room-btn {
  padding: 10px 45px;
  margin-bottom: 24px;
}
.add-icon {
  font-size: 20px;
  font-style: normal;
  margin-right: 6px;
}
el-table-column {
  width: 50%;
}
.el-table {
  background: red;
}
.el-btn span {
  color: #ccc !important;
}
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

<template>
  <div class="chart-container">
    <h2>班级管理</h2>
    <div class="main">
      <el-button class="class-btn" type="primary">
        <i class="add-icon">+</i>
        <span class="add-class">添加班级</span>
      </el-button>
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column
          prop="date"
          label="班级名"
        />
        <el-table-column
          prop="courseName"
          label="班级名"
        />
        <el-table-column
          prop="classroom"
          label="教室号"
        />
        <el-table-column
          label="操作"
        >
          <!-- <template slot-scope="scope"> scope.row-->
          <template>
            <el-button size="small" type="text" @click="handleClick">修改|</el-button>
            <el-button type="text" size="small" class="del-btn">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div />
      <div v-if="diaIsshow" class="dialog-wrap" @click="cancelFn">
        <div class="dialog">
          <div class="header">
            <span class="left">添加班级</span>
            <b class="cancel-btn" @click="cancelFn">X</b>
          </div>
          <div class="list">
            <label><span>*</span>班级名：</label><br>
            <input v-model="className" type="text" class="first">
          </div>
          <div class="list">
            <label><span>*</span>教室号：</label><br>
            <input v-model="roomName" type="text">
          </div>
          <div class="list last">
            <label><span>*</span>课程名：</label><br>
            <input v-model="courseName" type="text">
          </div>
          <div class="bottom">
            <button @click="cancelFn">取消</button>
            <button @click="submitFn">提交</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      className: '1610A',
      roomName: '34310',
      courseName: '渐进式开发',
      diaIsshow: false,
      tableData: [
        {
          date: '1610C',
          courseName: '渐进式开发',
          classroom: '34308'
        },
        {
          date: '1610C',
          courseName: '渐进式开发',
          classroom: '34308'
        },
        {
          date: '1610C',
          courseName: '渐进式开发',
          classroom: '34308'
        },
        {
          date: '1610C',
          courseName: '渐进式开发',
          classroom: '34308'
        },
        {
          date: '1610C',
          courseName: '渐进式开发',
          classroom: '34308'
        },
        {
          date: '1610C',
          courseName: '渐进式开发',
          classroom: '34308'
        }
      ]
    }
  },
  methods: {
    handleClick(e) {
      this.diaIsshow = !this.diaIsshow
    },
    cancelFn(e) {
      this.diaIsshow = !this.diaIsshow
    },
    submitFn(e) {
      console.log(2)
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
  .el-table{
    /* background: red; */
  }
  /*修改弹窗*/
  .dialog-wrap{
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0, 0, 0, .3);
    top:0;
    left: 0;
    z-index: 9999;
  }
  .dialog{
    width: 524px;
    background: #fff;
    padding-bottom: 40px;
    position: relative;
    top:100px;
    left: 50%;
    margin-left: -262px;
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
    width: 100%;
    margin-top: 40px;
    padding: 0 22px;
    box-sizing: border-box;
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
  .dialog .list input{
    width: 100%;
    height: 30px;
    line-height: 30px;
    padding-left: 12px;
    box-sizing: border-box;
    font-size: 14px;
    color: #ccc;
    outline:none;
    border: solid 1px #ccc;
    margin-top: 12px;
  }
  .first{
    background: #eee;
  }
  .last{
    padding-bottom: 100px!important;
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

<template>
  <div class="chart-container">
    <h2>学生管理</h2>
    <div class="search-wrap">
      <input v-model="input" placeholder="输入学生姓名" class="input">
      <el-select
        v-model="roomValue"
        placeholder="请选择教室号"
        size="medium"
      >
        <el-option
          v-for="item in roomData"
          :key="item.room_id"
          :label="item.room_text"
          :value="item.room_text"
        />
      </el-select>
      <el-select
        v-model="classValue"
        placeholder="请选择班级"
        size="medium"
      >
        <el-option
          v-for="item in classData"
          :key="item.grade_id"
          :label="item.grade_name"
          :value="item.grade_name"
        />
      </el-select>
      <el-button type="primary" @click="search">搜索</el-button>
      <!-- <el-botton class="search-btn">搜索</el-botton> -->
      <el-button type="primary" @click="reset">重置</el-button>
      <!-- <button class="reset-btn" @click="reset">重置</button> -->
      <!-- <button class="search-btn" @click="search">搜索</button>
      <button class="reset-btn" @click="reset">重置</button> -->
    </div>
    <div class="main">
      <el-table
        class="table-wrap"
        :data="pagenationData"
        style="width: 100%"
      >
        <el-table-column
          prop="student_name"
          label="姓名"
        />
        <el-table-column
          prop="student_id"
          label="学号"
        />
        <el-table-column
          prop="grade_name"
          label="班级"
        />
        <el-table-column
          prop="room_text"
          label="教室号"
        />
        <el-table-column
          prop="student_pwd"
          label="密码"
        />
        <el-table-column
          label="操作"
        >
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click.native.prevent="deleteRow(scope.$index,pagenationData)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          background
          :page-sizes="pageChose"
          :page-size="pageSize"
          layout="prev, pager, next, sizes, jumper"
          :total="studentInfoShow?studentInfo.length:data.studentData.length"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      classValue: '',
      roomValue: '',
      input: '',
      roomData: [],
      classData: [],
      studentInfo: [],
      studentInfoShow: false,
      pagenationData: [],
      pageChose: [5, 30, 50, 80, 100, 150, 200],
      pageSize: 30,
      current: 1,
      searchbtn:false
    }
  },
  computed: {
    ...mapState({
      data: state => state.student
    })
  },
  async created() {
    // let obj={
    //   name:2,
    //   age:3,
    //   sex:'女'
    // }
    // for(var i in obj){
    //   if(obj.hasOwnProperty)
    // }
    await this.getMangerStudent()
    console.log('createdstudentData',this.data.studentData.length)
    this.roomData = await this.getMangerRoom()
    this.classData = await this.getMangerGrade()
    // 进入首页默认的分页数据
    this.changePagenation()
    // console.log(this.pagenationData)
  },
  methods: {
    ...mapActions({
      getMangerStudent: 'student/getMangerStudent',
      getMangerRoom: 'student/getMangerRoom',
      getMangerGrade: 'student/getMangerGrade',
      deleteMangerStudent: 'student/deleteMangerStudent'
    }),
    search() {
      // 按条件搜索
      this.searchbtn = true;
      this.studentInfoShow = true;
      let result=[];
      if(this.input&&this.classValue&&this.roomValue){
        result = this.data.studentData.filter(item => {
          return item.student_name === this.input && item.room_text === this.roomValue && item.grade_name === this.classValue
        })
      }else if((this.input && this.classValue)||(this.input && this.roomValue)||(this.roomValue && this.classValue)) {
        result = this.data.studentData.filter(item => {
          return (item.student_name === this.input && item.room_text === this.roomValue) || (item.student_name === this.input && item.grade_name === this.classValue) || (item.room_text === this.roomValue && item.grade_name === this.classValue)
        })
      }else {
        if(this.input =="" && this.classValue =="" && this.roomValue =="" ){
          this.$message('您还没有输入任何搜索内容');
        }else{
          result = this.data.studentData.filter(item => {
            return item.student_name === this.input || item.room_text === this.roomValue || item.grade_name === this.classValue
          })
        }
        
      }
      this.studentInfo = result
      this.pagenationData = this.studentInfo
    },
    reset() {
      this.studentInfoShow = false;
      this.input = ''
      this.classValue = ''
      this.roomValue = ''
      this.changePagenation()
    },
    handleSizeChange(val) {
      this.pageSize = val * 1
      this.changePagenation()
      // console.log(this.pagenationData)
    },
    handleCurrentChange(val) {
      this.current = val
      this.changePagenation()
      // console.log(this.pagenationData)
    },
    async deleteRow(index, rows) {
      const result = this.pagenationData.find((item, ind) => {
        return index === ind
      })
      console.log('result', result)
      await this.deleteMangerStudent(result.student_id)
      await this.getMangerStudent()
      console.log('clickstudentData',this.data.studentData.length)
      rows.splice(index, 1)
    },
    changePagenation() {
      this.pagenationData =this.studentInfoShow?this.pagenationData.slice((this.current-1)*this.pageSize,this.current * this.pageSize): this.data.studentData.slice((this.current - 1) * this.pageSize, this.current * this.pageSize)
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
  .search-wrap{
    width: 100%;
  }
  .search-wrap .input{
    display: inline-block;
    width:180px;
    padding:8px 4px;
    margin-right: 1px;
    outline: none;
    border-radius: 4px;
    border: solid 1px #ddd;
  }
  .el-select{
    display: inline-block;
    /* height:20px!important; */
    /* color: red!important;
    border-radius: 0!important; */
  }
  /* .el-select.el-select--mini{
    height: 100px;
  } */
  .el-input{
    /* display: inline-block;
    height: 100%!important; */
  }
  .main{
    width: 100%;
    /* height: 863px; */
    box-sizing: border-box;
    margin: 0 0 20px;
    background: #fff;
    padding-bottom: 80px;
    box-sizing: border-box;
  }
  .room-btn{
    padding: 10px 45px;
    margin-bottom: 24px;
  }
  .has-gutter{
    color: red!important;
  }
  el-table-column{
    width: 12.5%;
  }
  .is-left{
    color: red;
  }
  .el-btn span{
    color:#ccc!important;
  }
  .search-btn,.reset-btn{
    width: 111px; 
    height: 33px;
    font-size: 14px;
    background: #0a3ffd;
    outline: 0;
    border: solid 1px #ddd;
    border-radius: 4px;
    color: #fff;
  }
  .el-pagination{
    margin-top: 25px;
  }
  /*
  敏捷开发：工作进度，站立会议/晨会
  */
</style>

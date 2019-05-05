<template>
  <div class="wrapper">
    <div class="paddingBox" style="padding: 0px 24px 24px;">
      <h2>试卷列表</h2>
      <div class="content">
        <div class="contentTop">
          <div class="formBox">
            <p>考试类型:</p>
            <el-select v-model="examValue" placeholder>
              <el-option
                v-for="item in examOptions"
                :key="item.value"
                :label="item.label"
                :value="item.label"
              />
            </el-select>
          </div>
          <div class="formBox">
            <p>课程:</p>
            <el-select v-model="classValue" placeholder>
              <el-option
                v-for="item in classOptions"
                :key="item.value"
                :label="item.label"
                :value="item.label"
              />
            </el-select>
          </div>
          <!-- <div class="btnBox"> -->
          <el-button class="btn" style="width:130px;height:36px;text-align:center;margin-top:0;" 
            type="primary" @click="searchBtn">
            <i class="el-icon-search" /><span>查询</span>
          </el-button>
          <el-button class="btn" 
            style="width:130px;height:36px;text-align:center;margin-top:0;" 
            type="primary" @click="exportExcel">
              <i class="el-icon-search" /><span>导出Excel</span>
          </el-button>
        </div>
        <div class="content">
          <div class="nav">
            <span>试卷列表</span>
            <div class="type">
              <span v-for="(item,index) in navList" :key="index" 
                :class="index == changeClass ? 'active_span' : '' " @click="toggleType(index, $event)">
                {{ item }}
              </span>
            </div>
          </div>
          <el-table :data="alllist" :header-cell-style="tableHeaderColor" style="width: 100%">
            <el-table-column label="试卷信息">
              <template slot-scope="childData">
                <p>{{childData.row.title}}</p>
                <p>考试时间:{{0}} {{childData.row.number}}道题{{childData.row.status}}分</p>
              </template>
            </el-table-column>
            <el-table-column label="班级">
              <template slot-scope="childData">
                <p>教室班级</p>
                <p><span v-for="(item, index) in childData.row.grade_name" :key="index">{{item}}</span></p>
              </template>
            </el-table-column>
            <el-table-column label="创建人">
                <template slot-scope="childData">
                    <p>{{ childData.row.user_name }}</p>
                  </template>
            </el-table-column>
            <el-table-column label="开始时间">
              <template slot-scope="childData">
                <span>{{childData.row.start_time}}</span>
              </template>
            </el-table-column>
            <el-table-column label="结束时间">
              <template slot-scope="childData">
                <span>{{childData.row.end_time}}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="87">
              <template slot-scope="childData">
                <span class="detail" @click='goDetail(childData.row.exam_exam_id)'>详情</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState} from 'vuex'
import { timeFormat, momentTime } from '@/utils/index'


export default {
  name: 'List',
  data() {
    return {
      alllist: [],
      navList: ['全部', '进行中', '已结束'],
      changeClass: 0,
      examValue: '',
      classValue: '',
      examOptions: [{
        value: '选项1',
        label: '周考1'
      }, {
        value: '选项2',
        label: '周考2'
      }, {
        value: '选项3',
        label: '周考3'
      }, {
        value: '选项4',
        label: '月考'
      }],
      classOptions: [
        {
          value: '选项1',
          label: 'javaScript上'
        },
        {
          value: '选项2',
          label: 'javaScript下'
        },
        {
          value: '选项3',
          label: '模块化开发'
        },
        {
          value: '选项4',
          label: '移动端开发'
        },
        {
          value: '选项5',
          label: 'node基础'
        },
        {
          value: '选项6',
          label: '组件化开发(vue)'
        },
        {
          value: '选项7',
          label: '渐进式开发(react)'
        },
        {
          value: '选项8',
          label: '项目实战'
        },
        {
          value: '选项9',
          label: 'javaScript高级'
        },
        {
          value: '选项10',
          label: 'node高级'
        }
      ],
      value: '',
      tableData: [
        {
          info: 'Nodejs开发第二周摸底考试',
          info1: '考试时间: 1:30:0 4道题作弊0分',
          grade: '考试班级',
          grade1: '1701B 1701C',
          user: 'w916peach',
          start: '2019-03-16 10:00:00',
          end: '2019-03-16 11:30:00',
          update: '详情'
        },
        {
          info: 'Nodejs开发第二周摸底考试',
          info1: '考试时间: 1:30:0 4道题作弊0分',
          grade: '考试班级',
          grade1: '1701B 1701C',
          user: 'w916peach',
          start: '2019-03-16 10:00:00',
          end: '2019-03-16 11:30:00',
          update: '详情'
        },
        {
          info: 'Nodejs开发第二周摸底考试',
          info1: '考试时间: 1:30:0 4道题作弊0分',
          grade: '考试班级',
          grade1: '1701B 1701C',
          user: 'w916peach',
          start: '2019-03-16 10:00:00',
          end: '2019-03-16 11:30:00',
          update: '详情'
        },
        {
          info: 'Nodejs开发第二周摸底考试',
          info1: '考试时间: 1:30:0 4道题作弊0分',
          grade: '考试班级',
          grade1: '1701B 1701C',
          user: 'w916peach',
          start: '2019-03-16 10:00:00',
          end: '2019-03-16 11:30:00',
          update: '详情'
        }
      ]
    }
  },

  created() {
    this.getExamList()
    timeFormat()
    this.alllist = this.allExamList;
  },

  computed: {
    ...mapState({
      allExamList: state => state.exam.allExamList
    }),
  },

  methods: {
    ...mapActions({
      getExamList: 'exam/getExamList'
    }),
    // 导出Excel
    exportExcel(){
      // header与 data 的长度要一致,所以在此定义一个变量
      let header = Object.keys(this.allExamList[0]);
      // 此方法只接受数组, 所以我们取它的键值并转为字符串
      let list = this.allExamList.map(item => {
        let arr = Object.values(item);
        return arr.map(val => {
          return JSON.stringify(val)
        })
      });
      console.log(list,'list')
      import('@/vendor/Export2Excel').then(excel => {
        excel.export_json_to_excel({
          header: header,  // 导出文件的列名
          data: list,
          filename: '试卷列表',   // 导出的文件名
          bookType: 'xlsx'   // 导出类型(xlsx, csv, xls)
        })
      })
    },
    // 点击查询框
    searchBtn() {
      if(!this.examValue && !this.classValue) {
        this.$message({
          showClose: true,
          message: '请输入查询内容',
          type: 'error'
        })
      }else if(!this.examValue || !this.classValue) {
        this.$message({
          showClose: true,
          message: '查询内容不能为空,请继续输入...',
          type: 'warning'
        })
      } else {
        this.alllist = this.allExamList.filter(item => {
          return this.examValue === item.exam_name && this.classValue === item.subject_text
        })
      }
    },
    // 点击改变样式
    toggleType(index, e) {
      this.changeClass = index;
      let _time = momentTime(new Date())
      console.log(momentTime(new Date()))
      // 全部 - 进行中 - 已结束
      this.alllist = this.alllist.filter(item => {
        switch (e.target.innerText) {
          case '全部':
          return item.end_time > _time
          break;
          case '进行中':
          return item.end_time < _time
          break;
          default :
          return item;
        }
      })
      console.log(this.alllist, 'tab切换数据...')
    },
    // table表格的头部样式
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background-color: #f4f7f9;color: #000;font-weight: 500;width:100%; height: 53px;'
      }
    },
    //导出excel表
    exportExcel(){
      console.log('allExamList',this.allExamList)
      let header = Object.keys(this.allExamList[0]);
      let list = this.allExamList.map(item=> {
        let arr = Object.values(item);
        return arr.map(item=>JSON.stringify(item))
      })
      console.log('allExamList',list);
      import('@/vendor/Export2Excel').then(excel=>{
        excel.export_json_to_excel({
          header:header,
          data:list,
          filename:'',
          bookType:'xlsx'
        })
      })
    },
    // 点击去详情页
    goDetail(id) {
      console.log(id, '去详情页...')
      this.$router.push({
        path: '/exam/detail' + '?id=' + id
      })
    }
  }
}
</script>


<style scoped lang="scss">
.wrapper {
  margin-top:66px;
  width: 100%;
  height: 1150px;
  background: #f0f2f5;
  display: flex;
  flex-direction: column;
  .paddingBox {
    display: flex;
    flex-direction: column;
    background: #f0f2f5;
    min-height: 0;
    >h2 {
      display: block;
      font-size: 1.5em;
      font-weight: 400;
      padding: 20px 0px;
      margin-top: 10px;
    }
  }
}
.contentTop {
  background: rgb(255, 255, 255);
  padding: 24px;
  margin: 0px 0px 20px;
  border-radius: 10px;
  display: flex;
  .formBox {
    margin-left: -3px;
    margin-bottom: 20px;
    display: flex;
    padding-right: 60px;
    > p {
      color: #262626;
      font-size: 14px;
    }
    >el-select{
      width: 166px;
    }
  }
}
.contentBot {
  background: rgb(255, 255, 255);
  padding: 24px;
  margin: 0px 0px 20px;
  border-radius: 10px;
  .title {
    width: 100%;
    height: 76px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 14px;
      color: #262626;
    }
    > .condition {
      display: flex;
      span {
        border: 1px solid #d9d9d9;
        width: 60px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #1890ff;
        font-size: 14px;
      }
      :nth-child(1),
      :nth-child(2) {
        border-right-color: transparent;
      }
      span.active {
        border-color: #0139fd;
      }
    }
  }
}
.content {
  padding: 24px;
  box-sizing: border-box;
  background: #fff;
  border-radius: 10px;
}
.from {
  padding-bottom: 24px;
  box-sizing: border-box;
}
.btn {
  width: 150px;
  margin-left: -50px;
  margin-right:80px;
  background: blue;
}
.select {
  margin-right: 100px;
  width: 16.1%;
  min-width: 150px;
  margin-left: 10px;
}
.one {
  margin-left: 5%;
}
.content:nth-child(3) {
  margin-top: 20px;
}
.type {
  display: inline-block;
}
.active {
    color: blue;
    border-color: blue;
  }
.spans {
    margin: 0;
    color: skyblue;
    border: 1px solid #eee;
    display: inline-block;
    cursor: pointer;
    padding: 10px;
  }
.detail {
  color: blue
}
.type .active_span{
  /* margin-left: 88%; */
    color: blue;
    border-color:blue;
}
.type   span{
    border:1px solid #f4f7f9;
    padding:5px 15px;
    cursor: pointer;
  }
.nav{
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
}
</style>


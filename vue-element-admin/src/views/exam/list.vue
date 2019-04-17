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
          <el-button class="btn" style="width:130px;height:36px;text-align:center;margin-top:0;" type="primary" @click="searchBtn">
            <i class="el-icon-search" /><span>查询</span>
          </el-button>
          <!-- </div> -->
        </div>
        <div class="contentBot">
          <div class="title">
            <span>试卷列表</span>
            <div class="condition" @click="toggleType">
              <span>全部</span>
              <span>进行中</span>
              <span>已结束</span>
            </div>
          </div>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column fit="true" prop="info" label="试卷信息" width="240" />
            <el-table-column prop="grade" label="班级" width="200" />
            <el-table-column prop="user" label="创建人" />
            <el-table-column prop="start" label="开始时间" width="180" />
            <el-table-column prop="end" label="结束时间" width="180" />
            <el-table-column style="color: #0139FD;" prop="update" align="center" label="操作">
              <template>
                <el-button type="text" size="small">详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
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
  methods: {
    searchBtn() {
      console.log(this.examValue)
      console.log(this.classValue)
    },
    toggleType(e) {
      console.log(e.target.innerText)  //全部 - 进行中 - 已结束
    }
  }
}
</script>


<style scoped lang="scss">
.wrapper {
  margin-top:66px;
  width: 100%;
  height: 750px;
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
</style>


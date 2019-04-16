<template>
  <div class="chart-container">
    <h2>学生管理</h2>
    <div class="search-wrap">
      <input v-model="input" placeholder="输入学生姓名" class="input">
      <el-select
        v-model="value"
        placeholder="请输入教室号"
        size="mini"
      >
        <el-option
          v-for="item in roomdata"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-select
        v-model="value"
        placeholder="班级名"
        size="mini"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <button class="search-btn">搜索</button>
      <button class="reset-btn">重置</button>
    </div>
    <div class="main">
      <el-table
        class="table-wrap"
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column
          prop="name"
          label="姓名"
        />
        <el-table-column
          prop="studentNumber"
          label="学号"
        />
        <el-table-column
          prop="classNumber"
          label="班级"
        />
        <el-table-column
          prop="roomNumber"
          label="教室号"
        />
        <el-table-column
          prop="password"
          label="密码"
        />
        <el-table-column
          label="操作"
        >
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click.native.prevent="deleteRow(scope.$index, tableData)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      input: '',
      roomValue: '请输入教室号',
      roomdata: [
        {
          value: '选项1',
          label: '34310'
        },
        {
          value: '选项2',
          label: '34301'
        },
        {
          value: '选项3',
          label: '34302'
        },
        {
          value: '选项4',
          label: '34303'
        },
        {
          value: '选项5',
          label: '34304'
        },
        {
          value: '选项6',
          label: '34305'
        }
      ],
      options: [{
        value: '选项1',
        label: '1610C'
      }, {
        value: '选项2',
        label: '1701E'
      }, {
        value: '选项3',
        label: '1611C'
      }, {
        value: '选项4',
        label: '1609B'
      }, {
        value: '选项5',
        label: '1609A'
      }],
      tableData: [
        {
          name: '张娜',
          studentNumber: '16323',
          classNumber: '1611C',
          roomNumber: '34308',
          password: 'Pm626521@'
        },
        {
          name: '张娜',
          studentNumber: '16323',
          classNumber: '1611C',
          roomNumber: '34308',
          password: 'Pm626521@'
        },
        {
          name: '张娜',
          studentNumber: '16323',
          classNumber: '1611C',
          roomNumber: '34308',
          password: 'Pm626521@'
        },
        {
          name: '张娜',
          studentNumber: '16323',
          classNumber: '1611C',
          roomNumber: '34308',
          password: 'Pm626521@'
        },
        {
          name: '张娜',
          studentNumber: '16323',
          classNumber: '1611C',
          roomNumber: '34308',
          password: 'Pm626521@'
        },
        {
          name: '张娜',
          studentNumber: '16323',
          classNumber: '1611C',
          roomNumber: '34308',
          password: 'Pm626521@'
        }
      ]
    }
  },
  methods: {
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
    padding: 4px;
    margin-right: 1px;
    outline: none;
    border-radius: 4px;
    border: solid 1px #ddd;
  }
  .el-select{
    display: inline-block;
    /* height:20px!important; */
    color: red!important;
    border-radius: 0!important;
  }
  .el-input{
    display: inline-block;
    height: 100%!important;
  }
  .main{
    width: 100%;
    height: 863px;
    box-sizing: border-box;
    margin: 0 0 20px;
    background: #fff;
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
    padding: 4px 45px;
    margin: 0;
    margin-right:1;
    font-size: 14px;
    background: #0a3ffd;
    outline: 0;
    border: solid 1px #ddd;
    border-radius: 4px;
    color: #fff;
  }
  /*
  敏捷开发：工作进度，站立会议/晨会
  */
</style>

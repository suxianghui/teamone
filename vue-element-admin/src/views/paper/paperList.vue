<template>
  <div class="wrap">
    <div class="search">
      <el-row class="block-col-2 ma">
        <el-col :span="12">
          <el-dropdown trigger="click" class="el">
            <div class="box">
              <span class="text">状态:</span>
              <span class="el-dropdown-link sl">
                <i class="el-icon-arrow-down el-icon--right" />
              </span>
            </div>
            <el-dropdown-menu slot="dropdown" class="dropdown1">
              <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
              <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-check-outline">蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
      <el-row class="block-col-2 ma">
        <el-col :span="12">
          <el-dropdown trigger="click" class="el">
            <div class="box">
              <span class="text">班级:</span>
              <span class="el-dropdown-link sl">
                <i class="el-icon-arrow-down el-icon--right" />
              </span>
            </div>
            <el-dropdown-menu slot="dropdown" class="dropdown1">
              <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
              <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-check-outline">蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
      <el-button type="primary" class="but">查询</el-button>
    </div>
    <div class="list">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="班级" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="姓名" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="阅卷状态">
          <template>
            <span style="margin-left: 10px" />
          </template>
        </el-table-column>
        <el-table-column label="开始时间">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="结束时间">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="成材率">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">批卷</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="page">
      <el-pagination class="nav" background layout="prev, pager, next" :total="1000" />
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions,mapState} from 'vuex'
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      //计算属性
      computed:{
    ...mapState({
      // getList: state => state
    }),
  },
  created(){
    this.gitList({score:99})
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    ...mapActions({
      detail:'examinations/detail',
    })
  }
    }
  }
}
</script>
<style scoped>
.wrap{
  width:100%;
  height:auto;
  padding: 0px 24px 24px;
  box-sizing: border-box;
}
.search{
  width:100%;
  height:121px;
  display: flex;
  align-items: center;
}
.list{
  width:100%;
  height:auto;
  padding:24px;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 10px;
}
.box{
  display: flex;
  align-items: center;
  /* margin-bottom: 30px; */
}
.text{
  width:40px;
}
.sl {
  display: inline-block;
  width: 200px;
  height: 30px;
  line-height: 30px;
  text-align: right;
  padding-right: 8px;
  border: 1px solid #d9d9d9;
}

.page{
  width:100%;
  height:auto;
  background: #fff;
  padding: 16px 10px 24px;
}
</style>
<style>
.ma{
  margin-left: 80px;
}
.but{
  margin-left: 80px;
  /* margin-bottom: 30px; */
}
.nav{
  float: right;
}
.dropdown1{
  width:200px;
}
</style>


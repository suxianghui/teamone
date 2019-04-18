<template>
  <div class="chart-container">
    <h2 class="title">待批班级</h2>
    <div class="content">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="班级名" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="课程名称" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="阅卷状态">
          <template>
            <span style="margin-left: 10px"/>
          </template>
        </el-table-column>
        <el-table-column label="课程名称">
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
        <el-pagination class="nav" background layout="prev, pager, next" :total="1000"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions,mapState } from "vuex";
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      // examList:[],
    };
  },
  computed:{
    ...mapState({
      // examList: state => state.examination.examList
    }),
  },
  created(){
  },
  mounted(){
    // console.log(this.examList)
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    ...mapActions({
      gitList:'examinations/gitList',
    })
  }
};
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: auto;
  padding: 0px 24px 24px;
  box-sizing: border-box;
}
.title {
  padding: 20px 0px;
  margin-top: 10px;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 20px;
}
.content {
  padding: 24px;
  box-sizing: border-box;
  background: #fff;
  border-radius: 10px;
}
.page{
  width:100%;
  height:auto;
  background: #fff;
  padding: 16px 10px 24px;
}
</style>
<style>
.nav{
  float: right;
}
</style>


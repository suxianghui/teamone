<template>
  <div class="chart-container">
    <h2 class="title">待批班级</h2>
    <div class="content">
      <el-table
        :data="detail.data && detail.data.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        style="width: 100%"
      >
        <el-table-column label="班级名" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.grade_name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="课程名称" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.subject_text }}</span>
          </template>
        </el-table-column>
        <el-table-column label="阅卷状态">
          <template>
            <span style="margin-left: 10px"/>
          </template>
        </el-table-column>
        <el-table-column label="课程名称">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.subject_text }}</span>
          </template>
        </el-table-column>
        <el-table-column label="成材率">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.room_text }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">批卷</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="page">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 20, 40]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="detail.data && detail.data.length"
          class="nav"
          background
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      currentPage: 1, //初始页
      pagesize: 10, //    每页的数据
      userList: [],
      grade_id: ""
    };
  },
  computed: {
    // 获取到的数据
    ...mapState({
      detail: state => state.examinations.detail
    })
  },
  created() {
    // 调用获取数据接口 ，使得一进入页面就有数据
    this.getexamDetail();
    console.log("dee", this.detail);
    this.userList = this.detail && this.detail.data;
  },
  methods: {
    ...mapActions({
      getexamDetail: "examinations/getstudentPapers",
      getExamination: "examinations/getExamination"
    }),
    ...mapMutations({
      changegradeName: "examinations/changegradeName"
    }),
    handleEdit(index, row) {
      console.log(index, row, "......");
      this.grade = this.detail.data[index];
      // let res = await this.getExamination({grade_id:this.userList[index].grade_id});
      console.log(this.grade, "ffff");
      this.changegradeName(this.grade.grade_name);
      this.$router.push({
        path: "/paper/paperList",
        query: { grade_id: this.grade.grade_id }
      });
    },
    // 引入store中的方法， 在页面使用

    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function(size) {
      this.pagesize = size;
      console.log(this.pagesize); //每页下拉显示数据
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
      console.log(this.currentPage); //点击第几页
    }
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
.page {
  width: 100%;
  height: auto;
  background: #fff;
  padding: 16px 10px 24px;
}
</style>
<style>
.nav {
  float: right;
}
</style>


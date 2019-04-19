<template>
  <div class="wrap">
    <div class="search">
      <el-row class="block-col-2 ma">
        <el-col :span="12">
          <el-dropdown trigger="click" class="el">
            <div class="box">
              <span class="text">状态:</span>
              <span class="el-dropdown-link sl">
                <i class="el-icon-arrow-down el-icon--right"/>
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
                <i class="el-icon-arrow-down el-icon--right"/>
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
      <!-- examList.slice((currentPages-1)*pagesizes,currentPages*pagesizes) -->
      <el-table
        :data="userLists.slice((currentPages-1)*pagesizes,currentPages*pagesizes)"
        style="width: 100%"
      >
        <el-table-column label="班级" width="180">
          <template>
            <span style="margin-left: 10px">{{grade.grade_name}}</span>
          </template>
        </el-table-column>
        <el-table-column label="姓名" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.student_name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="阅卷状态">
          <template>
            <span style="margin-left: 10px"/>
          </template>
        </el-table-column>
        <el-table-column label="开始时间">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.start_time }}</span>
          </template>
        </el-table-column>
        <el-table-column label="结束时间">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.end_time }}</span>
          </template>
        </el-table-column>
        <el-table-column label="成材率">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
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
          :current-page="currentPages"
          :page-sizes="[5, 10, 20, 40]"
          :page-size="pagesizes"
          layout="total, sizes, prev, pager, next, jumper"
          :total="userLists.length"
          class="nav"
          background
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
//student_name
export default {
  data() {
    return {
      currentPages: 1, //初始页
      pagesizes: 10, //    每页的数据
      userLists: [],
      grade: ""
    };
  },
  computed: {
    // 获取到的数据
    ...mapState({
      examList: state => state.examinations.examList.exam
    })
  },
  created() {
    this.grade = this.$route.query.grade;
    console.log("sss",this.$route.query.grade);
    // 调用获取数据接口 ，使得一进入页面就有数据
    this.getExamination({
      grade_id: this.grade.grade_id,
      student_id:this.grade.student_id,
      exam_exam_id:this.grade.exam_exam_id
    });
  },
  mounted() {
    // 在页面打印看是否获取到值
    console.log(this.examList, ".......");
    this.userLists = this.examList;
  },
  methods: {
    // 初始页currentPages、初始每页数据数pagesizes和数据data
    handleSizeChange: function(size) {
      this.pagesizes = size;
      console.log(this.pagesizes); //每页下拉显示数据
    },
    handleCurrentChange: function(currentPages) {
      this.currentPages = currentPages;
      console.log(this.currentPages); //点击第几页
    },
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push({
        path: "/paper/detail",
      });
    },
    // 引入store中的方法， 在页面使用
    ...mapActions({
      getExamination: "examinations/getExamination"
    })
  }
};
</script>
<style scoped>
.wrap {
  width: 100%;
  height: auto;
  padding: 0px 24px 24px;
  box-sizing: border-box;
}
.search {
  width: 100%;
  height: 121px;
  display: flex;
  align-items: center;
}
.list {
  width: 100%;
  height: auto;
  padding: 24px;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 10px;
}
.box {
  display: flex;
  align-items: center;
  /* margin-bottom: 30px; */
}
.text {
  width: 40px;
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

.page {
  width: 100%;
  height: auto;
  background: #fff;
  padding: 16px 10px 24px;
}
</style>
<style>
.ma {
  margin-left: 80px;
}
.but {
  margin-left: 80px;
  /* margin-bottom: 30px; */
}
.nav {
  float: right;
}
.dropdown1 {
  width: 200px;
}
</style>


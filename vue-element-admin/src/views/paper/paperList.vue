<template>
  <div class="wrap">
    <div class="search">
      <el-row class="block-col-2 ma">
        <el-col :span="12">
          <el-dropdown trigger="click" class="el">
            <div class="box">
              <span class="text">状态:</span>
              <el-select v-model="valueu" placeholder="请选择" class="sl"></el-select>
            </div>
            <el-dropdown-menu slot="dropdown" class="dropdown1"></el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
      <div class="box">
        <span class="text">班级:</span>
        <el-select v-model="valuee" placeholder="请选择" class="sl">
          <el-option
            v-for="item in detail"
            :key="item.grade_id"
            :label="item.grade_name"
            :value="item.grade_id"
          ></el-option>
        </el-select>
      </div>
      <el-button type="primary" class="but">查询</el-button>
    </div>
    <div class="list">
      <el-table
        :data="examList ? examList.exam.slice((currentPages-1)*pagesizes,currentPages*pagesizes) : []"
        style="width: 100%"
      >
        <el-table-column label="班级" width="180">
          <template>
            <span style="margin-left: 10px">{{gradeName}}</span>
          </template>
        </el-table-column>
        <el-table-column label="姓名" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.student_name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="阅卷状态">
          <template>
            <span style="margin-left: 10px">{{status ? '已阅' : '未阅'}}</span>
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
            <el-button size="mini" type="danger" @click="handleEdits(scope.$index, scope.row)">批卷</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="page">
        <el-pagination
          @size-change="handleSizeChanges"
          @current-change="handleCurrentChanges"
          :current-page="currentPages"
          :page-sizes="[5, 10, 20, 40]"
          :page-size="pagesizes"
          layout="total, sizes, prev, pager, next, jumper"
          :total="examList ? examList.exam.length : 1"
          class="nav"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      currentPages: 1, //初始页
      pagesizes: 10, //    每页的数据
      userLists: [],
      name: "",
      grade: "",
      grades: "",
      valuee: "",
      valueu: "",
      status:0,
    };
  },
  computed: {
    // 获取到的数据
    ...mapState({
      examList: state => state.examinations.examList,
      detail: state => state.examinations.detail.data,
      gradeName: state=>state.examinations.gradeName
    })
  },
  created() {
    this.getExamination({
      grade_id:this.$route.query.grade_id
    });
    this.userLists = this.examList ? this.examList.exam : [];
    console.log(this.examList, "examlist");
    console.log("this.$route.query",this.$route.query)
    // 调用获取数据接口 ，使得一进入页面就有数据
    //学生列表exam_student_id
    
    console.log('asdfg',this.examList)
    this.getstudentPapers();
  },

  methods: {
    ...mapActions({
      // detailList: "examinations/students",
      getExamination: "examinations/getExamination",
      getstudentPapers: "examinations/getstudentPapers"
    }),
    // 初始页currentPages、初始每页数据数pagesizes和数据data
    handleSizeChanges: function(size) {
      this.pagesizes = size;
      console.log(this.pagesizes); //每页下拉显示数据
    },
    handleCurrentChanges: function(currentPages) {
      this.currentPages = currentPages;
      console.log(this.currentPages); //点击第几页
    },
    handleEdits(index, row) {
      console.log(index, row);
      this.grades = this.examList.exam[index];
      // let res = await this.detailList();
      // console.log("dddd",res)
      this.$router.push({
        path: "/paper/detail",
        query:{grades:this.grades}
      });
    },
    // 引入store中的方法， 在页面使用

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


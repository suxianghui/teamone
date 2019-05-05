<template>
  <div class="wrap">
    <h2 class="title">阅卷</h2>
    <div class="daw">
      <div class="content1">
        <div class="box" v-for="(item,index) in list ? list && list.questions : []" :key="index">
          <div class="oneQuestion">{{item.title}}</div>
          <div class="mark">
            <VueMarkdown class="mdown">{{item.questions_stem}}</VueMarkdown>
          </div>
          <div class="daanbox">
            <div class="xs">
              <span>学生答案</span>
              <VueMarkdown class="mdown">{{item.student_answer}}</VueMarkdown>
            </div>
            <div class="bz">
              <span>标准答案</span>
              <VueMarkdown class="mdown">{{item.questions_answer}}</VueMarkdown>
            </div>
          </div>
        </div>
      </div>
      <div class="content2">
        <h3>{{name}}</h3>
        <div class="fen">
          得分:
          <span>{{sliderValue}}</span>
        </div>
        <div class="block">
          <el-slider v-model="value1" @change="changeValue"></el-slider>
        </div>
        <!-- <el-button type="primary" @click="sure">确定</el-button> -->
        <el-button type="text" @click="open" class="open">确定</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import VueMarkdown from "vue-markdown";

export default {
  data() {
    return {
      lists: [],
      name: "",
      flg: true,
      flgs: true,
      value1: 0,
      sliderValue: 0
      // grades:null,
    };
  },
  components: {
    VueMarkdown
  },
  computed: {
    ...mapState({
      list: state => state.examinations.List.data
    })
  },
  created() {
    this.detailList({
      exam_student_id: this.$route.query.exam_student_id
    });
    console.log("t.exam_student_id", this.$route.query);
    // this.grades = this.$route.query.grades;
    this.name = this.$route.query.student_name;
    // console.log("999", this.grades);
    this.lists = this.list ? this.list && this.list.questions : [];
    console.log("aaaa", this.lists);
    console.log("lll", this.lists);
  },
  methods: {
    ...mapActions({
      detailList: "examinations/students",
      studentspsjuan: "examinations/studentspsjuan"
    }),
    sure() {
      this.flg = !this.flg;
      console.log(this.flg);
    },
    changeValue(e) {
      console.log(e);
      this.sliderValue = e;
    },
    open() {
      this.studentspsjuan({
        exam_student_id:this.$route.query.exam_student_id,
        score:this.sliderValue
      })
      this.$confirm("分数值是" + this.sliderValue, "确定提交阅卷结果？", {
        confirmButtonText: "批改成功",
        cancelButtonText: "取消批改",
        type: "warning",
        center: true,
        closeOnClickModal:false,
      })
        .then(() => {
          this.$confirm(
            "批改试卷成功 高诗蕊得分" + this.sliderValue,
            "批卷结果",
            {
              confirmButtonText: "知道了",
              showCancelButton: false,
              type: "warning",
              center: true,
              closeOnClickModal:false,
            }
          ).then(() => {
            this.list.score = this.list.score === 0 ? this.list.score = 1 : this.list.score = 1;
            console.log("this.list.grade_id", this.list.score);
            this.$router.push({
              path: "/paper/paperList",
              query: { grade_id: this.list.grade_id }
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消批改"
          });
        });
    }
  }
};
</script>
<style scoped>
.wrap {
  width: 100%;
  height: auto;
  padding: 24px;
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
.daw {
  width: 100%;
  height: auto;
  display: flex;
}
.content1 {
  flex: 8;
  height: auto;
  background: #fff;
  padding: 24px;
  box-sizing: border-box;
  border-radius: 10px;
}
.content2 {
  flex: 2;
  height: 300px;
  background: #fff;
  margin-left: 24px;
  border-radius: 10px;
  padding: 24px;
  box-sizing: border-box;
}
.content1 .box {
  width: 100%;
  height: auto;
}
.oneQuestion {
  margin: 20px 0;
  font-size: 16px;
  line-height: 4;
  color: #000;
}
.daanbox {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
}
.daanbox .xs {
  flex: 4.5;
  height: auto;
}
.daanbox .bz {
  flex: 4.5;
  height: auto;
}
.morkbox {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
}
.mork {
  position: fixed;
  top: 25%;
  left: 50%;
  margin-left: -222px;
  width: 450px;
  height: 200px;
  background: #fff;
  border-radius: 10px;
}
.mork i {
  display: block;
  width: 100%;
  height: auto;
  text-align: center;
  padding: 30px 0 0 0;
  box-sizing: border-box;
}
.mork p {
  width: 100%;
  text-align: center;
  /* line-height: 33px; */
}
.mork span {
  display: block;
  text-align: center;
  line-height: 22px;
  color: #595959;
  font-size: 14px;
}
.btnn {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 60px 0;
  box-sizing: border-box;
}
.action {
  display: none !important;
}
</style>
<style>
.mark {
  width: 100%;
  height: auto;
}
.mdown p:nth-child(1) {
  width: 100%;
  height: auto;
}
.box:nth-child(2) .mdown .language-js {
  width: 100%;
  height: 545px;
  overflow: scroll;
}
.mdown > p > img {
  width: 100% !important;
  height: 100% !important;
}
.el-icon-warning {
  display: block;
}
..el-message-box__status::before {
  display: block;
}
.el-message-box__title span {
  display: block;
}
.open {
  padding:7px 20px;
  color: #ffffff;
  background-color: #1890ff;
  border-color: #1890ff;
  white-space: nowrap;
  cursor: pointer;
  text-align: center;
}
.el-icon-close:before {
    content: "";
}
</style>



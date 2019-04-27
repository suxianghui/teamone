<template>
  <div class="wrap">
    <h2 class="title">阅卷</h2>
    <div class="daw">
      <div class="content1">
        <div class="box" v-for="(item,index) in lists" :key="index">
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
        <el-button type="primary" @click="sure">确定</el-button>
      </div>
    </div>
    <div class="morkbox" :class="flg ? 'action' : ''">
      <div class="mork">
        <i>
          <img src="../../icons/ss.png" alt>
        </i>
        <p>确定提交阅卷结果？</p>
        <span>分数值是{{sliderValue}}</span>
        <div class="btnn">
          <el-button @click="del">取消</el-button>
          <el-button type="primary" @click="haha">确定</el-button>
        </div>
      </div>
    </div>
    <div class="morkbox" :class="flgs ? 'action' : ''">
      <div class="mork">
        <i>
          <img src="../../icons/ll.png" alt>
        </i>
        <p>批卷结果</p>
        <span>批改试卷成功 {{name}}得分{{sliderValue}}</span>
        <div class="btnn">
          <el-button type="primary" @click="hehe">知道了</el-button>
        </div>
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
      sliderValue: 0,
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
    console.log('t.exam_student_id',this.$route.query)
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
    del() {
      this.flg = !this.flg;
      console.log(this.flg);
    },
    changeValue(e) {
      console.log(e);
      this.sliderValue = e;
    },
    haha() {
      this.flg = !this.flg;
      this.flgs = !this.flgs;
      this.studentspsjuan({
        exam_student_id: this.$route.query.exam_student_id,
        score: this.sliderValue
      });
    },
    hehe(){
      console.log(this.list)
    this.$router.push({
        path: "/paper/paperList",
        query:{grade_id:this.list.grade_id}
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
</style>



<template>
  <div class="box">
    <div class="tittle">查看试题</div>
    <div class="topbox">
      <div class="curriculumtype">
        <span>课程类型: </span>
        <span :class="isTrue?'all backblue':'all'" @click="tapAll">All</span>
        <div style="display: inline-block" v-if="isTrue===false">
          <span v-for="(item,index) in currtype" :key="index" :class="clickindex==index?'currsps backblue':'currsps'" @click="bindtap(item,index)">{{ item.subject_text }}</span>
        </div>
        <div style="display: inline-block" v-if="isTrue">
          <span v-for="(item,index) in currtype" :key="index" class="currsps backblue" @click="bindtap(item,index)">{{ item.subject_text }}</span>
        </div>
      </div>
      <div class="studytype">
        <div class="select">
          <span>考试类型 : </span>
          <el-select slot="prepend" v-model="studytypevalue" placeholder="" class="sel" @change="examstudy">
            <el-option v-for="(item,index) in studyType" :key="index" :label="item.exam_name" :value="item.exam_id" />
          </el-select>
        </div>
        <div class="select">
          <span>题目类型 : </span>
          <el-select slot="prepend" v-model="messtypevalue" placeholder="" class="sel" @change="subjectstudy">
            <el-option v-for="(item,index) in messType" :key="index" :label="item.questions_type_text" :value="item.questions_type_id" />
          </el-select>
        </div>
        <div>
          <el-button type="primary" class="btn" icon="el-icon-search" @click="clicktap">查询</el-button>
        </div>
      </div>
    </div>
    <div class="bottombox">
      <div class="bottomlittle">
        <router-link :to="{path:'details'}">
          <div v-for="(item,index) in options" :key="index" class="childrenbox">
            <p class="stem">{{ item.questions_stem }}</p>
            <div class="text">
              <span class="type_text">{{ item.questions_type_text }}</span>
              <span class="subject_text">{{ item.subject_text }}</span>
              <span class="exam_name">{{ item.exam_name }}</span>
            </div>
            <p class="name">{{ item.user_name }} 发布</p>
            <router-link :to="{path:'add'}">
              <div class="abs">编辑</div>
            </router-link>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      clickindex: null,
      currtype: [],
      currType: '',
      isTrue: false,
      studytypevalue: '',
      messtypevalue: '',
      studyType: [],
      messType: [],
      studyid:'',
      examid:'',
      subjectid:'',
      options: [{
        subject_text: 'javaScript上',
        exam_name: '周考1',
        user_name: 'w916peach',
        questions_type_text: '简答题',
        questions_stem: '什么是闭包？',
        questions_answer: '声明在函数内部的函数'
      }, {
        subject_text: 'javaScript上',
        exam_name: '月考',
        user_name: 'w916peach',
        questions_type_text: '代码补全',
        questions_stem: '机器人归为',
        questions_answer: '声明在函数内部的函数'
      }, {
        subject_text: 'node基础',
        exam_name: '周考1',
        user_name: 'dingshaoshan',
        questions_type_text: '代码补全',
        questions_stem: '解构赋值和数组的map方法',
        questions_answer: '声明在函数内部的函数'
      }]
    }
  },
  methods: {
    ...mapActions({
      studyTypes : 'getTypeExam/getTypeStudy',
      curriculums: 'gettingLesson/getTypeCurriculum',
      subjects: 'getTypeQuestion/getTypeQuestions',
      conditionals:'conditionalTests/conditional'
    }),
    //subject
    bindtap(item, index) {
      this.currType = item.subject_id
      this.clickindex = index
    },
    //exam
    examstudy(e){
      this.examid = e
    },
    //questions_type
    subjectstudy(e){
      this.subjectid = e;
    },
    tapAll(e) {
      this.currType = e.target.innerHTML
      this.isTrue = !this.isTrue
    },
    clicktap(){
      this.conditionals({
        questinos_type_id : this.subjectid,
        subject_id : this.currType,
        exam_id : this.examid
      })
    }
  },
  async created(){
    this.currtype = await this.curriculums();
    this.studyType = await this.studyTypes();
    this.messType = await this.subjects();
  }
} 
</script>

<style scoped>
  .box {
    position: relative;
    width: 100%;
    height: calc(100vh - 84px);
    height: 100%;
    padding-top:66px;
  }

  .tittle {
    padding: 30px 15px;
    font-size: 26px;
    font-weight: 200;
  }

  .topbox {
    width: 95%;
    height: 184px;
    background: white;
    border-radius: 10px;
    padding: 24px;
    margin: 0 0 20px 20px;
  }

  .bottombox {
    width: 95%;
    background: white;
    border-radius: 10px;
    padding: 24px;
    margin: 0 0 20px 20px;
  }

  .bottomlittle {
    width: 1605px;
  }

  .curriculumtype {
    height: 39px;
    line-height: 39px;
    margin-left: 30px;
  }

  .all {
    display: inline-block;
    line-height: 20px;
    height: 22px;
    padding: 0 10px;
    border-radius: 2px;
    font-size: 12px;
    margin-right: 8px;
    cursor: pointer;
    white-space: nowrap;
  }

  .currsps {
    display: inline-block;
    line-height: 20px;
    height: 22px;
    padding: 0 10px;
    border-radius: 2px;
    font-size: 12px;
    margin-right: 8px;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .backblue {
    background: blue;
    color: white;
  }

  .studytype {
    width: 100%;
    height: 73px;
    margin-top: 10px;
  }

  .select {
    width: 401.25px;
    height: 63px;
    line-height: 63px;
    margin: 5px 20px 0 15px;
    float: left;
  }

  .sel {
    margin-left: 5px;
  }

  .btn {
    width: 130px;
    height: 32px;
    background: #0139fd;
    float: left;
    margin-top: 20px;
  }

  .childrenbox {
    width: 98%;
    height: 115px;
    border-bottom: 1px solid #eee;
    position: relative;
    font-size: 14px;
    margin: 0;
    cursor: pointer;
  }

  .childrenbox:hover {
    background: #eae8ee;
  }

  .abs {
    width: 40px;
    height: 30px;
    position: absolute;
    right: 30px;
    top: 50%;
    margin-top: -15px;
    color: blue;
  }

  .stem {
    padding: 15px 0;
  }

  .name {
    color: blue;
  }

  .type_text {
    padding: 3px 6px;
    color: #1890ff;
    background: #e6f7ff;
    border: 1px solid #91d5ff;
    margin-right: 5px;
    font-size: 12px;
  }

  .subject_text {
    padding: 3px 6px;
    color: #2f54eb;
    background: #f0f5ff;
    border: 1px solid #adc6ff;
    font-size: 12px;
  }

  .exam_name {
    padding: 3px 6px;
    color: #fa8c16;
    background: #fff7e6;
    border: 1px solid #ffd591;
    font-size: 12px;
  }
</style>

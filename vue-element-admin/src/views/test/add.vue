<template>
  <div class="chart-container">
    <div class="tittle">试题管理</div>
    <div class="box">
      <div class="inp">
        <p>题目信息</p>
        <p>题干</p>
        <el-input v-model="title" placeholder="请输入题目标题,不超过20个字" class="elinput" />
      </div>
      <div class="textear">
        <p>题目主题</p>
        <div class="editor-container">
          <markdown-editor v-model="questions_stem" height="300px" class="mark" />
        </div>
      </div>
      <div class="select">
        <P>请选择考试类型</P>
        <el-select slot="prepend" v-model="exam_id" placeholder="请选择" class="sel">
          <el-option
            v-for="(item,index) in study"
            :key="index"
            :label="item.label"
            :value="item.exam_name"
          />
        </el-select>
      </div>
      <div class="select">
        <P>选择课程类型</P>
        <el-select slot="prepend" v-model="subject_id" placeholder="请选择" class="sel">
          <el-option
            v-for="(item,index) in curriculum"
            :key="index"
            :label="item.label"
            :value="item.subject_text"
          />
        </el-select>
      </div>
      <div class="select">
        <P>选择题目类型</P>
        <el-select slot="prepend" v-model="questions_type_id" placeholder="请选择" class="sel">
          <el-option
            v-for="(item,index) in subject"
            :key="index"
            :label="item.label"
            :value="item.questions_type_text"
          />
        </el-select>
      </div>
      <div class="textear">
        <p>答案信息</p>
        <div class="editor-container">
          <markdown-editor v-model="questions_answer" height="300px" class="mark" />
        </div>
      </div>
      <div class="btn">
        <el-button type="primary" @click="bindtap">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import MarkdownEditor from '@/components/MarkdownEditor'
import { mapActions } from 'vuex'
export default {
  name: 'MarkdownDemo',
  components: { MarkdownEditor },
  data() {
    return {
      title: '',
      questions_stem: '',
      exam_id: '',
      subject_id: '',
      questions_type_id: '',
      questions_answer: '',
      study: [],
      curriculum: [],
      subject: [],
      user_id:''
    }
  },
  computed: {
  },
  methods: {
    ...mapActions({
      studyType : 'getTypeExam/getTypeStudy',
      curriculums: 'gettingLesson/getTypeCurriculum',
      subjects: 'getTypeQuestion/getTypeQuestions',
      clickaddQuestions:'addQuestions/addQuestionStudy',
      CurrentUser:'addQuestions/CurrentUserInfor'
    }),
    bindtap(){
      if(this.title == '' && this.questions_stem == '' && this.exam_id == '' && this.subject_id == '' && this.questions_type_id == '' && this.questions_answer == '' && this.user_id == ''){
         return console.log('缺少参数')
      }else{
        this.clickaddQuestions({
            title : this.title,
            questions_stem : this.questions_stem,
            exam_id : this.exam_id,
            subject_id : this.subject_id,
            questions_type_id : this.questions_type_id,
            questions_answer : this.questions_answer,
            user_id : this.user_id
        })
      }
      
    }
  },
  async created(){
  this.study = await this.studyType()
  this.curriculum = await this.curriculums()
  this.subject = await this.subjects()
  this.user_id = await this.CurrentUser()
  }
}
</script>

  <style scoped>
    .chart-container {
      position: relative;
      width: 100%;
      height: calc(100vh - 84px);
      height: 100%;
      padding-top:66px;
    }

    .tittle {
      padding: 30px 15px;
      font-size:26px;
      font-weight: 200;
    }

    .box {
      width: 96%;
      height: 100%;
      background: #fff;
      margin: 0 auto;
      border-radius: 15px;
      margin-bottom: 20px;
    }

    .inp p {
      width: 100% !important;
      height: 0 !important;
      padding-top: 20px;
      padding-left: 15px;
    }
    .elinput{
        padding-top: 20px;
        padding-left: 15px;
        width: 400px;

    }
    .editor-container{
    margin-bottom: 30px;
  }
  .tag-title{
    margin-bottom: 5px;
  }
  .mark{
    width: 98% !important;
    height: 300px !important;
    margin: 0 auto;
  }
  .textear p{
    padding-left: 1%;
  }
  .el-select .el-input {
      width: 130px;
    }
  .select p{
    padding: 10px;
    padding-left: 20px;
  }
  .select .sel{
     padding: 10px;
     padding-left: 20px;
  }
  .btn{
    margin: 20px;
  }
</style>

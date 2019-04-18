<template>
  <div class="chart-container">
    <div class="tittle">编辑试题</div>
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
        <el-select slot="prepend" v-model="exam_name" placeholder="请选择" class="sel" @change="exam">
          <el-option v-for="(item,index) in study" :key="index" :label="item.exam_name" :value="item.exam_id" />
        </el-select>
      </div>
      <div class="select">
        <P>选择课程类型</P>
        <el-select slot="prepend" v-model="subject_text" placeholder="请选择" class="sel" @change="subjectchange">
          <el-option v-for="(item,index) in curriculum" :key="index" :label="item.subject_text" :value="item.subject_id" />
        </el-select>
      </div>
      <div class="select">
        <P>选择题目类型</P>
        <el-select slot="prepend" v-model="questions_type_text" placeholder="请选择" class="sel" @change="questions">
          <el-option v-for="(item,index) in subject" :key="index" :label="item.questions_type_text" :value="item.questions_type_id"
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
  import { mapState, mapActions } from 'vuex'
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
        user_id: '',
        exam_name: '',
        subject_text: '',
        questions_type_text: '',
        randerStudyExam: [],
        questions_id:''
      }
    },
    computed: {
      ...mapState({
        randerStudy: store => store.getpush.list
      })
    },
    methods: {
      ...mapActions({
        studyType: 'getTypeExam/getTypeStudy',
        curriculums: 'gettingLesson/getTypeCurriculum',
        subjects: 'getTypeQuestion/getTypeQuestions',
        clickaddQuestions: 'addQuestions/addQuestionStudy',
        CurrentUser: 'addQuestions/CurrentUserInfor',
        QuestionStudy: 'updateQuestion/updateQuestionStudy'
      }),
      //考试
      exam(e) {
        this.exam_id = e
      },
      //课程
      subjectchange(e) {
        this.subject_id = e
      },
      //试题
      questions(e) {
        this.questions_type_id = e;
      },
      bindtap() {
        if (this.title == '' && this.questions_stem == '' && this.exam_id == '' && this.subject_id == '' && this.questions_type_id == '' && this.questions_answer == '' && this.user_id == '') {
          return console.log('缺少参数')
        } else {
          if (this.randerStudy) {
             this.QuestionStudy({
               questions_id:this.questions_id,
               title:this.title,
               questions_stem:this.questions_stem,
               questions_answer:this.questions_answer,
               subject_id:this.subject_id,
               questions_type_id:this.questions_type_id,
               exam_id:this.exam_id
             })
          } else {
            this.clickaddQuestions({
              title: this.title,
              questions_stem: this.questions_stem,
              exam_id: this.exam_id,
              subject_id: this.subject_id,
              questions_type_id: this.questions_type_id,
              questions_answer: this.questions_answer,
              user_id: this.user_id
            })
          }
        }
      }
    },
    async created() {
      this.study = await this.studyType()
      this.curriculum = await this.curriculums()
      this.subject = await this.subjects()
      this.user_id = await this.CurrentUser()
      if (this.randerStudy) {
        this.title = this.randerStudy.title;
        this.questions_stem = this.randerStudy.questions_stem;
        this.questions_answer = this.randerStudy.questions_answer;
        this.exam_name = this.randerStudy.exam_name;
        this.questions_type_text = this.randerStudy.questions_type_text;
        this.subject_text = this.randerStudy.subject_text;
        this.questions_id = this.randerStudy.questions_id;
        this.questions_type_id =  this.randerStudy.questions_type_id;
        this.exam_id = this.randerStudy.exam_id;
        this.subject_id = this.randerStudy.subject_id;
      }
    }
  }
</script>

<style scoped>
  .chart-container {
    position: relative;
    width: 100%;
    height: calc(100vh - 84px);
    height: 100%;
    padding-top: 66px;
  }

  .tittle {
    padding: 30px 15px;
    font-size: 26px;
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

  .elinput {
    padding-top: 20px;
    padding-left: 15px;
    width: 400px;

  }

  .editor-container {
    margin-bottom: 30px;
  }

  .tag-title {
    margin-bottom: 5px;
  }

  .mark {
    width: 98% !important;
    height: 300px !important;
    margin: 0 auto;
  }

  .textear p {
    padding-left: 1%;
  }

  .el-select .el-input {
    width: 130px;
  }

  .select p {
    padding: 10px;
    padding-left: 20px;
  }

  .select .sel {
    padding: 10px;
    padding-left: 20px;
  }

  .btn {
    margin: 20px;
  }
</style>
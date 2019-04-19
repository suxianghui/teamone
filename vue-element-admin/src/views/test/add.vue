<template>
  <div class="chart-container">
    <div class="tittle">{{checktitles}}</div>
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
        <!-- <el-button type="primary" @click="bindtap">提交</el-button> -->
        <el-button type="primary" class="btn" @click="dialogFormVisible = true">提交</el-button>
        <el-dialog title="添加类型" class="tan" :visible.sync="dialogFormVisible">
            <p>{{modificationAdds}}</p>
            <p>{{Addmodifications}}</p>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="bindtap">确 定</el-button>
          </div>
        </el-dialog>
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
        dialogFormVisible:false,
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
        questions_id: '',
        checktitles:'添加试题',
        modificationAdds:'您确定要添加这道试题吗？',
        Addmodifications:'真的要添加吗？',
        arr:[],
        quesId:''
      }
    },
    methods: {
      ...mapActions({
        studyType: 'getTypeExam/getTypeStudy',
        curriculums: 'gettingLesson/getTypeCurriculum',
        subjects: 'getTypeQuestion/getTypeQuestions',
        clickaddQuestions: 'addQuestions/addQuestionStudy',
        CurrentUser: 'addQuestions/CurrentUserInfor',
        QuestionStudy: 'updateQuestion/updateQuestionStudy',
        randerStudy: 'getpush/getQuestions'
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
        this.dialogFormVisible = false;
        if (this.title == '' && this.questions_stem == '' && this.exam_id == '' && this.subject_id == '' && this.questions_type_id == '' && this.questions_answer == '' && this.user_id == '') {
            alert('缺少参数')
        } else {
          if (this.checktitles ==='添加试题') {
            this.clickaddQuestions({
              title: this.title,
              questions_stem: this.questions_stem,
              exam_id: this.exam_id,
              subject_id: this.subject_id,
              questions_type_id: this.questions_type_id,
              questions_answer: this.questions_answer,
              user_id: this.user_id
            })
          } else{
            this.QuestionStudy({
              questions_id: this.questions_id,
              title: this.title,
              questions_stem: this.questions_stem,
              questions_answer: this.questions_answer,
              subject_id: this.subject_id,
              questions_type_id: this.questions_type_id,
              exam_id: this.exam_id
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
      this.quesId = this.$route.query.id
      this.arr = await this.randerStudy();
      // console.log(this.arr)
      this.arr.data.forEach((v, i) => {
        if (this.quesId == v.questions_id) {
          this.item = v;
          this.title = v.title;
          this.questions_stem = v.questions_stem;
          this.questions_answer = v.questions_answer;
          this.exam_name = v.exam_name;
          this.questions_type_text = v.questions_type_text;
          this.subject_text = v.subject_text;
          this.questions_id = v.questions_id;
          this.questions_type_id = v.questions_type_id;
          this.exam_id = v.exam_id;
          this.subject_id = v.subject_id;
          this.checktitles = '编辑试题';
          this.Addmodifications = '确定要修改这道题吗？';
          this.modificationAdds = '您要修改吗？';
        }
      })

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
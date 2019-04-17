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
            v-for="item in study"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="select">
        <P>选择课程类型</P>
        <el-select slot="prepend" v-model="subject_id" placeholder="请选择" class="sel">
          <el-option
            v-for="item in curriculum"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="select">
        <P>选择题目类型</P>
        <el-select slot="prepend" v-model="questions_type_id" placeholder="请选择" class="sel">
          <el-option
            v-for="item in subject"
            :key="item.value"
            :label="item.label"
            :value="item.value"
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
        <el-button type="primary">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import MarkdownEditor from '@/components/MarkdownEditor'
import {mapState} from 'vuex'
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
      study: [{
        value: '选项1',
        label: '周考1'
      }, {
        value: '选项2',
        label: '周考2'
      }, {
        value: '选项3',
        label: '周考3'
      }, {
        value: '选项4',
        label: '月考'
      }],
      curriculum: [{
        value: '选项1',
        label: '周考1'
      }, {
        value: '选项2',
        label: '周考2'
      }, {
        value: '选项3',
        label: '周考3'
      }, {
        value: '选项4',
        label: '月考'
      }],
      subject: [{
        value: '选项1',
        label: '周考1'
      }, {
        value: '选项2',
        label: '周考2'
      }, {
        value: '选项3',
        label: '周考3'
      }, {
        value: '选项4',
        label: '月考'
      }]
    }
  },
  computed: {
    language() {
      return this.languageTypeList[this.$store.getters.language]
    },
    // ...mapState({
    //   studyType : state=>state.index.
    // })
  },
  methods: {
    getHtml() {
      this.html = this.$refs.markdownEditor.getHtml()
      console.log(this.html)
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

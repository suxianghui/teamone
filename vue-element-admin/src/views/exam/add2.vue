<template>
  <div class="add-layout">
    <h2>创建试卷</h2>
    <div class="add-layout-content">
      <el-button plain @click="showDialog">添加新题</el-button>
      <div class="content-list">
        <div class="top-title">
          <h3>报考院校</h3>
          <p>考试时间：1小时30分钟 监考人：刘于 开始考试时间：{{starttime}}  结束考试时间：{{endtime}} 阅卷人：刘于</p>
        </div>
        <div class="list">
          <div v-for="(val, ind) in getCreateExam.questions" :key="ind" class="content-list-style">
            <h4>{{ind+1}}：{{val.title}} <a href="javascript:;" style="float: right;color:#0139FD">删除</a></h4>
            <div class="react-markdown">
              <pre>
                <code>
                  {{val.questions_stem}}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      <el-button @click="createExam" type="primary">创建试卷</el-button>
    </div>
    <div v-show="flag" class="add-drawer">
      <div class="mask" />
      <div class="add-drawer-right">
        <p>所有试题</p>
        <ul>
          <li>
            aaaaa
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { timeFormat } from '@/utils/index'

export default {
  data() {
    return {
      flag: false,
      starttime: '',
      endtime: ''
    }
  },

  computed: {
    ...mapState({
      getCreateExam: state => state.exam.getCreateExam   //.getCreateExam
    })
  },

  mounted() {
    console.log(this.getCreateExam,'//')
    this.starttime = timeFormat(this.getCreateExam.start_time)
    this.endtime = timeFormat(this.getCreateExam.end_time)
  },

  methods: {
    showDialog() {
      this.flag = !this.flag
    },
    createExam() {
      this.$router.push({
        path: '/exam/list'
      })
    }
  }
}
</script>

<style scoped>
.add-drawer{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}
.mask{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
}
.add-drawer-right{
  width: 40%;
  height: 100%;
  position: relative;
  float: right;
  background-color: #fff;
  border: 0;
  background-clip: padding-box;
  z-index: 1;
}
.add-layout {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: auto;
  background: #f0f2f5;
  min-height: 0;
  padding: 0px 24px 24px;
}
h2 {
  padding: 20px 0px;
  margin-top: 10px;
  margin-bottom: 0.5em;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 1.5em;
}
.add-layout-content {
  width: 100%;
  height: 100%;
  flex: auto;
  min-height: 0;
  background: rgb(255, 255, 255);
  padding: 24px;
  margin: 0px 0px 20px;
  border-radius: 10px;
}
h3,h4{
  font-weight: normal;
  display: block;
  font-size: 1.3em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
h4{
  font-size: 1.0em;
}
.content-list {
  width: 100%;
  margin-bottom: 10px;
}
.top-title {
  text-align: center;
}
.content-list-style{
  text-align: left;
  border: 1px solid #ccc;
  padding: 20px;
}
.react-markdown pre {
    display: block;
    padding: 1em;
    overflow: auto;
    line-height: 1.3;
    max-height: 35em;
    color: #657b83;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8AgMAAABHkjHhAAAACVBMV…v3iO9zG/UOphyPeinPl1J8Gtaa7xPTa/Dk+RIs4deMvwGvcGsmsCvJ0AAAAABJRU5ErkJggg==) #f6f6f6;
    background-size: 30px 30px;
}
code{
  white-space: pre-wrap;
}
</style>

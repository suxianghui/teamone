<template>
  <div class="add-layout">
    <h2>创建试卷</h2>
    <div class="add-layout-content">
      <el-button plain @click="showDialog">添加新题</el-button>
      <div class="content-list">
        <div class="top-title">
          <h3>{{title}}</h3>
          <p>考试时间：1小时30分钟 监考人：刘于 开始考试时间：{{starttime}} 阅卷人：刘于</p>
        </div>
        <div v-for="(item,index) in questionList" :key="index" class="list">
          <div class="style_questionitem__3ETlC" :data-id="item.questions_id">
            <h4>{{ index+1 }}：{{ item.title }} <a @click="deleteExam(index)" href="javascript:;" style="float: right;">删除</a></h4>
            <div class="markdown">
              <pre>{{ item.questions_stem }}</pre>
            </div>
          </div>
        </div>
      </div>
      <el-button @click="createExam" type="primary">创建试卷</el-button>
    </div>
    <div v-show="flag" class="add-drawer">
      <div class="mask" @click="showDialog" />
      <div class="add-drawer-right">
        <p class="title">所有试题</p>
        <div v-for="(item, index) in allQuestions" :key="index" class="exam" @click="changeEaxm(item)">
          <span>{{ index + 1 }} :</span>
          <VueMarkdown :source="item.title" ></VueMarkdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { timeFormat } from '@/utils/index'
import { mapActions } from 'vuex'
import VueMarkdown from 'vue-markdown'


export default {
  data() {
    return {
      flag: false,
      data: '',
      title: '',
      starttime: '',
      questionList: [],
      allQuestions:[]
    }
  },
  components:{
    VueMarkdown
  },
  created() {
    // 获取add页面本地存储的值
    const data = JSON.parse(window.localStorage.getItem('getSubmitExam'));
    this.data = data;
    // 设置此页面的开始时间, 标题
    this.title = data.title;
    this.starttime = timeFormat(data.start_time);
    this.questionList = data.questions;
    this.getQuestion()
  },
  methods: {
    ...mapActions({
      renewal: 'exam/renewal',
      allQuestion: 'exam/allQuestion'
    }),
    changeEaxm(item){
      this.questionList.push(item)
      window.localStorage.setItem('exam', JSON.stringify(this.pageDetail))
      this.flag = false
    },
    // 添加试题弹出框
    async showDialog() {
      this.flag = !this.flag
      if(this.flag) {
        this.allQuestions = await this.allQuestion();
      }
    },
    async createExam() {
      // 要用exam_exam_id 的字符串
      let data = {question_ids: this.question_ids}
      console.log(data,'data')
      // 调用更新试卷接口
      let res = await this.renewal({header: this.data.exam_exam_id,data })
      console.log(res,'更新试卷...')
      this.$router.push({ path:'/exam/list' })
    },
    deleteExam(index) {
      // 获取被删除项
      // let xLi = this.questionList.filter(item => id===item.questions_id);
      // console.log(xLi,'...');

      this.$confirm('是否要删除该题目?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true,
        customClass:'warning'
      }).then(() => {
        this.questionList.splice(index,1)
        this.getQuestion()
      }, ()=>{
        // this.questionList
        // this.getQuestion()
      })
    },
    getQuestion(){
      let arr = [];
      this.questionList.forEach(item => {
        arr.push(item.questions_id)
      });
      this.question_ids = JSON.stringify(arr);
    }
  },
  mounted() {
    
  }
}
</script>

<style lang="scss" scoped>
.add-drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}
.mask {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
}
.exam {
  width: 100%;
  height:40px;
  display: flex;
  align-items: center;
  border-bottom:1px solid #ccc;
  margin-right:20px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.exam>span{
  margin-right:10px;
}
.exam>div{
  color:#999;
}
.add-drawer-right {
  width: 40%;
  height: 100%;
  position: relative;
  float: right;
  background-color: #fff;
  border: 0;
  background-clip: padding-box;
  z-index: 1;
  overflow-y: scroll;
  h3{
    width: 100%;
    height:40px;
    line-height: 40px;
  }
  >ul{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left:0;
    padding-left: 0;
    li{
      height:40px;
      line-height: 40px;
      border-bottom: 1px solid #eee;
      color:#999;
      text-indent: 2em;
      list-style: none;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
.add-layout {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: auto;
  background: #f0f2f5;
  min-height: 0;
  padding: 0px 24px 24px;
  box-sizing: border-box;
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
h3,
h4 {
  font-weight: normal;
  display: block;
  font-size: 1.3em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
h4 {
  font-size: 14px;
  margin: 0;
  padding: 0;
}
a {
  color: #0139FD;
  background-color: initial;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  transition: color .3s;
}
.content-list {
  width: 100%;
  margin-bottom: 10px;
}
.top-title {
  text-align: center;
  p {
    font-size: 1em;
  }
}
.style_questionitem__3ETlC {
  text-align: left;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
}
.markdown,pre,code{
  margin: 0;
  padding: 0;
}
.markdown pre {
  margin-top: 5px;
  height: 100%;
  display: block;
  padding: 2em;
  line-height: 1.2;
  // max-height: 35em;
  color: #657b83;
  background:#f6f6f6;
  background-size: 30px 30px;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
  font-size: 14px;
  white-space:normal;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>

<template>
  <div class="box">
    <h2 class="tittle">试题详情</h2>
    <div class="messtitle">
      <p class="username">
        <span>出题人: </span>{{ item.user_name }}</p>
      <p class="message">题目信息</p>
      <div class="text">
        <span class="type_text">{{ item.questions_type_text }}</span>
        <span class="subject_text">{{ item.subject_text }}</span>
        <span class="exam_name">{{ item.exam_name }}</span>
      </div>
      <p class="value">
        <p>{{item.title}}</p>
        <p class="valueps">{{item.questions_stem}}</p>
      </p>
    </div>
    <div class="Answer">
      <p class="message">答案信息</p>
      <div class="messagevalue">
        {{item.questions_answer}}
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      item: {
        user_name: '',
        questions_type_text: '',
        subject_text: '',
        exam_name: '',
        questions_stem: '',
        title:'',
        questions_answer:''
      }
    }
  },
  methods:{
    ...mapActions({
      getQuestion:'getpush/getQuestions'
    })
  },
 async created(){
   let quesId =this.$route.query.id
   let arr = await this.getQuestion();
   arr.data.forEach((v,i)=>{
     if(quesId == v.questions_id){
        this.item = v;
     }
   })
  }
}
</script>

<style scoped>
    .box {
        position: relative;
        width: 100%;
        height: calc(100vh - 84px);
        background: #f0f2f5;
        padding-top:66px;
    }

    .tittle {
        padding: 30px 15px;
        font-weight: 200;
    }

    .messtitle {
        width: 60%;
        background: white;
        border-radius: 10px;
        margin-left: 20px;
        float: left;
        margin-right: 20px;
        padding: 24px;
        margin-bottom: 20px;
    }

    .Answer {
        width: 35%;
        background: white;
        border-radius: 10px;
        float: left;
        padding: 24px;
        margin-bottom: 20px;
    }

    .username {
        font-size: 14px;
    }

    .message {
        font-size: 16px;
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
    .value{
        font-size: 14px;
        width: 70%;
        margin:50px;
    }
    .valueps{
      width: 80%;
      margin:0 auto;
    }
</style>

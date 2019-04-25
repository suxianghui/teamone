<template>
  <div class="add-layout">
      <div class="wrapper">
        <p class="text">添加考试</p>
        <div class="list">
          <div class="content">
            <div class="style_questionitem__3ETlC" v-for="(item,index) in this.detailDatas.questions" :key="index">
              <h4>{{index+1}}、{{item.questions_type_text}}</h4>
              <div class="markdown">
                <pre>{{item.questions_stem}}</pre>
              </div>
            </div>
          </div>
          <div class="content">
            <div class="style_questionitem__3ETlC" v-for="(item,index) in this.detailDatas.questions" :key="index">
              <h4>{{index+1}}、答案:</h4>
              <div class="markdown">
                <pre>{{item.questions_answer}}</pre>
              </div>
            </div>
          </div>
        </div>
        </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState({
      detailDatas:state => state.exam.detailDatas
    })
  },
  methods: {
    ...mapActions({
      detailData:'exam/detailData'
    })
  },
  created() {
    console.log(this.$route,'this.$route.query')
    this.detailData(this.$route.query.id);
    console.log(this.detailDatas,'.../')
  }
}
</script>

<style lang="scss" scoped>
  p {
    line-height: 0;
    padding-bottom: 20px;
  }

  .wrapper {
    position: relative;
    width: 100%;
    height: calc(100vh - 84px);
    background: #f0f2f5;
    padding: 24px;
    box-sizing: border-box;
    overflow-y: auto;
  }
  .content {
    display: flex;
    flex-direction: column;
    padding: 24px;
    background: #FFF;
    border-radius: 10px;
    width: 50%;
  }
  // .content:nth-child(1){
  //   width: 70%;
  //   margin-right: 20px;
  // }
  .list{
    width: 100%;
    display: flex;
  }
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
.content-list {
  width: 100%;
  margin-bottom: 10px;
}
.top-title {
  text-align: center;
  p {
    font-size: 14px;
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
  height: auto;
  display: block;
  padding: 1em;
  overflow: auto;
  line-height: 1.3;
  color: #657b83;
   background: #f6f6f6; 
  background-size: 30px 30px;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
  font-size: 1em;
  height: 500px;
}
</style>

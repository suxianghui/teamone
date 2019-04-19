<template>
  <div class="wrap">
    <h2 class="title">阅卷</h2>
    <div class="daw">
      <div class="content1">
        <div class="box" v-for="(item,index) in List" :key="index">
          <div class="oneQuestion">{{item.title}}</div>
          <div class="question">{{item.questions_stem}}</div>
          <div class="daanbox">
            <div class="xs">
              <span>学生答案</span>
              <span>{{item.student_answer}}</span>
            </div>
            <div class="bz">
              <span>标准答案</span>
              <span>{{item.questions_answer}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="content2"></div>
    </div>
  </div>
<!-- <div class="components-container">
    <code>Markdown is based on
      <a href="https://github.com/nhnent/tui.editor" target="_blank">tui.editor</a> ，simply wrapped with Vue.
      <a
        target="_blank"
        href="https://panjiachen.github.io/vue-element-admin-site/feature/component/markdown-editor.html"
      >
        Documentation </a>
    </code>

    <div class="editor-container">
      <el-tag class="tag-title">
        Basic:
      </el-tag>
      <markdown-editor v-model="content1" height="300px" />
    </div>

    <div class="editor-container">
      <el-tag class="tag-title">
        Markdown Mode:
      </el-tag>
      <markdown-editor ref="markdownEditor" v-model="content2" :options="{hideModeSwitch:true,previewStyle:'tab'}" height="200px" />
    </div>

    <div class="editor-container">
      <el-tag class="tag-title">
        Customize Toolbar:
      </el-tag>
      <markdown-editor v-model="content3" :options="{ toolbarItems: ['heading','bold','italic']}" />
    </div>

    <div class="editor-container">
      <el-tag class="tag-title">
        I18n:
      </el-tag>
      <el-alert
        :closable="false"
        title="You can change the language of the admin system to see the effect"
        type="success"
      />
      <markdown-editor ref="markdownEditor" v-model="content4" :language="language" height="300px" />
    </div>

    <el-button style="margin-top:80px;" type="primary" icon="el-icon-document" @click="getHtml">
      Get HTML
    </el-button>
    <div v-html="html" />
  </div> -->
</template>
<script>
import { mapActions, mapState } from "vuex";
// import MarkdownEditor from '@/components/MarkdownEditor'

export default {
  data() {
    return {
      // list:[]
      // content4: content,
    };
  },
  computed: {
    // language() {
    //   return this.languageTypeList[this.$store.getters.language]
    // },
    ...mapState({
      List: state => state.examList.List.data.questions
    })
  },
  created() {
    // this.grades = this.$route.query.grades;
    // console.log("ddd", this.$route.query.grades);
    this.detailList();
    console.log("lll", this.List);
  },
  methods: {
    ...mapActions({
      detailList: "examList/students"
    })
  }
};
// const content = `
// **This is test**

// * vue
// * element
// * webpack

// `
// export default {
//   name: 'MarkdownDemo',
//   components: { MarkdownEditor },
//   data() {
//     return {
//       content1: content,
//       content2: content,
//       content3: content,
//       content4: content,
//       html: '',
//       languageTypeList: {
//         'en': 'en_US',
//         'zh': 'zh_CN',
//         'es': 'es_ES'
//       }
//     }
//   },
//   computed: {
//     language() {
//       return this.languageTypeList[this.$store.getters.language]
//     }
//   },
//   methods: {
//     getHtml() {
//       this.html = this.$refs.markdownEditor.getHtml()
//       console.log(this.html)
//     }
//   }
// }
</script>
<style scoped>
.wrap {
  width: 100%;
  height: auto;
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
  flex: 7;
  height: auto;
}
.content2 {
  flex: 3;
  height: auto;
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
.daanbox{
  width:100%;
  height:auto;
  display: flex;
  justify-content: space-between;
}
.daanbox .xs{
  flex:4.5;
  height:auto;
}
.daanbox .bz{
  flex:4.5;
  height:auto;
}
</style>



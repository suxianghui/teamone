<template>
  <div class="chart-container">
    <div class="box">
      <div class="tittle">
        试题分类
      </div>
      <div class="little-box">
        <el-button type="primary" class="btn" @click="dialogFormVisible = true">+添加类型</el-button>
        <el-dialog title="添加类型" class="tan" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-input v-model="form.name" autocomplete="off" placeholder="请输入试题类型" />
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="addTypeStudy">确 定</el-button>
          </div>
        </el-dialog>
        <div class="table">
          <div class="head">
            <span class="typelist">类型id</span>
            <span class="typelist">类型名称</span>
            <span class="typelist">操作</span>
          </div>
          <div class="count">
            <div v-for="(item,index) in list" class="count-text" :key="index">
              <span class="typeid">{{item.questions_type_id}}</span>
              <span class="typeid">{{item.questions_type_text}}</span>
              <span class="typeid">
                <el-button type="primary" class="del" @click="dialogFormVisibles = true">删除</el-button>
                <el-dialog title="删除试题" class="tan" :visible.sync="dialogFormVisibles">
                    <p>您确定要删除该试题类型吗?</p>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisibles = false">取 消</el-button>
                    <el-button type="primarys" @click="clickTap(item.questions_type_id)">确 定</el-button>
                  </div>
                </el-dialog>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      visible: false,
      dialogFormVisibles:false,
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',
      list:[]
    }
  },
  methods:{
    ...mapActions({
      question :'getTypeQuestion/getTypeQuestions',
      addTestTypes:'addType/addTestType',
      delQuestion:'getpush/delQuestion'
    }),
   async addTypeStudy(){
      this.dialogFormVisible = false
      this.addTestTypes({
        text:this.form.name,
        sort:Math.random().toString(36).substr(2)
      })
      this.list = await this.question()
    },
   async clickTap(item){
      this.dialogFormVisibles=false
      this.delQuestion({
        id:item
      })
      this.list = await this.question()
    }
  },
  async created(){
    this.list = await this.question()
  }
}

</script>

<style scoped>
  .chart-container {
    position: relative;
    width: 100%;
    height: calc(100vh - 84px);
    padding-top:66px;
  }

  .box {
    width: 100%;
    height: 100%;
    background: #eee;
  }

  .tittle {
    padding: 30px;
    font-size: 26px;
    font-weight: 200;
  }

  .little-box {
    width: 95%;
    height: 80%;
    background: #fff;
    margin: 0 auto;
    margin-bottom: 10px;
    border-radius: 10px;
  }

  .dialog-footer {
    text-align: center;
  }

  .tan {
    width: 100%;
    text-align: center;
  }

  .btn {
    margin: 20px;
  }

  .head {
    height: 45px;
    background: #fafafa;;
    width: 95%;
    margin: 0 auto;
  }

  .count {
    width: 95%;
    margin: 0 auto;
  }
  .typelist{
    width: 33%;
    height: 100%;
    display: inline-block;
    line-height: 45px;
    padding:0 20px;
  }
  .typeid{
    width: 33%;
    line-height: 45px;
    padding:0 20px;
    display: inline-block;
  }
  .count-text {
    height: 45px;
    width: 100%;
    border-bottom: 1px solid #fafafa;;
    font-size: 14px;
  }

  .count-text:hover {
    background: #fafafa;;
  }
  
  .del{
    width: 80px;
    height: 30px;
    border-radius: 5px;
    background: blue;
    display: inline-block;
    color:white;
    cursor: pointer;
  }
</style>

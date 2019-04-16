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
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
        <div class="table">
          <div class="head">
            <span>类型id</span>
            <span>类型名称</span>
            <span>操作</span>
          </div>
          <div class="count">
            <div class="count-text">
              <span>sjfksjkf</span>
              <span>简答题</span>
              <span />
            </div>
            <div class="count-text">
              <span>sjfksjkf</span>
              <span>简答题</span>
              <span />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
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
      formLabelWidth: '120px'
    }
  }
}

</script>

<style scoped>
  .chart-container {
    position: relative;
    width: 100%;
    height: calc(100vh - 84px);
  }

  .box {
    width: 100%;
    height: 60%;
    background: #ccc;
  }

  .tittle {
    padding: 30px;
    font-size: 25px;
    font-weight: 800;
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
    display: flex;
    justify-content: space-around;
    height: 45px;
    align-items: center;
    background: #ccc;
    width: 95%;
    margin: 0 auto;
  }

  .count {
    width: 95%;
    margin: 0 auto;
  }

  .count-text {
    text-align: center;
    display: flex;
    justify-content: space-around;
    height: 45px;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    border-bottom: 1px solid #ccc;
  }

  .count-text:hover {
    background: #ccc;
  }
</style>

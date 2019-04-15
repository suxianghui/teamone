<template>
  <div class="wrapper">
    <div class="paddingBox" style="padding: 0px 24px 24px;">
      <h2>添加考试</h2>
      <div class="content">
        <div class="contentTop">
          <form class="form">
            <div class="formBox">
              <p>试卷名称:</p>
              <el-input
                v-model="input10"
                placeholder=""
                clearable
              />
            </div>
            <div class="formBox">
              <p>选择考试类型:</p>
              <el-select v-model="value" placeholder="">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
            <div class="formBox">
              <p>选择课程:</p>
              <el-select v-model="value" placeholder="">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
            <div class="formBox">
              <p>设置题量:</p>
              <el-input
                v-model="input10"
                class="shotInp"
                placeholder=""
                clearable
              />
            </div>
            <div class="formBox">
              <p>考试时间:</p>
              <div class="block">
                <el-date-picker
                  v-model="value1"
                  align="right"
                  type="date"
                  placeholder="开始时间"
                /> &nbsp;-&nbsp;
                <el-date-picker
                  v-model="value1"
                  type="date"
                  placeholder="结束时间"
                />
              </div>
            </div>
          </form>
          <el-button class="btn" type="primary">创建试卷</el-button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Add',
  data() {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  margin-top:66px;
  width: 100%;
  height: 750px;
  background: #f0f2f5;
  display: flex;
  flex-direction: column;
}
.paddingBox {
    display: flex;
    flex-direction: column;
    background: #f0f2f5;
    min-height: 0;
}
h2 {
    display: block;
    font-size: 1.5em;
    font-weight: 400;
    padding: 20px 0px;
    margin-top: 10px;
}
.contentTop{
  background: rgb(255, 255, 255);
  padding: 24px;
  margin: 0px 0px 20px;
  border-radius: 10px;
}
.form{
  width: 100%;
  display: flex;
  flex-direction: column;
  .formBox {
    margin-left: -3px;
    margin-right: -3px;
    margin-bottom:20px;
    >p{
      color:#262626;
      font-size:14px;
    }
    >.shotInp{
      width: 100px;
    }
  }
}
.btn{
  margin-top:20px;
}

</style>

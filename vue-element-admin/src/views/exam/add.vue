<template>
  <div class="wrapper">
    <div class="paddingBox" style="padding: 0px 24px 24px;">
      <h2>添加考试</h2>
      <div class="content">
        <div class="contentTop">
          <form class="form">
            <div class="formBox">
              <p>试卷名称:</p>
              <el-input v-model="examName" placeholder clearable />
              <span v-if="isShow1">请输入试卷名称</span>
            </div>
            <div class="formBox">
              <p>选择考试类型:</p>
              <el-select v-model="examTypeValue" placeholder>
                <el-option
                  v-for="item in examType"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <span v-if="isShow2">请选择考试类型</span>
            </div>
            <div class="formBox">
              <p>选择课程:</p>
              <el-select v-model="examGradeValue" placeholder>
                <el-option
                  v-for="item in examGrade"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <span v-if="isShow3">请选择课程</span>
            </div>
            <div class="formBox">
              <p>设置题量:</p>
              <el-input v-model="questionNum" class="shotInp" placeholder clearable />
              <span v-if="isShow4">请设置题量</span>
            </div>
            <div class="formBox">
              <p>考试时间:</p>
              <div class="alltime">
                <div class="block">
                  <el-date-picker
                    v-model="startTime"
                    type="datetime"
                    placeholder="选择日期时间">
                  </el-date-picker>
                  <span v-if="isShow5">请选择开始时间</span>
                </div>&nbsp; - &nbsp;
                <div class="block">
                  <el-date-picker
                    v-model="endTime"
                    type="datetime"
                    placeholder="选择日期时间">
                  </el-date-picker>
                  <span v-if="isShow6">请选择结束时间</span>
                </div>
              </div>
            </div>
          </form>
          <el-button class="btn" type="primary" @click="establishExam">创建试卷</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { momentTime } from '@/utils/index'

export default {
  name: 'Add',
  data() {
    return {
      isShow1: false,
      isShow2: false,
      isShow3: false,
      isShow4: false,
      isShow5: false,
      isShow6: false,
      examName: '',
      examGradeValue: '',
      examTypeValue: '',
      questionNum: '',
      startTime: '',
      endTime: '',
      examType: [
        {
          value: '选项1',
          label: '周考1'
        },
        {
          value: '选项2',
          label: '周考2'
        },
        {
          value: '选项3',
          label: '周考3'
        },
        {
          value: '选项4',
          label: '月考'
        }
      ],
      examGrade: [
        {
          value: '选项1',
          label: 'javaScript上'
        },
        {
          value: '选项2',
          label: 'javaScript下'
        },
        {
          value: '选项3',
          label: '模块化开发'
        },
        {
          value: '选项4',
          label: '移动端开发'
        },
        {
          value: '选项5',
          label: 'node基础'
        },
        {
          value: '选项6',
          label: '组件化开发(vue)'
        },
        {
          value: '选项7',
          label: '渐进式开发(react)'
        },
        {
          value: '选项8',
          label: '项目实战'
        },
        {
          value: '选项9',
          label: 'javaScript高级'
        },
        {
          value: '选项10',
          label: 'node高级'
        }
      ]
    }
  },
  methods: {
    establishExam() {
      !this.examName ? this.isShow1 = true : this.isShow1 = false
      !this.examTypeValue ? this.isShow2 = true : this.isShow2 = false
      !this.examGradeValue ? this.isShow3 = true : this.isShow3 = false
      !this.questionNum ? this.isShow4 = true : this.isShow4 = false
      !this.startTime ? this.isShow5 = true : this.isShow5 = false
      !this.endTime ? this.isShow6 = true : this.isShow6 = false

      // console.log(this.examName)
      // console.log(this.examGradeValue)
      // console.log(this.examTypeValue)
      // console.log(this.questionNum)
      console.log(momentTime(this.startTime))
      console.log(this.endTime)
    }
  }
}
</script>

<style scoped lang='scss'>
.wrapper {
  margin-top: 66px;
  width: 100%;
  height: 880px;
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
.contentTop {
  background: rgb(255, 255, 255);
  padding: 24px;
  margin: 0px 0px 20px;
  border-radius: 10px;
}
.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  .formBox {
    margin-left: -3px;
    margin-right: -3px;
    margin-bottom: 20px;
    > p {
      color: #262626;
      font-size: 14px;
    }
    > .shotInp {
      width: 100px;
    }
    span{
      display:block;
      height:30px;
      line-height:30px;
      color:red;
      font-size:14px;
    }
    .alltime{
      width: 100%;
      display: flex;
      align-items: center;
    }
  }
}
.btn {
  margin-top: 20px;
}
.color{
  border-color:red;
}
</style>

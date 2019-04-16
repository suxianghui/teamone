<template>
  <div class="chart-container">
    <h2>教室管理</h2>
    <div class="main">
      <el-button class="room-btn" type="primary">
        <i class="add-icon">+</i>
        <span class="add-room">添加教室</span>
      </el-button>
      <el-table class="table-wrap" :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="教室号" />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click.native.prevent="deleteRow(scope.$index, tableData)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '1610C',
          courseName: '渐进式开发',
          classroom: '34308'
        },
        {
          date: '1610C',
          courseName: '渐进式开发',
          classroom: '34308'
        },
        {
          date: '1610C',
          courseName: '渐进式开发',
          classroom: '34308'
        },
        {
          date: '1610C',
          courseName: '渐进式开发',
          classroom: '34308'
        },
        {
          date: '1610C',
          courseName: '渐进式开发',
          classroom: '34308'
        },
        {
          date: '1610C',
          courseName: '渐进式开发',
          classroom: '34308'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped>
.chart-container {
  padding: 0 24px 24px;
  background: #eee;
  font-size: 14px;
}
h2 {
  margin: 0;
  padding: 28px 0;
  font-weight: 400;
  font-size: 20px;
}
.main {
  width: 100%;
  height: 863px;
  padding: 24px;
  box-sizing: border-box;
  margin: 0 0 20px;
  background: #fff;
  border-radius: 10px;
}
.room-btn {
  padding: 10px 45px;
  margin-bottom: 24px;
}
.add-icon {
  font-size: 20px;
  font-style: normal;
  margin-right: 6px;
}
el-table-column {
  width: 50%;
}
.el-table {
  background: red;
}
.el-btn span {
  color: #ccc !important;
}
</style>

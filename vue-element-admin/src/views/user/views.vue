<template>
  <div class="wrap">
    <!-- 头部标题 -->
    <p>用户展示</p>
    <!-- 大容器包裹盒子 -->
    <div class="showBox">
      <!-- 顶部面包屑导航 -->
      <div class="">
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first">
            <span class="title">用户管理</span>
          </el-tab-pane>
          <el-tab-pane label="身份数据" name="second">
            <span class="title">配置管理</span>
          </el-tab-pane>
          <el-tab-pane label="api接口权限" name="third">
            <span class="title">角色管理</span>
          </el-tab-pane>
          <el-tab-pane label="身份和qpi接口关系" name="fourth">
            <span class="title">身份和qpi接口关系</span>
          </el-tab-pane>
          <el-tab-pane label="视图接口权限" name="fifth">
            <span class="title">视图接口权限</span>
          </el-tab-pane>
          <el-tab-pane label="身份和视图权限关系" name="sixth">
            <span class="title">身份和视图权限</span>
          </el-tab-pane>
        </el-tabs>
      </div>
      <!-- 表格 -->
      <div>
        <el-table
          :data="tableData"
          style="width: 100%"
        >
          <el-table-column
            prop="date"
            label="日期"
            width="180"
          />
          <el-table-column
            prop="name"
            label="姓名"
            width="180"
          />
          <el-table-column
            prop="address"
            label="地址"
          />
          <el-table-column
            prop="age"
            label="18"
          />
          <el-table-column
            prop="sex"
            label="男"
          />
        </el-table>
      </div>
      <!-- 分页 -->
      <div class="pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="100"
        />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      tabPosition: 'top',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>

<style scoped>
.wrap{
  width: 100%;
  height: 100%;
  padding:0 24px;
  box-sizing: border-box;
}
.title{
    margin-top: 0;
    margin-bottom: 0.5em;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.el-tabs__nav{
  /* background: #fff; */
      /* font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.65);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    display: inline-block;
    line-height: unset; */
}
.pagination{
  position: absolute;
  right:0;
}
</style>

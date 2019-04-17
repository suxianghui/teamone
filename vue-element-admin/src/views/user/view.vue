<template>
  <div class="wrap">
    <!-- 头部标题 -->
    <p>用户展示</p>
    <!-- 大容器包裹盒子 -->
    <!-- <div class="showBox"> -->
      <!-- 顶部面包屑导航 -->
      <div class="nav">
        <!-- <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
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
        </el-tabs> -->
         <span
          :class="idx === index?'blue':''"
          @click="changeTitle(index)"
          :data-val="index"
          v-for="(item,index) in nav"
          :key="index"
        >{{item}}</span>
      </div>
       <h2>{{txt}}</h2>
      <!-- 表格 -->
      <div>
        <el-table
          :data="tableData"
          style="width: 100%"
        >
          <el-table-column
            v-for = "(item,index) in tabNav" :key = "index"
            prop="date"
            :label="item"
            :style="{ width:'100%'/tabNav.length }"
          />
          <!-- <el-table-column
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
          /> -->
        </el-table>
      </div>
      <!-- 分页 -->
      <div class="pagination">
        <el-pagination
          @current-change = "handleChangePage"
          background
          layout="prev, pager, next"
          :total="total"
        />
      </div>
    <!-- </div> -->
  </div>
</template>

<script>

import { mapState,mapMutations,mapActions } from "vuex";
export default {
  data() {
    return {
      nav:[
        "用户数据",
        "身份数据",
        "api接口权限",
        "身份和api接口关系",
        "视图接口权限",
        "身份和视图权限关系"
      ],
      tabNav:[
        "用户名","密码","身份"
      ],
      // tabPosition: 'top',
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
      }],
      idx:0,
      txt:'用户数据',
      total:100
    }
  },
  computed:{
    ...mapState({
      //获取用户数据
      userDatas:state => state.viewUsers.userDatas,
      //获取身份数据
      identitysData:state => state.viewUsers.identitysData,
      //获取api接口权限数据
      apiAuthoritysData:state => state.viewUsers.apiAuthoritysData,
      //获取视图权限数据
      viewAuthoritysData:state => state.viewUsers.viewAuthoritysData,
      //获取身份和api权限关系
      identityViewAuthorityRelationsData:state => state.viewUsers.identityViewAuthorityRelationsData,
      //获取身份和api权限关系
      identityApiAuthorityRelationsData:state => state.viewUsers.identityApiAuthorityRelationsData   
    })
  },
  created(){
    console.log('set..',this.setUserData());
  },
  methods:{
    ...mapMutations({

    }),
    ...mapActions({
      //展示用户数据
      setUserData: "viewUsers/setUserData",
      //展示身份数据
      setidentity: "viewUsers/setidentity",
      //展示api接口数据
      setApiAuthority: "viewUsers/setApiAuthority",
      //展示身份和api权限关系
      setIdentityApiAuthorityRelation:"viewUsers/setIdentityApiAuthorityRelation",
      //获取视图权限
      setViewAuthority: "viewUsers/setViewAuthority",
      //展示身份和视图权限关系
      setidentityViewAuthorityRelation:"viewUsers/setidentityViewAuthorityRelation"
    }),
    
    //分页
    handleChangePage(){
      console.log(111111111)
    },
    //点击切换标题
    changeTitle(idx){
      this.idx = idx;
      this.txt = this.nav[idx];
      if( idx === 0 ){
        //标题项
        this.tabNav = ['用户名','密码','身份'];
        //展示用户数据
        this.setUserData()
      }else if( idx === 1 ){
        this.tabNav = ['身份名称'];
        //展示身份数据
        this.setidentity()
      }else if( idx === 2 ){
        this.tabNav = ['api权限名称','api权限url','api权限方法']
        //展示api接口数据
        this.setApiAuthority()
      }else if( idx === 3 ){
        this.tabNav = ['身份名称','api权限名称','api权限url','api权限方法']
        //展示身份和api权限关系
        this.setIdentityApiAuthorityRelation()
      }else if( idx === 4 ){
        this.tabNav = ['视图权限名称','视图id']
        //获取视图权限
        this.setViewAuthority()
      }else if( idx === 5 ){
        this.tabNav = ['身份','视图名称','视图id']
       //展示身份和视图权限关系
        this.setidentityViewAuthorityRelation()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  width: 100%;
  height: 100%;
  padding:0 24px;
  box-sizing: border-box;
  > p {
    font-size: 22px;
    color: #333;
  }
  h2 {
    font-weight: 500;
  }
  .nav{
    span{
      font-size: 14px;
      border:solid 1px #ccc;
      color:#ccc;
      background: #fff;
      padding:0 10px;
      cursor: pointer;
      display: inline-block;
      height: 30px;
      line-height: 30px;
      // span:hover {
      //   color: #0139fd;
      // }
    } 
    .blue {
        border: 1px solid #0139fd;
        color: #0139fd;
      }
  }
  .pagination{
    position: absolute;
    right:0;
  }
 }

// .title{
//     margin-top: 0;
//     margin-bottom: 0.5em;
//     color: rgba(0, 0, 0, 0.85);
//     font-weight: 500;
//     display: block;
//     font-size: 2em;
//     margin-block-start: 0.67em;
//     margin-block-end: 0.67em;
//     margin-inline-start: 0px;
//     margin-inline-end: 0px;

// }

</style>

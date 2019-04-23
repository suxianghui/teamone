<template>
  <div class="wrap">
    <!-- 头部标题 -->
    <p>用户展示</p>
    <!-- 顶部面包屑导航 -->
    <div class="nav">
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
      <el-table :data="data" style="width: 100%">
        <el-table-column
          v-for="(item,index) in tableData[idx]"
          :key="index"
          :prop="item"
          :label="tabNav[idx][index]"
          
          :style="{width:'100%'/tabNav[idx].length }"
        />
        <!-- label : 头部导航 -->
        <!-- prop : 每一项的数据 -->
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="pagination">
      <el-pagination
        @current-change="handleChangePage"
        background
        layout="prev, pager, next"
        :total="data.length"
        :page-size="10"
      />
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      nav: [
        "用户数据",
        "身份数据",
        "api接口权限",
        "身份和api接口关系",
        "视图接口权限",
        "身份和视图权限关系"
      ],
      tabNav: [
        ["用户名", "密码", "身份"],
        ["身份名称"],
        ["api权限名称", "api权限接口", "api权限方法"],
        ["身份名称", "api权限名称", "api权限url", "api权限方法"],
        ["视图权限名称", "视图id"],
        ["身份", "视图名称", "视图id"]
      ],
      tableData: [
        ["user_name", "user_pwd", "identity_text"],
        ["identity_text"],
        ["api_authority_text", "api_authority_url", "api_authority_method"],
        [
          "identity_text",
          "api_authority_text",
          "api_authority_url",
          "api_authority_method"
        ],
        ["view_authority_text", "view_id"],
        ["identity_text", "view_authority_text", "view_id"]
      ],
      idx: 0,
      txt: "用户数据",
      page: 1, //第几页
      // totals:0,
      pageTit: [
        "userData",
        "identitysData",
        "apiAuthoritysData",
        "identityApiAuthorityRelationsData",
        "viewAuthoritysData",
        "identityViewAuthorityRelationsData"
      ],
      defaultPage: 1
    };
  },
  computed: {
    ...mapState({
      //获取用户数据
      userDatas: state => state.viewUsers.userDatas,
      //获取身份数据
      identitysData: state => state.viewUsers.identitysData,
      //获取api接口权限数据
      apiAuthoritysData: state => state.viewUsers.apiAuthoritysData,
      //获取视图权限数据
      viewAuthoritysData: state => state.viewUsers.viewAuthoritysData,
      //获取身份和api权限关系
      identityViewAuthorityRelationsData: state =>
        state.viewUsers.identityViewAuthorityRelationsData,
      //获取身份和api权限关系
      identityApiAuthorityRelationsData: state =>
        state.viewUsers.identityApiAuthorityRelationsData,

      totals: state => state.viewUsers.total,
      data: state => state.viewUsers.data,
      pageSize: state => state.viewUsers.pageSize,
      userData: state => state.viewUsers.userData
    })
  },
  created() {
    this.setUserData();
    // console.log(this.data,'set')
    this.setidentity();
    this.setApiAuthority();
    this.setIdentityApiAuthorityRelation();

    this.setViewAuthority();

    this.setidentityViewAuthorityRelation();
  },
  methods: {
    ...mapMutations({
      tableList: "viewUsers/tableList"
    }),

    ...mapActions({
      //展示用户数据
      setUserData: "viewUsers/setUserData",
      //展示身份数据
      setidentity: "viewUsers/setidentity",
      //展示api接口数据
      setApiAuthority: "viewUsers/setApiAuthority",
      //展示身份和api权限关系
      setIdentityApiAuthorityRelation:
        "viewUsers/setIdentityApiAuthorityRelation",
      //获取视图权限
      setViewAuthority: "viewUsers/setViewAuthority",
      //展示身份和视图权限关系
      setidentityViewAuthorityRelation:
        "viewUsers/setidentityViewAuthorityRelation"
    }),

    //分页
    handleChangePage(val) {
      this.defaultPage = val;
      this.tableList({
        data: this.pageTit[this.idx],
        pages: this.page
      });
    },

    //点击切换标题
    changeTitle(idx) {
      // console.log(this.pageTit[idx], 787878);
      this.defaultPage = 1;
      this.tableList({
        idx,
        data: this.pageTit[idx],
        pages: this.page
      });
      this.idx = idx;
      this.tit = this.nav[idx];
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  padding: 0 24px;
  box-sizing: border-box;
  > p {
    font-size: 22px;
    color: #333;
  }
  h2 {
    font-weight: 500;
  }
  .nav {
    span {
      font-size: 14px;
      border: solid 1px #ccc;
      color: #ccc;
      background: #fff;
      padding: 0 10px;
      cursor: pointer;
      display: inline-block;
      height: 30px;
      line-height: 30px;
    }
    .blue {
      border: 1px solid #0139fd;
      color: #0139fd;
    }
  }
  .pagination {
    position: absolute;
    right: 0;
  }
}
</style>

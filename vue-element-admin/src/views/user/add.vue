<template>
  <div class="wrap">
    <!-- 头部标签 -->
    <p>添加用户</p>
    <!-- 大盒子包裹六个方块 -->
    <div class="addBox">

      <!-- 一、添加用户/更新用户 -->
      <div class="user">
        <p>
          <span :id="idx === 0 ? 'blue':'gray' " @click="change(0)">添加用户</span>
          <span :id="idx === 1 ? 'blue':'gray' " class="updateUser" @click="change(1)">刷新用户</span>
        </p>

        <div v-if="idx === 0">
          <el-input v-model="userName" placeholder="请输入用户名" />
          <el-input v-model="pwd" placeholder="请输入密码" show-password />
          <el-select v-model="identityId" placeholder="请选择身份id">
            <el-option
              v-for="item in identitysData"
              :key="item.identity_id"
              :label="item.identity_text"
              :value="item.identity_id"
            />
          </el-select>
        </div>

        <div v-if="idx === 1">
          <el-select v-model="userId" placeholder="请选择用户id">
            <el-option
              v-for="item in userDatas"
              :key="item.user_id"
              :label="item.user_name"
              :value="item.user_id"
            />
          </el-select>
          <el-input v-model="userName" placeholder="请输入用户名" />
          <el-input v-model="pwd" placeholder="请输入密码" show-password />
          <el-select v-model="identityId" placeholder="请选择身份id">
            <el-option
              v-for="item in identitysData"
              :key="item.identity_id"
              :label="item.identity_text"
              :value="item.identity_id"
            />
          </el-select>
        </div>
        <div class="btn">
          <el-button type="primary" @click="addUsersInfo">确定</el-button>
          <el-button plain @click="reset">重置</el-button>
        </div>
      </div>
      <!-- 二、添加身份-->
      <div class="user">
        <p>
          <span>添加身份</span>
        </p>
        <el-input v-model="identityName" placeholder="请输入身份名称" />
        <div class="btn">
          <el-button type="primary" @click="identity">确定</el-button>
          <el-button plain @click="reset">重置</el-button>
        </div>
      </div>
      <!-- 三、添加api接口权限-->
      <div class="user">
        <p>
          <span>添加api接口权限</span>
        </p>
        <el-input v-model="apiJurisdictionName" placeholder="请输入api接口权限名称" />
        <el-input v-model="apiJurisdictionUrl" placeholder="请输入api接口权限url" />
        <el-input v-model="apiJurisdictionMethod" placeholder="请输入api接口权限方法" />
        <div class="btn">
          <el-button type="primary" @click="jurisdiction">确定</el-button>
          <el-button plain @click="reset">重置</el-button>
        </div>
      </div>
      <!-- 四、添加视图接口权限-->
      <div class="user">
        <p>
          <span>添加视图接口权限</span>
        </p>
        <el-select v-model="existingView" placeholder="请选择已有视图">
          <el-option
            v-for="item in viewAuthoritysData"
            :key="item.view_authority_id"
            :label="item.view_authority_text"
            :value="item.view_authority_text"
          />
        </el-select>
        <div class="btn">
          <el-button type="primary" @click="view">确定</el-button>
          <el-button plain @click="reset">重置</el-button>
        </div>
      </div>
      <!-- 五、给身份设置api接口权限-->
      <div class="user">
        <p>
          <span>给身份设置api接口权限</span>
        </p>
        <el-select v-model="identityId_api" placeholder="请选择身份id">
          <el-option
            v-for="item in identitysData"
            :key="item.identity_api_authority_relation_id"
            :label="item.identity_text"
            :value="item.identity_id"
          />
        </el-select>
        <el-select v-model="apiJurisdictionId" placeholder="请选择api接口权限id">
          <el-option
            v-for="item in add"
            :key="item.api_authority_id"
            :label="item.api_authority_text"
            :value="item.api_authority_id"
          />
        </el-select>
        <div class="btn">
          <el-button type="primary" @click="api">确定</el-button>
          <el-button plain @click="reset">重置</el-button>
        </div>
      </div>
      <!-- 六、给身份设置视图权限-->
      <div class="user">
        <p>
          <span>给身份设置视图权限</span>
        </p>
        <el-select v-model="identityId_view" placeholder="请选择身份id">
          <el-option
            v-for="item in identitysData"
            :key="item.identity_view_authority_relation_id"
            :label="item.identity_text"
            :value="item.identity_id"
          />
        </el-select>
        <el-select v-model="viewJurisdictionId" placeholder="请选择视图权限id">
          <el-option
            v-for="item in viewAuthoritysData"
            :key="item.identity_view_authority_relation_id"
            :label="item.view_authority_text"
            :value="item.view_authority_id"
          />
        </el-select>
        <div class="btn">
          <el-button type="primary" @click="set">确定</el-button>
          <el-button plain @click="reset">重置</el-button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  data() {
    return {
      userName: '',//输入用户名
      userId: '',//用户id
      pwd: '',//密码
      avatar:'',//用户头像

      identityId: '',//选择身份id_1
      identityId_api: '',//api接口选择身份id_2
      identityId_view: '',//视图选择身份id_3

      identityName: '',//添加身份名称

      apiJurisdictionName: '',//api接口权限名称
      apiJurisdictionUrl: '',//api接口权限url
      apiJurisdictionMethod: '',//api接口权限方法

      existingView: '',//选择已有视图
      apiJurisdictionId: '',//选择api接口权限id
      viewJurisdictionId: '',//选择视图权限id

      idx: 0,//用于切换 添加用户和 更新用户

      add:[] //请选择api接口权限id

    }
  },
  computed: {
    ...mapState({
      // identityId_viewValue:state => state.indexUsers.identityId_viewValue,
      // //身份设置视图权限_身份id选择
      // identityId_apiValue:state => state.indexUsers.identityId_apiValue,
      // //身份设置api接口权限——身份id选择
      userIdValue:state => state.viewUsers.userIdValue,
      // //添加/更新_用户id 选择
      identityIdValue: state => state.viewUsers.identityIdValue,
      // 添加/更新用户_身份id选择
      viewJurisdictionIdValue: state =>state.viewUsers.viewJurisdictionIdValue,
      // //给身份设置视图权限_权限id选择
      existingViewValue: state => state.viewUsers.existingViewValue,
      // //添加视图接口权限_选择已有视图
      apiJurisdictionIdValue: state => state.viewUsers.existingViewValue,
      // //给身份设置api接口权限_请选择api接口权限id

      //获取用户数据——id
      userDatas:state => state.viewUsers.userDatas,
      //获取身份数据——id值
      identitysData:state => state.viewUsers.identitysData,
      //获取视图权限
      viewAuthoritysData:state => state.viewUsers.viewAuthoritysData,
      //身份和api权限
      // identityApiAuthorityRelationsData:state => state.viewUsers.identityApiAuthorityRelationsData,
      identityApiD:state => state.indexUsers.identityApiD,
      //身份设置试图
      identityViewAuthorityRelationsData:state => state.viewUsers.identityViewAuthorityRelationsData
    })
  },
  async created() {
    this.setidentity()
    //  console.log(this.identitysData,'2222')
    this.setUserData()
    // console.log(this.userDatas,'55555555')
    this.setViewAuthority()
    // console.log(this.viewAuthoritysData,222222)    
    this.add =  await this.setIdentityApiAuthorityRelation()
    // console.log(this.add,'试卷类型')
    this.setidentityViewAuthorityRelation()
    // console.log(this.identityViewAuthorityRelationsData,111111111)
  },
  methods: {
    ...mapActions({
      // 添加用户
      setAddUserData:'indexUsers/setAddUserData',
      //更新用户信息
      setUpdataUserInfo:'indexUsers/setUpdataUserInfo',
      //添加身份
      setAddIdentity: 'indexUsers/setAddIdentity',
      //添加 api 接口权限
      setAddAuthorityApi:'indexUsers/setAddAuthorityApi',
      //添加视图权限
      setAddAuthorityView:'indexUsers/setAddAuthorityView',
      //给身份设定 api 接口权限
      setIdentityApi:'indexUsers/setIdentityApi',
      //给身份设定视图权限
      setIdentityView:'indexUsers/setIdentityView',

      //获取用户id
      setUserData:'viewUsers/setUserData',
      //获取身份数据
      setidentity:"viewUsers/setidentity",
      //视图权限
      setViewAuthority:'viewUsers/setViewAuthority',
      //身份和api权限
      setIdentityApiAuthorityRelation:'viewUsers/setIdentityApiAuthorityRelation',
      //身份设置视图
      setidentityViewAuthorityRelation:'viewUsers/setidentityViewAuthorityRelation'
    }),
    
    //添加用户或者更新用户
    async addUsersInfo() {
      console.log(this.userId)
      //添加用户
      if( this.idx === 0){
        //判断信息是否完整
        if(!this.userName && !this.pwd && !this.identityId){
          this.$message({
            showClose:true,
            message:'请完善用户信息',
            type:'warning'
          })
          return false
        }
        //把输入的用户信息 赋给 参数(vuex)
        const res = await this.setAddUserData({
          user_name:this.userName,
          user_pwd:this.pwd,
          identity_id:this.identityId
        })
        //成功添加清空
        this.hint(res);
        this.userName = '',
        this.pwd = '',
        this.identityId = ''
      }else{
        //更新用户
        if(!this.userId){
          this.$message({
            showClose:true,
            message:'请填写用户id',
            type:'warning'
          });
          return false
        }
        //赋值给参数
        const res = await this.setUpdataUserInfo({
          user_id: this.userId,
          user_name: this.userName,
          user_pwd: this.pwd,
          identity_id: this.identityId
        });
        this.hint(res);
      }
      //清空
      this.userId = '',
      this.userName = '',
      this.pwd = '',
      this.identityId = ''
    },
    //添加身份
    async identity() {
      if (!this.identityName) {
        this.$message({
            showClose:true,
            message:'身份信息有误!',
            type:'warning'
          })
        return false
      }
      var res = await this.setAddIdentity({ identity_text: this.identityName });
      // console.log(res,'res.....')
      this.hint(res);
      this.identityName = ''
    },
    //添加 api 接口权限
    async jurisdiction(){
      if (!this.apiJurisdictionName && !this.apiJurisdictionUrl && !this.apiJurisdictionMethod) {
        this.$message({
          showClose:true,
            message:'请完善api接口信息!',
            type:'warning'
        })
        return false
      }
      const res = await this.setAddAuthorityApi({ 
        api_authority_text: this.apiJurisdictionName,
        api_authority_url: this.apiJurisdictionUrl,
        api_authority_method: this.apiJurisdictionMethod
      });
      this.hint(res);
      this.apiJurisdictionName = '',
      this.apiJurisdictionUrl = '',
      this.apiJurisdictionMethod = ''
    },
    //给身份设置api接口权限
    async api() {
      if(!this.identityId_api){
        this.$message({
          showClose:true,
          message:'请完善身份设置api接口权限信息',
          type:'warning'
        });
        return false
      }
      const res = await this.setIdentityApi({
        identity_id:this.identityId_api,
        api_authority_id:this.apiJurisdictionId,
      })
      this.hint(res);
      this.identityId_api = '',
      this.apiJurisdictionId = ''
    },
    //添加视图接口权限
    async view() {
      let obj = {};
       obj = this.existingViewValue.find(item => {
        return item.authority === this.existingView;
      });
      // console.log(obj,888)
      
      if(!this.existingView){
        this.$message({
          showClose:true,
          message:'请选择已有视图',
          type:'warning'
        })
        return false;
      }
      const res =await this.setAddAuthorityView({
        view_authority_text:obj.authority,
        view_id:'111' //视图id  
      }) 
      this.hint(res);
      this.existingView = ''
      obj.view_id = ''
    },
    //给身份设置视图权限
    async set(){
      if(!this.identityId_view && !this.viewJurisdictionId){
        this.$message({
          showClose:true,
          message:'请完善身份设置视图权限信息',
          type:'warning'
        });
        return false;
      }
      const res = await this.setIdentityView({
        identity_id:this.identityId_view,
        view_authority_id:this.viewJurisdictionId
      });
      this.hint(res);
      this.identityId_view = '',
      this.viewJurisdictionId = ''
    },
    //tab切换
    change(idx) {
      this.idx = idx
    },
    //弹框提示
    hint(res){
      if( res.code === 1 ){
        this.$message({
          message:res.msg,
          type:'success'
        })
      }else{
        this.$message({
          message:res.msg,
          type:'error'
        })
      }
    },
    //重置
    reset(res){
      console.log(11111)
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
  >p{
    font-size:22px;
    font-weight: 500;
    padding:20px 0;
  }
}
.addBox {
    display: flex;
    flex-wrap: wrap;
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
  .user {
    width: 33.3%;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    .btn {
      margin: 8px 0;
    }
    span {
      font-size: 14px;
      background: #fff;
      padding: 8px 10px;
      border: 1px solid #0139fd;
      color: #0139fd;
      cursor: pointer;
    }
    .updateUser {
      border: 1px solid #ccc;
      color: #ccc;
      margin-left: -4px;
    }
    #blue {
      border: 1px solid #0139fd;
      color: #0139fd;
    }
    #gray {
      border: 1px solid #ccc;
      color: #ccc;
    }
  }
}
.el-select {
  margin: 8px 0;
  width: 180px;
}
.el-button--primary {
  width: 120px;
}
.el-input {
  margin: 8px 0;
}
</style>

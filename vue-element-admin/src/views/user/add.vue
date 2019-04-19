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
              v-for="item in identityIdValue"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            />
          </el-select>
        </div>

        <div v-if="idx === 1">
          <el-select v-model="userId" placeholder="请选择用户id">
            <el-option
              v-for="item in userIdValue"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            />
          </el-select>
          <el-input v-model="userName" placeholder="请输入用户名" />
          <el-input v-model="pwd" placeholder="请输入密码" show-password />
          <el-select v-model="identityId" placeholder="请选择身份id">
            <el-option
              v-for="item in identityIdValue"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            />
          </el-select>
        </div>
        <div class="btn">
          <el-button type="primary" @click="addUsersInfo">确定</el-button>
          <el-button plain>重置</el-button>
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
          <el-button plain>重置</el-button>
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
          <el-button plain>重置</el-button>
        </div>
      </div>
      <!-- 四、添加视图接口权限-->
      <div class="user">
        <p>
          <span>添加视图接口权限</span>
        </p>
        <el-select v-model="existingView" placeholder="请选择已有视图">
          <el-option
            v-for="item in existingViewValue"
            :key="item.value"
            :label="item.label"
            :value="item.label"
          />
        </el-select>
        <div class="btn">
          <el-button type="primary" @click="view">确定</el-button>
          <el-button plain>重置</el-button>
        </div>
      </div>
      <!-- 五、给身份设置api接口权限-->
      <div class="user">
        <p>
          <span>给身份设置api接口权限</span>
        </p>
        <el-select v-model="identityId_api" placeholder="请选择身份id">
          <el-option
            v-for="item in identityId_apiValue"
            :key="item.value"
            :label="item.label"
            :value="item.label"
          />
        </el-select>
        <el-select v-model="apiJurisdictionId" placeholder="请选择api接口权限id">
          <el-option
            v-for="item in apiJurisdictionIdValue"
            :key="item.value"
            :label="item.label"
            :value="item.label"
          />
        </el-select>
        <div class="btn">
          <el-button type="primary" @click="api">确定</el-button>
          <el-button plain>重置</el-button>
        </div>
      </div>
      <!-- 六、给身份设置视图权限-->
      <div class="user">
        <p>
          <span>给身份设置视图权限</span>
        </p>
        <el-select v-model="identityId_view" placeholder="请选择身份id">
          <el-option
            v-for="item in identityId_viewValue"
            :key="item.value"
            :label="item.label"
            :value="item.label"
          />
        </el-select>
        <el-select v-model="viewJurisdictionId" placeholder="请选择视图权限id">
          <el-option
            v-for="item in viewJurisdictionIdValue"
            :key="item.value"
            :label="item.label"
            :value="item.label"
          />
        </el-select>
        <div class="btn">
          <el-button type="primary" @click="set">确定</el-button>
          <el-button plain>重置</el-button>
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

      idx: 0,
      identityId_viewValue:[
        {
          value:'选项1',
          label:'视图'
        }
      ],//视图身份选择
      identityId_apiValue:[
        {
          value:'选项1',
          label:'123456'
        }
      ],//api接口身份选择
      userIdValue: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '狮子头'
        },
        {
          value: '选项3',
          label: '黄金酥'
        }
      ],//用户id选择
      viewJurisdictionIdValue: [
        {
          value: '选项1',
          label: '黄金糕'
        }
      ],
      existingViewValue: [
        {
          value: '选项1',
          label: '黄金糕'
        }
      ],
      apiJurisdictionIdValue: [
        {
          value: '选项1',
          label: '黄金糕'
        }
      ],
      identityIdValue: [
        {
          value: '选项1',
          label: '黄金糕'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      // 添加用户
      addUsersD:state => state.indexUsers.addUsersD,
      //更新用户信息
      updataUserInfoD:state => state.indexUsers.updataUserInfoD,
      //添加身份
      addIdentityD:state => state.indexUsers.addIdentityD,
      //添加 api 接口权限
      addAuthorityApiD:state => state.indexUsers.addAuthorityApiD,
      //添加视图权限
      addAuthorityViewD:state => state.indexUsers.addAuthorityViewD,
      //给身份设定 api 接口权限
      identityApiD:state => state.indexUsers.identityApiD,
      //给身份设定视图权限
      identityViewD:state => state.indexUsers.identityViewD
    })
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
      setIdentityView:'indexUsers/setIdentityView'
    }),
    created() {
      // this.getAddUserData()
    },
    //添加用户
    async addUsersInfo() {
      if(!this.userName && !this.pwd && !this.identityId){
        alert('请完善用户信息')
        return false
      }
      const res = await this.setAddUserData({
        user_name:this.userName,
        user_pwd:this.pwd,
        identity_id:this.identityId
      })
      if(res.code === 1){
        alert(res.msg)
        this.userName = '',
        this.pwd = '',
        this.identityId = ''
      }
    },
    // //更新用户
    async addUsersInfo(){

    },
    //添加身份
    async identity() {
      // let params = {
      //   identity_text: this.identityName
      // }
      // this.setAddIdentity(params);
      // console.log(this.setAddIdentity())
      if (!this.identityName) {
        alert('身份信息不能为空')
        return false
      }
      var res = await this.setAddIdentity({ identity_text: this.identityName })
      if (res.code === 1) {
        alert(res.msg)
        this.identityName = ''
      }
    },
    //添加 api 接口权限
    async jurisdiction(){
      if (!this.apiJurisdictionName && !this.apiJurisdictionUrl && !this.apiJurisdictionMethod) {
        alert('请添加api接口权限')
        return false
      }
      var res = await this.setAddAuthorityApi({ 
        api_authority_text: this.apiJurisdictionName,
        api_authority_url: this.apiJurisdictionUrl,
        api_authority_method: this.apiJurisdictionMethod
      })
      if (res.code === 1) {
        alert(res.msg)
        this.apiJurisdictionName = '',
        this.apiJurisdictionUrl = '',
        this.apiJurisdictionMethod = ''
      }
    },
    api() {
      console.log(4)
    },
    //添加视图接口权限
    async view() {
      console.log(11111111111)
    },
    //给身份设置api接口权限
    set(){
      console.log(66)
    },
    change(idx) {
      this.idx = idx
      if (this.idx === 0) {

      } else if (this.idx === 1) {

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
  >p{
    font-size:22px;
    font-weight: 500;
    padding:20px 0;
    // >span{
    //   color: rgba(0, 0, 0, 0.65)
    // }
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

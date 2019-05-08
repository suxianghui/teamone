<template>
  <div class="navbar">
    <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
    
    <div class="right-menu">
      <!-- <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click"> -->
        <el-dropdown class="avatar-container right-menu-item">

        <div class="avatar-wrapper">
          <img :src="image" class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>

        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>
              {{ $t('navbar.dashboard') }}
            </el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/">
            <el-dropdown-item>
              {{ $t('navbar.github') }}
            </el-dropdown-item>
          </a>
          <a href="#" @click="imagecropperShow=true">
            <el-dropdown-item>
              切换头像
            </el-dropdown-item>
          </a>
          <!-- https://service.jasonandjay.com/ -->
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">{{ $t('navbar.logOut') }}</span>
          </el-dropdown-item>

        </el-dropdown-menu>

      </el-dropdown>

      <el-button type="primary" icon="upload" style="position: absolute;bottom:0px;z-index: 999;width: 60px;height: 60px;border-radius: 50%;opacity: 0;" @click="imagecropperShow=true" />

      <image-cropper
        v-show="imagecropperShow"
        :key="imagecropperKey"
        :width="300"
        :height="300"
        url="https://service.jasonandjay.com/upload"
        lang-type="en"
        @close="close"
        @crop-upload-success="cropSuccess"
      />
    </div>
    <image-cropper
    v-show="imagecropperShow"
    :key="imagecropperKey"
    :width="300"
    :height="300"
    url="https://service.jasonandjay.com/"
    lang-type="en"
    @close="close"
    @crop-upload-success="cropSuccess"
    />
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters ,mapState} from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import ErrorLog from '@/components/ErrorLog'
import Screenfull from '@/components/Screenfull'
import SizeSelect from '@/components/SizeSelect'
import LangSelect from '@/components/LangSelect'
import Search from '@/components/HeaderSearch'

import ImageCropper from '@/components/ImageCropper'
import PanThumb from '@/components/PanThumb'

export default {
  data(){
    return {
      imagecropperShow: false,
      imagecropperKey: 0,
      image: ''
    }
  },
  components: {
    Breadcrumb,
    Hamburger,
    ErrorLog,
    Screenfull,
    SizeSelect,
    LangSelect,
    Search,
    ImageCropper,
    PanThumb
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'name',
      'avatar',
      'device',
      'userInfo'
    ]),
    ...mapState({
      userInfo:state=>state.user.userInfo
    })
  },
  created(){
    this.getInfo()
    // console.log('useravatar',this.avatar)
    this.image=this.avatar?this.avatar:this.image
  },
  methods: {
    // ...mapMutations({
    //   setAvatar:'user/SET_AVATAR',
    // }),
    ...mapActions({
      getInfo:'user/getInfo',
      changePic:'user/changePic',
      user_pic:'user/user_pic'
    }),
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    cropSuccess(e){
      this.changePic({
        user_id:this.userInfo.user_id,
        user_name:this.userInfo.user_name,
        avatar:e[0].path
      })
      this.getInfo()
      this.imagecropperShow = false

    },
    close() {
      this.imagecropperShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;
    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }
  .breadcrumb-container {
    float: left;
  }
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .right-menu {
    width:auto;
    float: right;
    height: 100%;
    line-height: 50px;
    &:focus {
      outline: none;
    }
    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;
      // &.hover-effect {
      //   cursor: pointer;
      //   transition: background .3s;
      //   &:hover {
      //     background: rgba(0, 0, 0, .025)
      //   }
      // }
    }
    .avatar-container {
      margin-right: 30px;
      .avatar-wrapper {
        height: 50px;
        margin-top: 5px;
        position: relative;
        .user-avatar {
          height: 50px;
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters,mapState } from 'vuex'
import adminDashboard from './admin'
import editorDashboard from './editor'

export default {
  name: 'Dashboard',
  components: { adminDashboard, editorDashboard },
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ]),
    ...mapState({
      getInfo:state=>state.user.userInfo.identity_text
    })
  },
  //根据他的身份进入不同的页面
  created() {
    // console.log('adsasd',)
    if (this.getInfo === '管理员') {
      this.currentRole = 'editorDashboard'
    }
  }
}
</script>

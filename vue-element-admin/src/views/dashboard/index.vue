<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

import adminDashboard from './admin'
import editorDashboard from './editor'
import { mapState } from 'vuex';

export default {
  name: 'Dashboard',
  components: { adminDashboard, editorDashboard },
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    // ...mapGetters([//没有命名空间 => 全局模式
    //   'rouls'
    // ])  
    ...mapState({
      identity_text:state => state.user.userInfo.identity_text
    })
  },
  created() {
    // console.log('this.identity_text',this.identity_text)
    if (this.identity_text === "管理者") {
      this.currentRole = 'editorDashboard'
    }
  }
}
</script>

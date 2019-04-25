//引入路由实例
import router from './router'
//引入vuex的实例
import store from './store'
//引入ele提示组件
import { Message } from 'element-ui'
//页面加载进度条
import NProgress from 'nprogress' // progress bar
//进度条的样式
import 'nprogress/nprogress.css' // progress bar style
//从cookie中 拿到 token
import { getToken } from '@/utils/auth' // get token from cookie

//配置进度条是否需要 Spinner
NProgress.configure({ showSpinner: false }) // NProgress Configuration

//白名单
const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

// 导航守卫的运用

//路由跳转之前
router.beforeEach(async (to, from, next) => {
  //三个参数(to: 去哪from: 到哪next:下一个)
  // start progress bar
  NProgress.start()  //进度条开始加载

  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken) { //已经拿到登录态
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
      //next  一定要 调用，否则会跳转不过去，卡到当前页面

      NProgress.done()  //加载完成进度条关闭
    } else {
      // determine whether the user has obtained his permission roles through getInfo
      //   const hasRoles = store.getters.roles && store.getters.roles.length > 0

      //判断有没有 userInfo
      const userInfo = store.getters.userInfo;
      //判断是否获取过用户信息，如果有就不在获取，如果没有就第一次获取
      if (userInfo.user_name) {
        next()
      } else {
        try {
          // get user info
          // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
          //如果没有用户信息，就去获取用户信息
          const userInfo = await store.dispatch('user/getInfo')

          //通过用户信息，获取权限
          const viewAuthority = await store.dispatch('user/getViewAuthority')

          //通过权限，生成路由
          const accessRoutes= await store.dispatch('permission/generateRoutes',viewAuthority)
          
          // 动态添加路由到路由表中
          router.addRoutes(accessRoutes)

          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true })
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})

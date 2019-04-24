// 引入路由实例
import router from './router'
// 引入vuex的实例
import store from './store'
// 引入ele提示组件
import { Message } from 'element-ui'
// 引入 页面加载进度条
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie

// 配置进度条是否需要Spinner  (加载时页面右上方的loading图标是否显示)
NProgress.configure({ showSpinner: true }) // NProgress Configuration

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

// 导航守卫的运用
router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else {
      // determine whether the user has obtained his permission roles through getInfo
      // const hasRoles = store.getters.roles && store.getters.roles.length > 0
      const userInfo = store.getters.userInfo;
      // 判断是否获取过用户信息,有则不再获取, 无则第一次获取
      if (userInfo.user_name) {
        next()
      } else {
        try {
          // get user info
          // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
          const userInfo = await store.dispatch('user/getInfo')
          console.log(userInfo,'获取userInfo..')
          // 通过身份获取权限

          // 通过权限生成路由
          await store.dispatch('permission/generateRoutes', []);
          // generate accessible routes map based on roles
          // const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

          // // dynamically add accessible routes
          // router.addRoutes(accessRoutes)

          // // hack method to ensure that addRoutes is complete
          // // set the replace: true, so the navigation will not leave a history record
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

    // 判断要去的页面是否在白名单内,在的话该咋咋地,不在的话就重定向到登录页面
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

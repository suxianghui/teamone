import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie

NProgress.configure({ showSpinner: false }) // NProgress Configuration

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
    //   const hasRoles = store.getters.roles && store.getters.roles.length > 0
    const userInfo =store.getters.userInfo;
    
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

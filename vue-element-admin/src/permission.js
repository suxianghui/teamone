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
router.beforeEach(async(to, from, next) => {
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
      if ( userInfo.user_name ) {
        next()   
      } else {
        try {
          // get user info
          // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
        //   const { roles } = await store.dispatch('user/getInfo')
            
        //1.如果没有用户信息，就去获取用户信息
        const userInfo = await store.dispatch('user/getInfo')
            console.log('userInfo',userInfo);
        //2.通过身份获取权限

        
        //3.通过权限生成动态路由
        await store.dispatch('permission/generateRoutes',[])
          // generate accessible routes map based on roles
        //   const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

        //   // dynamically add accessible routes
        //   router.addRoutes(accessRoutes)

        //   // hack method to ensure that addRoutes is complete
        //   // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true }) 
        } catch (error) {
            console.log('error',error)
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()  //进度条消失
        }
      }
    }
  } else {
    /* has no token*/


//没有登录态的情况
    if (whiteList.indexOf(to.path) !== -1) {  //没有拿到登录态，判断白名单中有没有这一项
        //如果在白名单中， 则不重定义项到登录页，没有则跳转
      // in the free login whitelist, go directly
      next() 
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      //这里的 redirect 指的是：下一步跳转到哪里(记录跳转到哪里)
      NProgress.done() //关闭进度条
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})

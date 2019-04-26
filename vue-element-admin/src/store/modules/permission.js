import { asyncRoutes, constantRoutes } from '@/router'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param view_id
 * @param route
 */
function hasPermission(view_ids, route) {
  if (route.meta && route.meta.view_id) {
    return view_ids.some(item => item===route.meta.view_id)
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes asyncRoutes
 * @param view_id
 */
export function filterAsyncRoutes(routes, view_id) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(view_id, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, view_id)
      }
      res.push(tmp)
    }
  })

  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes({ commit }, viewAuthority) {
    // 获取用户拥有的所有view_id,根据权限可生成路由
    let view_id = viewAuthority.map(item=>item.view_id);
    // 在动态路由中过滤，得到用户能能够访问的路由，页面
    let accessedRoutes = filterAsyncRoutes(asyncRoutes,view_id)
    // 更新路由
    commit('SET_ROUTES',accessedRoutes)
    return accessedRoutes;
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

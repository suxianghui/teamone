import { login, logout, getInfo, getviewAuthority , user_gx ,userPic} from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  userInfo:{},
  Authoritys:[]
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  userInfo(state,payload){
    state.userInfo = payload
    state.avatar = payload.avatar
  },
  viewAuthority(state,payload){
    state.Authoritys = payload;
  }
}

const actions = {
  async user_user({commit},payload){
      await user_gx(payload);
      let result = await getInfo();
      commit('userInfo',result.data)
  },
  // user login
  async login({ commit }, userInfo) {
    const { username, password } = userInfo
    let res = await login({user_name:username,user_pwd:password})
    setToken(res.token)
    return res;
  },

  // get user info
  async getInfo({ commit, state },payload) {
    let result = await getInfo();
    let data={...result.data,...payload}
    commit('userInfo',data)
    return data;
  },

  async getViewAuthoritys({commit},payload){
    // console.log(payload,'payload')
    let getviewAuthority_s = await getviewAuthority({user_id:payload});
    // console.log(getviewAuthority_s,'getviewAuthority_s')
    if(getviewAuthority_s.code == 1){
      commit('viewAuthority',getviewAuthority_s.data)
      return getviewAuthority_s.data;
    }
    return [];
  },

  async changePic({commit},payload){
    let data = await userPic(payload);
    // console.log('userpic',data)
    // let uInfo=await getInfo();
    // console.log(uInfo)
    commit('SET_AVATAR',payload.avatar);
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('userInfo', '')
        commit('viewAuthority', [])
        removeToken()
        resetRouter()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },

  // Dynamically modify permissions
  changeRoles({ commit, dispatch }, role) {
    return new Promise(async resolve => {
      const token = role + '-token'

      commit('SET_TOKEN', token)
      setToken(token)

      const { roles } = await dispatch('getInfo')

      resetRouter()

      // generate accessible routes map based on roles
      const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })

      // dynamically add accessible routes
      router.addRoutes(accessRoutes)

      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

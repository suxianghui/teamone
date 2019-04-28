
import { login, logout, getInfo, getViewAuthority } from '@/api/user'
import { userData } from "@/api/exams/users"
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  userInfo:{},
  viewAuthority:[]
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
  SET_USERINFO: (state,userInfo) => {
    state.userInfo=userInfo
  },
  SET_VIEWAUTHORITY: (state,viewAuthority) => {
    state.viewAuthority = viewAuthority
  },
  SET_AVATAR: (state,avatar)=> {
    state.avatar=avatar
  }

}

const actions = {
  //user_pic
  async user_pic({commit},payload){
    // console.log(payload,'user_pic')
    await userData(payload);
    let result = await getInfo();
    commit('SET_USERINFO',result.data)
    return result.data;
  },
  // user login
  async login({ commit }, userInfo) {
    const { username, password } = userInfo
    let res = await login({user_name: username, user_pwd: password});
    setToken(res.token);  //把登录态authorization存储在cookie中
    return res;
  },
  // get user info
  async getInfo({ commit }, state ) {
       let data =await getInfo();
       commit('SET_USERINFO',data.data)
       commit('SET_AVATAR',data.data.avatar);
       return data.data
  },
  // get user viewAuthority
  async getViewAuthority({commit},payload){
    let data = await getViewAuthority();
    console.log('userAuthority', data)
    if(data.code == 1) {
      commit('SET_VIEWAUTHORITY',data.data)
      return data.data
    }
    return []
  },
  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
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
  },

  async changePic({commit},payload){
    let data = await userPic(payload);
    console.log('userpic',data)
    let uInfo=await getInfo();
    console.log(uInfo)
    commit('SET_AVATAR',uInfo.data.avatar);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}


import { 
  addUsers,
  updataUserInfo,
  addIdentity,
  addAuthorityApi,
  addAuthorityView,
  identityApi,
  identityView
 } from '@/api/exams/users.js'

const state = {
  addUsersD:[],//添加用户
  updataUserInfoD:[],//更新用户信息
  addIdentityD:[],//添加身份
  addAuthorityApiD:[],//添加 api 接口权限
  addAuthorityViewD:[],//添加视图权限
  // identityApiD:[],//给身份设定 api 接口权限
  identityViewD:[],//给身份设定视图权限

  // identityId_viewValue: [],
  // //身份设置视图权限_身份id选择
  // identityId_apiValue: [],
  // //身份设置api接口权限——身份id选择


}

const mustations = {
  // 添加用户
  addUsersData(state,payload){
    state.addUsersD = payload;
    // console.log(payload, 'mustations添加用户');
  },
  //更新用户信息
  updateUsersData(state,payload){
    state.updataUserInfoD = payload;
    // console.log(payload, 'mustations更新用户');
  },
  //添加身份
  addIdentityData(state,payload){
    state.addIdentityD = payload;
    // console.log(state.addIdentityD,'mustations添加身份');
  },
  //添加 api 接口权限
  addApiAuthorityData(state,payload){
    state.addAuthorityApiD = payload;
    // console.log(payload, 'mustations添加接口');
  },
  //添加视图权限
  addViewAuthorityData(state,payload){
    state.addAuthorityViewD = payload;
    // console.log(payload, 'mustations添加视图');
  },
  //给身份设定 api 接口权限
  // addIdentityApiData(state,payload){
  //   state.identityApiD = payload;
  //   // console.log(payload, 'mustations设定api');
  // },
  //给身份设定视图权限
  addIdentityViewData(state,payload){
    state.identityViewD = payload;
    // console.log(payload, 'mustations设定视图');
  }
}

const actions = {
  //添加用户
  async setAddUserData({ commit }, payload) {
    // console.log(payload,'111111');
    const result = await addUsers(payload)
    // console.log(result,'ac11')
    return result
    // return new Promise(async(resolve, reject) => {
    //   const result = await addUsers(payload)
    //   commit('addUsersData', result)
    //   console.log(result)
    //   resolve(result)
    // })
  },
  //更新用户信息（用户名，用户密码，用户身份）
  async setUpdataUserInfo({ commit }, payload) {
    let result = await updataUserInfo(payload);
    return result
  },
  //添加身份
  async setAddIdentity({ commit }, payload) {
    // console.log(payload, '添加身份1111');
    let result = await addIdentity(payload)
    return result
  },
  //添加api接口权限
  async setAddAuthorityApi({ commit }, payload) {
    let result = await addAuthorityApi(payload);
    return result
  },
  //添加视图权限
  async setAddAuthorityView({ commit }, payload) {
    let result = await addAuthorityView(payload);
    // console.log(result,'0000')//打印出身份权限不足
    return result
  },
  //给身份设定api接口权限
  // async setIdentityApi({ commit }, payload) {
  //   let result = await identityApi(payload);
  //   console.log(result,'111')
  //   commit('addIdentityApiData', result);
  //   return result
  // },
  setIdentityApi({ commit, state }, payload) {
    return new Promise(async (resolve, reject) => {
      let data = await identityApi(payload)
      console.log(data.data, '123123')
      resolve(data)
    })
  },
  //给身份设定视图权限
  async setIdentityView({ commit }, payload) {
    let result = await identityView(payload);
    return result
  }
}

export default {
  namespaced: true,
  state,
  mustations,
  actions
}

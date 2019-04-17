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
  
}

const mustations = {
  // 添加用户
  updateUser(state, payload) {
    // console.log('payload',payload)
  }
}

const actions = {
  //添加用户
  async setAddUserData({ commit }, payload) {
    console.log(payload);
    return new Promise(async(resolve, reject) => {
      const result = await addUsers(payload)
      // state.addUserlist = result
      commit('updateUser', result)
      console.log(result)
      resolve(result)
    })
  },
  //更新用户信息（用户名，用户密码，用户身份）
  async setUpdataUserInfo({ commit }, payload) {
    // console.log(payload);
    let result = await updataUserInfo(payload);
    return result;
  },
  //添加身份
  async setAddIdentity({ commit }, payload) {
    // console.log(payload, '添加身份');
    let result = await addIdentity(payload);
    return result;
  },
  //添加api接口权限
  async setAddAuthorityApi({ commit }, payload) {
    // console.log(payload);
    let result = await addAuthorityApi(payload);
    return result;
  },
  //添加视图权限
  async setAddAuthorityView({ commit }, payload) {
    // console.log(payload);
    let result = await addAuthorityView(payload);
    return result;
  },
  //给身份设定api接口权限
  async setIdentityApi({ commit }, payload) {
    // console.log(payload);
    let result = await identityApi(payload);
    return result;
  },
  //给身份设定视图权限
  async setIdentityView({ commit }, payload) {
    // console.log(payload);
    let result = await identityView(payload);
    return result;
  },
}

export default {
  spacename: true,
  state,
  mustations,
  actions
}

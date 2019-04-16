import { getAddUser } from '@/api/exams/users.js'
const state = {
  addUserlist: []// 添加用户
}

const mustations = {
  // 添加用户
  updateUser(state, payload) {
    state.addUserlist = { ...state.addUserlist, ...payload }
    // console.log('payload',payload)
  }
}

const actions = {
  async getAddUserData({ commit, state }, payload) {
    return new Promise(async(resolve, reject) => {
      const result = await getAddUser(payload)
      // state.addUserlist = result
      commit('updateUser', result)
      console.log(result)
      resolve(result)
    })
  }
}

export default {
  spacename: true,
  state,
  mustations,
  actions
}

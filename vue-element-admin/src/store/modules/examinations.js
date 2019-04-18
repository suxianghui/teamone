import { examination } from '@/api/examination'

const state = {
  examList:[],
}

const mutations = {
  getList(state, payload) {
    console.log('payload',payload)
    state.examList = { ...state.examList, ...payload }
  }
}

const actions = {
  async gitList({ commit, state }, payload) {
    console.log('payload...',payload)
    return new Promise(async(resolve, reject) => {
      const result = await getList(payload)
      console.log(result)
      commit('examination', result)
      resolve(result)//成功
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
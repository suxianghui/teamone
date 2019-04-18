import { studentExaminationPapers } from '@/api/examination'

const state = {
  detail:[],
}

const mutations = {
  examination(state, payload) {
    console.log('payload',payload)
    state.examList = { ...state.detail, ...payload }
  }
}

const actions = {
  async detail({ commit, state }, payload) {
    return new Promise(async(resolve, reject) => {
      const result = await studentExaminationPapers(payload)
      commit('studentExaminationPapers', result)
      resolve(result)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
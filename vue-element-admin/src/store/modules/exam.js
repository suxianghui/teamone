// import { submitExam } from '@/api/exam'

const state = {
  submitExamTest: ''
}

const mutations = {

}

const actions = {
  submitExam({ commit }, payload) {
    console.log(payload)
    // let result = payload;
    commit('submitExamRes', payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

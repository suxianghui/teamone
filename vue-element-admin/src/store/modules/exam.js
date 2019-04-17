import { submitExam } from "../../api/exam";

// import { submitExam } from '@/api/exam'

const state = {
  submitExamTest: ''
}

const mutations = {

}

const actions = {
  async getSubmitExam({ commit }, payload) {
    console.log(payload,'store')
    let res = await submitExam(payload);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

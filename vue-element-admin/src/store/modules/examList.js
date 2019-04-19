import { studentExaminationPapers } from '@/api/examination'

const state = {
  // detail:[],
}

const mutations = {
  // getstudentPapersData(state, payload) {
  //   state.detail = payload
  // }
}

const actions = {
  async students({commit}, payload){
    let result= await studentExaminationPapers(payload)
    console.log("studentExaminationPapers",result)
    // commit('getstudentPapersData', result);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
import { studentExaminationPapers } from '@/api/examination'

const state = {
  List:[],
}

const mutations = {
  getstudentPapersData(state, payload) {
    state.List = payload
  }
}

const actions = {
  async students({commit}, payload){
    let result= await studentExaminationPapers(payload)
    console.log("studentExaminationPapers",result)
    commit('getstudentPapersData', result);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
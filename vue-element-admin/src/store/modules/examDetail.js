import { studentPapers } from '@/api/examination'

const state = {
  detail:[],
}

const mutations = {
  getstudentPapersData(state, payload) {
    state.detail = payload
  }
}

const actions = {
  async getstudentPapers({commit}, payload){
    let result= await studentPapers()
    commit('getstudentPapersData', result);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
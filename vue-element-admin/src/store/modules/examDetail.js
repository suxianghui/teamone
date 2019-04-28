import { studentPapers } from '@/api/examination'

const state = {
  detail:[],
}

const mutations = {
  getstudentPapersData(state, payload) {
    state.detail = payload
  }
}
//班级
const actions = {
  async getstudentPapers({commit}, payload){
    let result= await studentPapers(payload)
    if(result){
      if(result.code==1){
        commit('getstudentPapersData', result);
        return result.data
      }
    }
    console.log('result',result)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
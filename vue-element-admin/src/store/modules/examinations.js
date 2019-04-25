import { examination } from '@/api/examination'

const state = {
  examList:[],
  // eaamList:[]
}

const mutations = {
  // List(state, payload) {
  //   console.log('payload',payload)
  //   state.examList = { ...state.examList, ...payload }
  // }
  getExaminationData(state, payload) {
    state.examList = payload
  }
}

const actions = {
  // getListData({ state }, payload) {
  //   return new Promise(async (resolve, reject) => {
  //     let data = await examination(payload)
  //     console('data',data)
  //     resolve(data.data)
  //   })
  // },
  async getExamination({commit}, payload){
    let result= await examination(payload)
    commit('getExaminationData', result);
    // console.log(result)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
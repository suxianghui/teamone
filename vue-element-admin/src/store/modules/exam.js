import { submitExam, examList } from "../../api/exam";

// import { submitExam } from '@/api/exam'

const state = {
  submitExamTest: '',
  allExamList:''
}

const mutations = {
  listAll(state, payload) {
    console.log(payload,'...')
    state.allExamList = payload;
  }
}

const actions = {
  // 创建试卷
  async getSubmitExam({ commit }, payload) {
    console.log(payload,'store')
    let res = await submitExam(payload);
    // console.log(res,'res...')
  },

  // 获取试卷列表
  async getExamList({commit}, payload) {
    let res = await examList();
    console.log(res,'res...')
    commit('listAll', res.exam);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

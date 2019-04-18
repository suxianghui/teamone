import { examType, examSubject, submitExam, examList } from "../../api/exam";


const state = {
  submitExamTest: '',
  allExamTypes: [],
  allExamSubjects: [],
  getCreateExam:{},
  allExamList:[]
}

const mutations = {
  allExamType(state, payload) {
    state.allExamTypes = payload;
  },
  allExamSubject(state, payload) {
    state.allExamSubjects = payload;
  },
  createExam(state, payload){
    // console.log(payload,'.....')
    state.getCreateExam = { ...payload };
  },
  listAll(state, payload) {
    state.allExamList = payload;
  }
}

const actions = {
  // 获取考试类型
  async getExamType({commit}, payload) {
    let res = await examType(payload);
    commit('allExamType', res.data);
  },

  // 获取所有课程
  async getExamSubject({commit}, payload) {
    let res = await examSubject();
    commit('allExamSubject', res.data);
  },

  // 创建试卷
  async getSubmitExam({ commit }, payload) {
    let res = await submitExam(payload);
    commit('createExam',res.data);
  },

  // 获取试卷列表
  async getExamList({commit}, payload) {
    let res = await examList();
    commit('listAll', res.exam);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

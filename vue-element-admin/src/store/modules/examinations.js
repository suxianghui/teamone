import { examination,studentPapers,studentExaminationPapers,studentpis } from '@/api/examination'

const state = {
  examList:[],
  detail:[],
  List:[],
  gradeName:"",
}

const mutations = {
  //学生列表
  getExaminationData(state, payload) {
    state.examList = payload
  },
  //班级
  getstudentPapersData(state, payload) {
    state.detail = payload
  },
  //学生详情
  getstudentData(state, payload) {
    state.List = payload
  },
  changegradeName(state,payload){
    state.gradeName = payload
  }
}

const actions = {
  //学生列表
  async getExamination({commit}, payload){
    let result= await examination(payload)
    commit('getExaminationData', result);
    // console.log(result)
  },

  //班级列表
  async getstudentPapers({commit}, payload){
    let result= await studentPapers(payload)
    console.log("getstudentPapers",result)
      commit('getstudentPapersData', result);
  },
  //学生详情
  async students({commit}, payload){
    let result= await studentExaminationPapers(payload)
    console.log("studentExaminationPapers",result)
    commit('getstudentData', result);
  },
  // //批卷
  async studentspsjuan({commit}, payload){
    let result= await studentpis(payload)
    // commit('getstudentspsjuan', result);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
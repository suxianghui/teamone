import { examType, examSubject, submitExam, deleteExam, renewal, examList, detailData, allQuestion } from "../../api/exam";
import moment from 'moment'

const state = {
  submitExamTest: '',
  allExamTypes: [],
  allExamSubjects: [],
  getCreateExam:{},
  allExamList:[],
  detailDatas: []
}

const mutations = {
  updateState(state, payload) {
    for (var key in payload) {
      state[key] = payload[key]
    }
  },
  allExamType(state, payload) {
    state.allExamTypes = payload;
  },
  allExamSubject(state, payload) {
    state.allExamSubjects = payload;
  },
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
    // commit('createExam',res.data);
    return res;
  },

  // 删除试卷
  async deleteExam({commit}, payload) {
    let res = await deleteExam();
  },

  // 跟新数据
  async renewal({ commit }, payload) {                          ////
    console.log(payload)
    let res = await renewal(payload.header, payload.data)
    return res
  },

  // 查询所有的数据
  async getList({ commit }, payload) {
    const res = await examList(payload)
    res.exam.forEach(item => {
      item['start_time'] = moment(item.start_time * 1).format('YYYY-MM-DD h:mm:ss')
      item['end_time'] = moment(item.end_time * 1).format('YYYY-MM-DD h:mm:ss')
    })
    commit('updateState', { allExamList: res.exam });
    return res;
  },

  // 获取详情页的数据
  async detailData({commit}, payload) {
    let res = await detailData(payload);
    console.log(res,'detailData...')
    commit('updateState', { detailDatas: res.data });
  },
  
  // 获取所有考试题
  async allQuestion({commit}, payload) {
    let result = await allQuestion();
    console.log(result.data,'...result')
    return result.data;
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

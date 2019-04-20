import { mangerGrade, mangerGradeAdd, mangerGradeEdit, mangerGradeDelete, mangerRoom } from '@/api/class'

const state = {
  classData: [],
  roomMsg: [],
  subjectMsg: []
}

const mutations = {
  updateState(state, payload) {
    if (payload instanceof Array) {
      state.classData = payload;
      payload.forEach((item) => {
        if (state.subjectMsg.length > 0) {
          const result = state.subjectMsg.find(val => {
            return val.subjectName == item.subject_text
          })
          // 处理课程数据
          if (!result) {
            state.subjectMsg.push({
              subjectvalue: item.subject_id,
              subjectName: item.subject_text
            })
          }
        } else {
          state.subjectMsg.push({
            subjectvalue: item.subject_id,
            subjectName: item.subject_text
          })
        }
      })
      console.log('subjectMsg', state.subjectMsg)
    } else {
      // state.classData.push(payload)
    }
  },

  // 教室数据
  updateRoom(state, payload) {
    state.roomMsg = payload
  }
}

const actions = {
  async getMangerGrade({ commit }) {
    const data = await mangerGrade()
    console.log('classdata', data)
    commit('updateState', data.data)
  },
  async AddMangerGrade({ commit }, payload) {
    const data = await mangerGradeAdd(payload)
    console.log('add', data)
  },
  async editMangerGrade({ commit }, payload) {
    const data = await mangerGradeEdit(payload)
    console.log('edit', payload)
  },
  async deleteMangerGrade({ commit }, payload) {
    const data = await mangerGradeDelete(payload)
    console.log('delete', data)
  },
  async getMangerRoom({ commit }) {
    const data = await mangerRoom()
    console.log('roomdata', data)
    commit('updateRoom', data.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

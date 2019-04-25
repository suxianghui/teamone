import { mangerStudent, mangerRoom, mangerGrade,deleteStudent } from '@/api/class'

const state = {
  studentData: []
}
const mutations = {
  updateStudent(state, payload) {
    if (payload instanceof Array) {
      state.studentData = payload
    }
  }
}
const actions = {
  async getMangerRoom({ commit }) {
    const data = await mangerRoom()
    console.log('getMangerRoom', data)
    return data.data
  },
  async getMangerGrade({ commit }) {
    const data = await mangerGrade()
    const classData = []
    data.data.forEach(item => {
      classData.push({
        grade_id: item.grade_id,
        grade_name: item.grade_name
      })
    })
    return classData
  },
  async getMangerStudent({ commit }) {
    const data = await mangerStudent()
    console.log('getMangerStudent', data)
    commit('updateStudent', data.data)
  },
  async deleteMangerStudent({commit},payload){
      const data=await deleteStudent(payload)
      console.log('deleteMangerStudent', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

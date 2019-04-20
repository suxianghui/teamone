import { mangerRoom, mangerRoomAdd, mangerRoomDelete } from '@/api/class'

const state = {
  roomMsg: []
}
const mutations = {
  updateRoom(state, payload) {
    if (payload instanceof Array) {
      state.roomMsg = payload
    }
  }
}
const actions = {
  async getMangerRoom({ commit }) {
    const data = await mangerRoom()
    console.log('getMangerRoom', data)
    commit('updateRoom', data.data)
  },
  async AddmangerRoom({ commit }, payload) {
    const data = await mangerRoomAdd({ room_text: payload.roomName })
    console.log('mangerRoomAdd', data)
  },
  async DeletemangerRoom({ commit }, payload) {
    const data = await mangerRoomDelete(payload)
    console.log('mangerRoomDelete', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

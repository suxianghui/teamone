const state={
  list:{}
}

const mutations={
    getPush(state,payload){
      state.list=payload
    }
}

const actions={
 
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}
import {gettingQuestions ,deleteQuestions} from '@/api/test.js'

const state={
  list:{}
}

const mutations={
  
}

const actions={
  getQuestions({commit,state},payload){
    return new Promise(async(resolve,reject)=>{
      let data = gettingQuestions()
      resolve(data)
    })
  },
  delQuestion({commit,state},payload){
    return new Promise(async (resolve,reject)=>{
      console.log(payload)
      let data = await deleteQuestions(payload)
      resolve(data)
    })
  }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}
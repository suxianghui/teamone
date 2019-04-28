import {gettingQuestions , deleteQuestions , UpdateUserInformation} from '@/api/test.js'

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
      let data = await deleteQuestions(payload)
      resolve(data)
    })
  },
  UpdateUserInfor({commit,state},payload){
    return new Promise(async (resolve,reject)=>{
      console.log(payload)
      let data = await UpdateUserInformation(payload)
      console.log(data)
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
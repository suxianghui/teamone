import {gettingQuestions} from '@/api/test.js'

const state={
  list:{}
}

const mutations={
  
}

const actions={
  getQuestions({commit,state},payload){
    return new Promise(async(resolve,reject)=>{
      let data = gettingQuestions()
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
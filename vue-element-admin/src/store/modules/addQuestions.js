import { addQuestions,CurrentUserInformation } from '@/api/test.js'

const state={
    list:''
}

const mutations={
    addQuestions(state,payload){
        state.list = payload.msg
        console.log(state.list)
    }
}

const actions={
   addQuestionStudy({commit,state},payload){
       return new Promise(async(resolve,reject)=>{
        let data = await addQuestions(payload)
        commit('addQuestions',data)
        resolve(data)
       })
   },
   CurrentUserInfor({commit,state},payload){
       return new Promise(async(resolve,reject)=>{
           let data = await CurrentUserInformation()
           console.log(data)
           resolve(data.data.user_id)
       })
   }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}
import { addQuestions,CurrentUserInformation } from '@/api/test.js'

const state={
    
}

const mutations={

}

const actions={
   addQuestionStudy({commit,state},payload){
       return new Promise(async(resolve,reject)=>{
        let data = await addQuestions(payload)
        resolve(data)
       })
   },
   CurrentUserInfor({commit,state},payload){
       return new Promise(async(resolve,reject)=>{
           let data = await CurrentUserInformation()
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
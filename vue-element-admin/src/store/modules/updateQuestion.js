import {updateQuestions} from '@/api/test.js'

const state ={
    list:''
}

const mutations={
    updateQuestions(state,payload){
        state.list = payload.msg
    }
}

const actions ={
    updateQuestionStudy({commit,state},payload){
        return new Promise(async(resolve,reject)=>{
            console.log(data)
            let data = await updateQuestions(payload)
            commit('updateQuestions',data)
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
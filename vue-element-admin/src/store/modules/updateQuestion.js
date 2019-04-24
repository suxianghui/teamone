import {updateQuestions} from '@/api/test.js'

const state ={

}

const mutations={

}

const actions ={
    updateQuestionStudy({commit,state},payload){
        return new Promise(async(resolve,reject)=>{
            console.log(payload)
            let data = await updateQuestions(payload)
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
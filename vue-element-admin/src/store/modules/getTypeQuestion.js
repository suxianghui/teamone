import { getTypeQuestions } from '@/api/test.js'

const state = {

}

const mutations = {

}

const actions = {
    getTypeQuestions({commit,state},payload){
        return new Promise(async (resolve,reject)=>{
            let data = await getTypeQuestions()
            resolve(data.data)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
import { getTypeExam } from '@/api/test.js'

const state = {

}

const mutations = {

}

const actions = {
    getTypeStudy({commit,state},payload){
        return new Promise(async (resolve,reject)=>{
            let data = await getTypeExam()
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
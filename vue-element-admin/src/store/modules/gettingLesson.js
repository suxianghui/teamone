import { gettingLessons } from '@/api/test.js'

const state = {

}

const mutations = {

}

const actions = {
    getTypeCurriculum({commit,state},payload){
        return new Promise(async (resolve,reject)=>{
            let data = await gettingLessons()
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
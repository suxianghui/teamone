import {addTestTypes} from '@/api/test.js'

const state={

}

const mutations={

}

const actions={
    addTestType({commit,state},payload){
        return new Promise(async(resolve,reject)=>{
            console.log(payload)
            let data = await addTestTypes(payload)
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
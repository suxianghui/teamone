import {conditionalTest} from '@/api/test.js'

const state={
   
}

const mutations ={
    
}

const actions ={
   conditional({commit,state},payload){
       return new Promise(async(resolve,reject)=>{
           let data = await conditionalTest(payload)
           resolve(data.data)
       })
   }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}
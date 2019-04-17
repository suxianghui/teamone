import {
    userData,
    identity,
    apiAuthority,
    identityApiAuthorityRelation,
    viewAuthority,
    identityViewAuthorityRelation
} from "@/api/exams/users.js"

const state = {
    userDatas: [], //获取用户数据
    identitysData: [], //获取身份数据
    apiAuthoritysData: [], //获取api接口权限数据
    viewAuthoritysData: [], //获取视图权限数据
    identityViewAuthorityRelationsData: [], //获取身份和视图权限关系
    identityApiAuthorityRelationsData: [], //获取身份和api权限关系
    
    existingViewValue: [], //已有视图
    apiJurisdictionIdValue: [], //api接口权限id
    viewJurisdictionIdValue: [], //视图权限id
    identityIdValue: [], //身份id
    userIdValue: [] //用户id
}

const mutations = {
    //获取用户数据
    getUserData(state,payload){
        state.userDatas = payload.data;
        console.log(payload,'用户')
        state.userDatas.forEach((item,index)=>{
            //用户id
           state.userIdValue.push(item.user_name)
        })
    },
    //获取身份数据
    getIdentity(state, payload){
        state.identitysData = payload.data;
        console.log(payload,'身份')
        state.identitysData.forEach((item,index)=>{
            //身份id
            state.identityIdValue.push(item.identity_text)
        })
    },
    //获取api接口权限数据
    getApiAuthoritys(state, payload){
        state.apiAuthoritysData = payload.data;
        console.log(payload,'api接口权限')
        state.apiAuthoritysData.forEach((item,index)=>{
            //视图权限id
            state.apiJurisdictionIdValue.push(item.api_authority_text)
        })
    },
    //获取身份和api权限关系
    getIdentityApiAuthorityRelations(state, payload){
        state.identityApiAuthorityRelationsData = payload.data;
        console.log(payload,'身份和api权限')
    },
    //获取视图权限数据
    getViewAuthoritys(state, payload){
        state.viewAuthoritysData = payload.data;
        console.log(payload,'视图权限')
        state.viewAuthoritysData.forEach(item => {
            //视图权限id
            state.viewJurisdictionIdValue.push(item.view_authority_text)
        })
    },
    //获取身份和视图权限关系
    getIdentityViewAuthorityRelations(state, payload){
        state.identityViewAuthorityRelationsData = payload.data;
        console.log(payload,'身份和视图')
        state.identityViewAuthorityRelationsData.forEach(item => {
            //已有视图
            state.existingViewValue.push({ authority: item.view_authority_text, view_id: item.view_id })
        })
        state.existingViewValue = [...new Set(state.existingViewValue)]
    }
}

const actions = {
    //展示用户数据
    setUserData({ commit } ,payload){
        // console.log(payload);
        return new Promise(async (resolve,reject) => {
            let result = await userData(payload);
            commit('getUserData', result)
            console.log(result,'用户展示')
            resolve(result);
        })  
    },
    //展示身份数据
    setidentity({ commit }, payload) {
        // console.log(payload);
        return new Promise(async (resolve, reject) => {
            let result = await identity(payload);
            console.log(result, '身份')
            commit('getIdentity', result)
            resolve(result);
        })
    },
    //展示api接口数据
    setApiAuthority({ commit }, payload) {
        // console.log(payload);
        return new Promise(async (resolve, reject) => {
            let result = await apiAuthority(payload);
            commit('getApiAuthoritys', result)
            console.log(result,'展示api')
            resolve(result);
        })
    },
    //展示身份和api权限关系
    setIdentityApiAuthorityRelation({ commit }, payload) {
        // console.log(payload);
        return new Promise(async (resolve, reject) => {
            let result = await identityApiAuthorityRelation(payload);
            commit('getIdentityApiAuthorityRelations', result)
            console.log(result,'展示身份和api')
            resolve(result);
        })
    },
    //获取视图权限
    setViewAuthority({ commit }, payload) {
        // console.log(payload);
        return new Promise(async (resolve, reject) => {
            let result = await viewAuthority(payload);
            commit('getViewAuthoritys', result)
            console.log(result,'展示视图权限')
            resolve(result);
        })
    },
    //展示身份和视图权限关系
    setidentityViewAuthorityRelation({ commit }, payload) {
        // console.log(payload);
        return new Promise(async (resolve, reject) => {
            let result = await identityViewAuthorityRelation(payload);
            commit('getIdentityViewAuthorityRelations', result)
            console.log(result,'展示身份和视图')
            resolve(result);
        })
    },
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}
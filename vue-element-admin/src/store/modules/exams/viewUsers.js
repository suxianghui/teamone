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

    userIdValue: [],
    //添加/更新_用户id 选择
    identityIdValue: [],
    // 添加/更新用户_身份id选择
    viewJurisdictionIdValue: [],
    //给身份设置视图权限_权限id选择

    existingViewValue: [],//添加视图接口权限_选择已有视图
    
    apiJurisdictionIdValue: [],
    //给身份设置api接口权限_请选择api接口权限id

    total: 0,//总条数
    page: 1, //第几页
    pageSize: 10, //每页条数
    active: 0,
    data: []
}

const mutations = {
    //获取用户数据
    getUserData(state, payload) {
        //    loop(state.userDatas,payload)
        state.userDatas = payload.data;
        state.userDatas.forEach((item, index) => {
            //用户id
            state.userIdValue.push(item.user_name)
        })
        deWeight(state.userIdValue)
        // console.log(state.userDatas,'获取用户')
        // state.total = state.userDatas.length
        state.data = state.userDatas.slice(0, 10)
    },
    //获取身份数据
    getIdentity(state, payload) {
        // loop(state.identitysData,payload)
        state.identitysData = payload.data;
        state.identitysData.forEach((item, index) => {
            //身份id
            state.identityIdValue.push(item.identity_text)
        })
        // console.log( state.identitysData,'获取身份')
        deWeight(state.identityIdValue)


    },
    //获取api接口权限数据
    getApiAuthoritys(state, payload) {
        state.apiAuthoritysData = payload.data;
        state.apiAuthoritysData.forEach((item, index) => {
            //视图权限id
            state.apiJurisdictionIdValue.push(item.api_authority_text)
        })
        // console.log(state.apiAuthoritysData,'获取接口');
        deWeight(state.apiJurisdictionIdValue)
    },
    //获取身份和api权限关系
    getIdentityApiAuthorityRelations(state, payload) {
        state.identityApiAuthorityRelationsData = payload.data;
        // console.log(payload,'payload')
        // console.log(state.identityApiAuthorityRelationsData, '获取身份和api')
        // deWeight(state.identityApiAuthorityRelationsData)
    },
    //获取视图权限数据
    getViewAuthoritys(state, payload) {
        state.viewAuthoritysData = payload.data;
        state.viewAuthoritysData.forEach(item => {
            //视图权限id
            state.viewJurisdictionIdValue.push(item.view_authority_text)
        })
        deWeight(state.viewJurisdictionIdValue)
    },
    //获取身份和视图权限关系
    getIdentityViewAuthorityRelations(state, payload) {
        state.identityViewAuthorityRelationsData = payload.data;
        state.identityViewAuthorityRelationsData.forEach(item => {
            //已有视图
            state.existingViewValue.push({ authority: item.view_authority_text, view_id: item.view_id })
        })
        // console.log(state.identityViewAuthorityRelationsData,'身份和视图')
        deWeight(state.existingViewValue)
        // console.log(state.existingViewValue,66666666)
        state.existingViewValue = [...new Set(state.existingViewValue)]
    },

    tableList(state, payload) {
        // state.data=payload.data
        state.total = payload.data.length
        state.data = pageList(payload.idx ? payload.pages = 1 : payload.pages, payload.data)
    }
}

const actions = {
    //展示用户数据
    async setUserData({ commit }, payload) {
        let result = await userData(payload);
        // console.log(result,'用户展示')
        commit('getUserData', result)
        // console.log(result,9999)
        return result
        // return new Promise(async (resolve,reject) => {
        //     let result = await userData(payload);
        //     commit('getUserData', result)
        //     console.log(result, '用户展示')
        //     resolve(result);
        // })  
    },
    //展示身份数据
    async setidentity({ commit }, payload) {
        let result = await identity(payload);
        // console.log(result, '身份')
        commit('getIdentity', result)
        return result
    },
    //展示api接口数据
    async setApiAuthority({ commit }, payload) {
        let result = await apiAuthority(payload);
        // console.log(result, '展示api')
        commit('getApiAuthoritys', result)
        return result
    },
    //展示身份和api权限关系
    async setIdentityApiAuthorityRelation({ commit }, payload) {
        let result = await identityApiAuthorityRelation(payload);
        // console.log(new Set(result.data), '展示身份和api')
        commit('getIdentityApiAuthorityRelations', result)
        return result
    },
    //获取视图权限
    async setViewAuthority({ commit }, payload) {
        
        let result = await viewAuthority(payload);
        // console.log(result, '展示视图权限')
        commit('getViewAuthoritys', result)
        return result
    },
    //展示身份和视图权限关系
    async setidentityViewAuthorityRelation({ commit }, payload) {
        let result = await identityViewAuthorityRelation(payload);
        // console.log(result, '展示身份和视图')
        commit('getIdentityViewAuthorityRelations', result)
        return result
    },
}
//展示第一页页面数据
function pageList(page, data) {
    //每页总数据打印

    //截取10条
    if (page === 1) {
        data = data.slice(0, 10)
    } else {
        data = data.slice((page - 1) * 10, page * 10)
    }
    return data
}

//循环
// function loop(data,payload){
//     for(let key in payolad){
//         data[key] = payload[key]
//     }
//     return data
// }

// //去重
function deWeight(data) {
    return data = [...new Set(data)]
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
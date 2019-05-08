import request from '@/utils/request'

// 添加用户
export function addUsers (data) {
  return request({
    url:'/user',
    method:'post',
    data
  })
}

// 更新用户信息(用户名，用户密码，用户身份)
export function updataUserInfo (data) {
  return request({
    url: '/user/user',
    method: 'put',
    data
  })
}

// 添加身份
export function addIdentity (data) {
  return request({
    url: '/user/identity/edit',
    method: 'get',
    params:{
      identity_text: data.identity_text
    }
  })
}

// 添加 api 接口权限
export function addAuthorityApi (data) {
  // console.log(data,'111111111')
  return request({
    url: '/user/authorityApi/edit',
    method: 'get',
    params:{
      ...data
    }
  })
}

// 添加视图权限
export function addAuthorityView (data) {
  return request({
    url: '/user/anthorityView/edit',
    method: 'get',
    params:{
      view_authority_text: data.view_authority_text,
      view_id: data.view_id
    }
  })
}

// 给身份设定 api 接口权限
export function identityApi(data){
  return request({
    url: '/user/setIdentityApi',
    method: 'post',
    data
  })
}

// 给身份设定视图权限
export function identityView(data){
  return request({
    url: '/user/setIdentityView',
    method: 'post',
    data
  })
}



//第二页面接口
//展示用户数据
export function userData() {
  return request({
    url: '/user/user',
    method: 'get',
  })
}

//展示身份数据
export function identity() {
  return request({
    url: '/user/identity',
    method: 'get',

  })
}

//展示 api 接口权限数据 
export function apiAuthority() {
  return request({
    url: '/user/api_authority',
    method: 'get',

  })
}

//展示身份和 api 权限关系 1
export function identityApiAuthorityRelation() {
  return request({
    url: '/user/identity_api_authority_relation',
    method: 'get',
  })
}

//获取视图权限数据 1
export function viewAuthority() {
  return request({
    url: '/user/view_authority',
    method: 'get',

  })
}

//展示身份和视图权限关系 1
export function identityViewAuthorityRelation() {
  return request({
    url: '/user/identity_view_authority_relation',
    method: 'get',

  })
}
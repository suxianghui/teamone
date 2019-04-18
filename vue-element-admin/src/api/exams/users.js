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
    data
  })
}

// 添加 api 接口权限
export function addAuthorityApi (data) {
  return request({
    url: '/user/anthorityApi/edit',
    method: 'get',
    data
  })
}

// 添加视图权限
export function addAuthorityView (data) {
  return request({
    url: '/user/anthorityApi/edit',
    method: 'get',
    data
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

//展示用户数据
export function userData() {
  return request({
    url: '/user/user',
    method: 'get',
    // data
  })
}

//展示身份数据
export function identity() {
  return request({
    url: '/user/identity',
    method: 'get',
    // data
  })
}

//展示 api 接口权限数据 
export function apiAuthority() {
  return request({
    url: '/user/api_authority',
    method: 'get',
    // data
  })
}

//展示身份和 api 权限关系 1
export function identityApiAuthorityRelation() {
  return request({
    url: '/user/identity_api_authority_relation',
    method: 'get',
    // data
  })
}

//获取视图权限数据 1
export function viewAuthority() {
  return request({
    url: '/user/view_authority',
    method: 'get',
    // data
  })
}

//展示身份和视图权限关系 1
export function identityViewAuthorityRelation() {
  return request({
    url: '/user/identity_view_authority_relation',
    method: 'get',
    // data
  })
}
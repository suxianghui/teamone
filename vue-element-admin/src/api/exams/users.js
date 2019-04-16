import request from '@/utils/requests'

// 添加用户
export const getAddUser = params => {
  return request.post('https://169.254.1.1:7001/user', params)
}

// 添加身份
// export let getAddUser = params => {
//     return request.post('https://169.254.1.1:7001/user', params)
// }

// //添加api接口数据
// export let getAddUser = params => {
//     return request.post('https://169.254.1.1:7001/user', params)
// }

// //添加视图权限
// export let getAddUser = params => {
//     return request.post('https://169.254.1.1:7001/user', params)
// }

// //给身份设定api接口权限
// export let getAddUser = params => {
//     return request.post('https://169.254.1.1:7001/user', params)
// }

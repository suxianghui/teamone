import request from '@/utils/request'

//批改试卷
export function examination(data) {
  return request({
    url: '/exam/student',
    method: 'GET',
    data
  })
}

// 获取学生试卷详情
export function studentExaminationPapers(data) {
  return request({
    url: '/exam/student/t27znv-gu7azm-qpq9ai-laaf9m',
    method: 'PUT',
    data
  })
}

//获取学生试卷列表
// export function studentPapers(params) {
//   return request({
//     url: '/exam/student',
//     method: 'get',
//     params
//   })
// }

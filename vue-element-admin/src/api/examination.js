import request from '@/utils/request'

//获取学生试卷列表
export function examination(params) {
  // return request.get('/exam/student',data)
  return request({
    url: '/exam/student',
    method: 'GET',
    params
  })
}

// 获取学生试卷详情
export function studentExaminationPapers(data) {
  return request({
    url: '/exam/student/4edl4i-k0rr7a-b3yna-f87a9w',
    method: 'GET',
    data
  })
}

//批卷
export function studentPapers(data) {
  return request({
    url: '/manger/grade',
    method: 'GET',
    params:data
  })
}
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
    url: '/exam/student/t27znv-gu7azm-qpq9ai-laaf9m',
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
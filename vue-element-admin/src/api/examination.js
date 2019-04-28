import request from '@/utils/request'

//获取学生列表
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
    url: '/exam/student/' + data.exam_student_id,
    method: 'GET',
    data
  })
}

//批卷班级列表
export function studentPapers() {
  return request({
    url: '/manger/grade',
    method: 'GET'
  })
}

//批卷
export function studentpis(data) {
  return request({
    url: '/exam/student/' + data.exam_student_id,
    method: 'PUT',
    data
  })
}
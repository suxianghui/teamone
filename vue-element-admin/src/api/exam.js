
import request from '@/utils/request'

// 获取所有的考试类型
export const examType = () => {
  return request({
    url: '/exam/examType',
    method: 'GET'
  })
}

// 获取所有的课程
export const examSubject = () => {
  return request({
    url: '/exam/subject',
    method: 'GET'
  })
}

// 创建试卷
export const submitExam = params => {
  console.log(params,'params')
  return request({
    url: '/exam/exam',
    method: 'POST',
    data: params
  })
}

// 获取试卷列表
export const examList = (query) => {
  return request({
    url: '/exam/exam',
    method: 'GET'
  })
}

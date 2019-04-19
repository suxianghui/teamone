
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
  return request({
    url: '/exam/exam',
    method: 'POST',
    data: params
  })
}

// 删除试卷
export const deleteExam = params => {
  return request({
    url: '/exam/exam/w5tcy-g2dts',
    method: 'DELETE'
  })
}

// 获取试题列表
export function renewal(str, data) {
  return request({
    url: '/exam/exam' + '/' + str,
    method: 'PUT',
    data
  })
}

// 获取试卷列表
export const examList = () => {
  return request({
    url: '/exam/exam',
    method: 'GET'
  })
}

// 获取详情页列表
export function detailData(str) {
  return request({
    url: '/exam/exam' + '/' + str,
    method: 'GET'
  })
}



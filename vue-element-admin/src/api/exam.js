
import request from '@/utils/request'

// 创建试卷
export const submitExam = query => {
  return request({
    url: '/exam/exam',
    method: 'POST',
    params: query
  })
}

// 获取试卷列表
export const examList = () => {
  return request({
    url: '/exam/exam',
    method: 'GET'
  })
}

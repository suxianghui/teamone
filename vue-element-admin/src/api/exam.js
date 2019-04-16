
import request from '@/utils/request'

export const submitExam = query => {
  return request({
    url: '/exam/exam',
    method: 'get',
    params: query
  })
}

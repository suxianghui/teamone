
import request from '@/utils/request'

export let fetchList = query => {
  return request({
    url: '/exam/exam',
    method: 'get',
    params: query
  })
}
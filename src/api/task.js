import http from '../http/ajax'

export function postData(params) {
    return http({
      url: '/xhr-data',
      method: 'post',
      params
    })
}
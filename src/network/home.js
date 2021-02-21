/* 存放首页的相关网络请求函数*/
import {request} from './request'

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}
import axios from 'axios'
import JSONbig from 'json-bigint'

// 创建个axios实例 用实例发送请求
const instance = axios.create({
  timeout: 3000,
  baseURL: 'http://ttapi.research.itcast.cn'
})

// transformResponse是在响应拦截器前调用
instance.defaults.transformResponse = [function (result) {
  try {
    //   数据可能不是标准JSON，因此会导致JSONbig.parse(result) 转换失败 报错
    return JSONbig.parse(result)
  } catch (err) {
    //   转换失败的数据直接原样返回
    return result
  }
}]

instance.interceptors.request.use(function (config) {
  return config
}, function (err) {
  return Promise.reject(err)
})

instance.interceptors.response.use(function (response) {
  return response.data.data || response.data
//   return response.data.data ? response.data.data : response.data
}, function (err) {
  return Promise.reject(err)
})

export default instance

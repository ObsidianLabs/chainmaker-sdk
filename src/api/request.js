import axios from 'axios'

//创建axios实例
var instance = axios.create({
  baseURL: '',
  withCredentials: true
})

//设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/json'

//请求拦截器，每次请求如果token存在则在请求头中携带token
instance.interceptors.request.use(
  config=>{
    return config
  },error =>Promise.error(error)
)

//响应拦截器
instance.interceptors.response.use(
  res=>{
    return Promise.resolve(res.data)
  },
  error => {
    return Promise.reject(error);
  })

  /* 统一封装get请求 */
export const get = (url, params, config = {}) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'get',
      url,
      params,
      ...config
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}

/* 统一封装post请求  */
export const post = (url, data, config = {}) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'post',
      url,
      data,
      ...config
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}

import axios from 'axios'


export function request(config){
  const instance = axios.create({
    baseURL:'http://152.136.185.210:8000/api/h8',
    timeout:5000
  })
//拦截器
  instance.interceptors.request.use(config=>{
    return config
  },err=>{
    return err
  })
  //响应式拦截
  instance.interceptors.response.use(res=>{
    return res.data
  },err=>{
    return err
  })

  return instance(config)
}
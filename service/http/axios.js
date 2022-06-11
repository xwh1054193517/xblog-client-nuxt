import Vue from 'vue'
import axios from 'axios'
import Config from '~/config/index'
// 定义axios的配置
const config = {
    baseURL: Config.baseUrl,
    crossDomain: true,
    timeout: 5000,
    validateStatus(status) {
        return status >= 200 && status < 500
    }
}

const myaxios = axios.create(config)

// 请求拦截器 发送请求之前需要做的事情
myaxios.interceptors.request.use(cfg => {
    const reqConfig = {...cfg }

    //没有携带URL
    if (!reqConfig.url) {
        throw new Error({
            message: 'no url'
        })
    }

    //没有指定方法默认用get
    if (!reqConfig.method) {
        reqConfig.method = 'get'
    }

    //防止字段大写
    reqConfig.method = reqConfig.method.toLowerCase()

    //防止GET POST错误传参
    if (reqConfig.method === 'get') {
        if (!reqConfig.params) {
            reqConfig.params = reqConfig.data || {}
        }
    } else if (reqConfig.method === 'post') {
        if (!reqConfig.data) {
            reqConfig.data = reqConfig.params || {}
        }
    }


    return reqConfig
}, error => {
    Promise.reject(error)
})


// 相应拦截器
myaxios.interceptors.response.use(async(res) => {
    if (res.status.toString().charAt(0) === '2') {
        return res.data
    }

}, error => {
    console.log(error)
})


export function get(url, params = {}) {
    return myaxios({
        method: 'get',
        url,
        params
    })
}
export function post(url, data = {}, params = {}) {
    return myaxios({
        method: 'post',
        url,
        data,
        params,
    })
}
export function put(url, data = {}, params = {}) {
    return myaxios({
        method: 'put',
        url,
        data,
        params,

    })
}
export function _delete(url, params = {}) {
    return myaxios({
        method: 'delete',
        url,
        params
    })
}

// 将axios挂载到Vue的原型方法中
Vue.axios = myaxios

export default myaxios
//1.发送请求的时候，如果有token，需要附带到请求头中
//2.响应的时候，如果有token，保存token到本地
//3.响应的时候，如果消息码是403，(1.没有token 2.token失效)，在本地删除token
import axios from 'axios';
import { Message } from 'element-ui'

const BASEURL = process.env.NODE_ENV === 'production' ? "" : '/api';

let instance = axios.create({
    baseURL: BASEURL,
    timeout: 50000
});

// 可以使用 validateStatus 配置选项定义一个自定义 HTTP 状态码的错误范围。
// instance.defaults.validateStatus = function (status) {
//     return status > 200 && status < 500;
// }
//请求拦截器
instance.interceptors.request.use(request => {
    //1.发送请求的时候，如果有token，需要附带到请求头中
    // let token = localStorage.getItem('token');
    // if (token) {
    //     request.headers.authorization = 'bearer ' + token;
    // }
    let reg = /^\/passport/
    let result = reg.test(request.url)
    if (!result && request.method==='get') {
        //不是登录相关接口并且GET请求，都在请求中携带appkey
        request.params={
            ...request.params,
            appkey:"lzx001_1619352618522"
        }
    }else{
        //不是登录相关接口post请求，都在请求中携带appkey
        request.data={
            ...request.data,
            appkey:"lzx001_1619352618522"
        }
    }
    return request;
}, err => {
    console.log('封装axios错误打印', err)
    return Promise.reject(err);
})

//响应拦截器
instance.interceptors.response.use(resp => {
    //2.响应的时候，如果有token，保存token到本地

    // console.log('响应打印',resp);
    if (resp.headers.authorization) {
        localStorage.setItem('token', resp.headers.authorization)
    }
    //响应码如果不是0,做弹框的处理
    // if (resp.data.code != 0) {
    //     let data = resp.data;
    //     // Message.error(data.message);
    //     return Promise.reject(data);
    // }

    return resp.data;
}, err => {
    //3.响应的时候，如果消息码是403，(1.没有token 2.token失效)，在本地删除token
    if (err.response.status == 403) {
        localStorage.removeItem('token');
    }
    if (err.response.status == 500) {
        Message({
            message: err.response.data.msg,//本地接口   
            type: "warning"
        })
    }
    return Promise.reject(err)
})
export default instance;
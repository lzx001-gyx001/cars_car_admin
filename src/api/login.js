//撸码前端接口

import service from '@/service/request'

//获取注册/登录的验证码接口
export function getCode(data) {
    return service.request({
        method: "POST",
        url: "/passport/getCode",
        data
    })
}

//注册接口
export function reg(data) {
    return service.request({
        method: "POST",
        url: `/passport/logon`,
        data
    })
}

//登录接口
export function login(data) {
    return service.request({
        method: "POST",
        url: `/passport/login`,
        data
    })
}

//找回密码
export function findBack(data) {
    return service.request({
        method: "POST",
        url: "/passport/findBack",
        data
    })
}

//本地服务器登录
export function localLogin(data){
    return service.request({
        method:"post",
        url:"http://www.localhost:5008/api/login",
        data
    })
}
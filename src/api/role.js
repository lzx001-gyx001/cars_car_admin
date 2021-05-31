
import service from '../service/request'
// 商品列表页API

/**
 * 获取商品的类目
 * @param {*} params 
 * @returns 
 */
export function getRole(data) {
    return service.request({
        method: "post",
        url: "http://www.localhost:5008/api/getRole",
        data
    })
}

//本地服务器登录
export function localLogin(data) {
    return service.request({
        method: "post",
        url: "http://www.localhost:5008/api/login",
        data
    })
}
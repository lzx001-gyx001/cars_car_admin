//ev的登录接口

import request from './request';


export function reg(data){
    return request({
        method:"POST",
        url:"/api/getSms",
        data
    })
}
/**
 * 登录
 * @param {*} userInfo {loginId,loginPWD}
 * @returns 
 */
export async function login(userInfo) {
    const res = await request({
        method: 'post',
        url: `/api/login`,
        data: userInfo
    });
    return res; //.post('api/login', { loginId, loginPWD })
}

/**
 * 注销
 */
export function loginOut(){
    localStorage.removeItem('token');
}

/**
 * 拿token换用户信息
 * @returns 用户信息，如果是null则没有登录
 */
export async function whoAmI(){
    const res = await request({
        method:'get',
        url:'/login/whoAmI',
    })
    return res;
}
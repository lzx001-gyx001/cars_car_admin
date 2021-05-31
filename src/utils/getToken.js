import cookie from 'js-cookie'

export function setCookie(info) {
    if (info) {
        for (let key in info) {
            cookie.set(key, info[key])
        }
        return true;
    }
    return false;
}

export function getUserInfoCookie() {
    return {
        username: cookie.get("username"),
        email: cookie.get("email"),
        role: cookie.get("role"),
        appkey: cookie.get("appkey"),
        btnPermission:cookie.get("btnPermission")
    }
}
export function removeCookie(){
    cookie.set("username",'')
    cookie.set("email",'')
    cookie.set("role",'')
    cookie.set("appkey",'')
    cookie.set("btnPermission",'')
}
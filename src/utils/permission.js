//工具方法 动态路由
import { asyncRouterMap, defaultRouterMap } from '@/router/index'
import store from '@/store/index'

/***
 * 根据角色返回路由
 */
export default function getMenu() {
    let role = store.state.permission.role ;
    console.log("role",role);
    let roleRouterNameList = getRouter(role);
    let filterAsyncRouter = asyncRouterMap.filter(item => {
        if (roleRouterNameList.includes(item.meta.system)) {
            return item
        }
    })
    // let filterDefault = defaultRouterMap.filter(item =>!item.hidden)
    // console.log(filterAsyncRouter.concat(defaultRouterMap));
    return filterAsyncRouter.concat(defaultRouterMap)  //.concat(filterDefault)
}

/**
 * 根据角色返回路由名字的数组
 * @param {string} role 角色
 */
function getRouter(role) {
    if (!role) {
        return
    }
    if (role == "admin") {
        return ['info', "user",'goods']
    } else if (role == "customer") {
        return ["info",'goods']
    }
}
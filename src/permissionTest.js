//路由权限导航
import router from './router/index.js'
import store from './store/index'
import getMenu from './utils/permission.js'
import { getUserInfoCookie } from "@/utils/getToken.js"
import { resetRouter, defaultRouterMap } from './router/index'
let isFirst = true;
router.beforeEach(async (to, from, next) => {
    if (to.path === '/login') {
        console.log("退出系统");
        store.dispatch('user/logOut')//删除token
        localStorage.removeItem('token')
        isFirst = true
        next()
        return;
    }
    let token = getUserInfoCookie().email;
    if (!token) return next('/login')
    if (!isFirst) {
        //不是第一次进入,且有token
        console.log("不是第一次");
        return next()
    }
    console.log("第一次进入", token);
    isFirst = false;
    store.dispatch('permission/actionsGetRole').then(() => {
        store.dispatch("permission/createRouter").then(async (routerList) => {
            router.options.routes = routerList.concat(defaultRouterMap)
            // resetRouter()
            router.addRoutes(routerList)
            return next({ ...to, replace: true })
        })
    }).catch(err => {
        console.log(err);
        // next("/login")
    })
})


    // if (token) {
    //     //有token
    //     if (isFirst) {
    //         //第一次进入,设置路由
    //         console.log("第一次进入");
    //         isFirst = false;
    //         store.dispatch('permission/actionsGetRole').then(() => {
    //             store.dispatch("permission/createRouter").then(async (routerList) => {
    //                 router.options.routes = routerList.concat(defaultRouterMap)
    //                 // resetRouter()
    //                 router.addRoutes(routerList)

    //                 return next({ ...to, replace: true })
    //             })
    //         }).catch(err => {
    //             console.log(err);
    //             // next("/login")
    //         })
    //     } else {
    //         console.log("不是第一次");
    //         return next()
    //     }

    // } else {
    //     //没有token
    //     return next('/login')
    // }



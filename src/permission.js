//路由权限导航
import router from './router/index.js'
import store from './store/index'
import getMenu from './utils/permission.js'
import { getUserInfoCookie } from "@/utils/getToken.js"
import { resetRouter } from './router/index'
let isFirst = true;
router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        isFirst = true
        return next()
    }
    console.log("isFirst", isFirst);
    if (!isFirst) {
        console.log("不是第一次")
        return next()
    }
    console.log("第一次");
    isFirst = false
    store.dispatch('permission/actionsGetRole').then(() => {
        store.dispatch("permission/createRouter").then(async (routerList) => {
            router.options.routes = routerList
            // resetRouter()
            router.addRoutes(routerList)

            return next({ ...to, replace: true })
        })
    })
})
// let isFirst = true;
// router.beforeEach(async (to, from, next) => {
//     // let whiteList = ['/login'];
//     // let token = localStorage.getItem('token') || '';
//     let token = getUserInfoCookie().email
//     console.log("token", token);
//     console.log("to", to);
//     if (token) {
//         //有token
//         if (to.path === '/login') {
//             //退出系统
//             console.log("退出系统");
//             store.dispatch('user/logOut')//删除token
//             localStorage.removeItem('token')
//             next();
//         } else {
//             //获取角色
//             //动态获取路由权限
//             if (!store.state.permission.role) {
//                 console.log("第一次进入");
//                 store.dispatch('permission/actionsGetRole').then(() => {
//                     store.dispatch("permission/createRouter").then(async (routerList) => {
//                         router.options.routes = routerList
//                         // resetRouter()
//                         router.addRoutes(routerList)

//                         next({ ...to, replace: true })
//                     })
//                 }).catch(err => {
//                     console.log(err);
//                     // next("/login")
//                 })

//             } else {
//                 console.log("不是第一次");
//                 next()
//             }
//         }
//     } else {
//         //没有token
//         console.log('没token');
//         if (to.path === '/login') {//whiteList.indexOf(to.path) !== -1
//             next()
//         } else {
//             next('/login')
//         }
//     }
// })


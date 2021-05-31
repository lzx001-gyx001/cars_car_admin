// 仓库
import store from '../index'
import { getRole } from '@/api/role'
import { asyncRouterMap, defaultRouterMap, resetRouter } from '@/router'
const state = {
    role: '',
    addRouter: [],
    allRouter: defaultRouterMap
}
const mutations = {
    setRole: (state, payload) => {
        state.role = payload
    },
    setRouter(state, payload) {
        state.addRouter = payload
        state.allRouter = [...defaultRouterMap, ...payload]
    }


}
const actions = {
    actionsGetRole({ commit },) {
        let email = store.state.user.userInfo.email
        return new Promise((resolve, reject) => {
            getRole({ email }).then(res => {
                // console.log(res);
                commit("setRole", res.data.role)
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    },
    createRouter({ commit }) {
        return new Promise((resolve, reject) => {
            let role = state.role;
            let addRouter = getMenu(role)
            commit("setRouter", addRouter)
            resolve(addRouter)
        })
    }
}
export default {

    namespaced: true, //开启命名空间
    state,
    mutations,
    actions,

}


function getMenu(role) {
    // let role = store.state.permission.role;
    console.log("role", role);
    let roleRouterNameList = getRouter(role);
    let filterAsyncRouter = asyncRouterMap.filter(item => {
        if (roleRouterNameList.includes(item.meta.system)) {
            return item
        }
        return false
    })
    return filterAsyncRouter; //.concat(defaultRouterMap)  //.concat(filterDefault)
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
        return ['info', "user", 'goods']
    } else if (role == "customer") {
        return ["info", 'goods']
    }
}

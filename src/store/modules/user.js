import { login } from '@/api/login.js';
import { setCookie, getUserInfoCookie, removeCookie } from '@/utils/getToken'
import { localLogin } from '../../api/login';//本地登录接口


const state = {
    userInfo: getUserInfoCookie() || {}, //用户信息
    isLoading: false, //是否正在加载,
    BtnPermList: getUserInfoCookie().btnPermission||[],
    // roles:[]
};
const getters = {
    BtnPermList: () => {
        let map = []
        JSON.parse(state.BtnPermList).forEach(item => {
            map.push(...item.permission)
        })
        return Array.from(new Set(map));
    }
}
const mutations = {
    setUserInfo(state, payload) {
        state.userInfo.email = payload.email || '';
        state.userInfo.username = payload.username || '';
        state.userInfo.appkey = payload.appkey || '';
        // state.userInfo.role = payload.role || '';
        state.userInfo.btnPermission = payload.btnPermission
        setCookie(payload);
    },
    setIsLoading(state, payload) {
        state.isLoading = payload
    },
    removeUserInfo(state) {
        state.userInfo.email = ''
        state.userInfo.username = ''
        state.userInfo.appkey = ''
        state.userInfo.role = ''
        state.userInfo.btnPermission = ''
        removeCookie()
    }
};
const actions = {
    //登录渡一接口
    async login({ commit }, { email, password }) {
        return new Promise(async (resolve, reject) => {
            commit("setIsLoading", true) //正在加载中
            try {
                const resp = await login({
                    email,
                    password,
                });
                console.log("*****登录打印*****", resp);
                commit("setUserInfo", resp.data);
                commit("setIsLoading", false);
                resolve(resp)
            } catch (error) {
                commit("setIsLoading", false);
                reject(error)
            }
        })

    },
    //登录本地接口
    async localLoginAction({ commit }, { email, password }) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await localLogin({
                    email,
                    password
                });
                if (res.data) {
                    console.log(res.data);
                    commit("setUserInfo", res.data)//本地接口
                    resolve(res)
                } else {
                    reject(res)
                }
            } catch (error) {
                reject(error)
            }
        })
    },
    //登出
    logOut({ commit }) {
        commit("removeUserInfo")
    },
};

export default {
    namespaced: true, //开启命名空间
    state,
    mutations,
    actions,
    getters
}
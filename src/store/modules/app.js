const state = {
    isCollapse:false||JSON.parse(sessionStorage.getItem("isCollapse")) //是否折叠
};
const mutations = {
    setIsCollapse(state) {
        state.isCollapse = !state.isCollapse;
        sessionStorage.setItem("isCollapse", JSON.stringify(state.isCollapse))
    },
};
const getters = {
    isCollapse: state => state.isCollapse
}

export default {
    namespaced: true, //开启命名空间
    state,
    mutations
}
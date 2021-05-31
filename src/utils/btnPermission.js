//判断按钮的权限
import store from '../store'


export default {
    install(Vue) {
        Vue.prototype.btnPermission = function (btnName) {
            let btnList = store.getters['user/BtnPermList']
            console.log(btnList);
            return btnList.includes(btnName)
        }
    }
}
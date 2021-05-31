import Vue from 'vue';
// import { VeLine } from 'v-charts-v2/lib/index.esm'
// import VCharts from 'v-charts-v2'
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";
import "./styles/main.scss"
import "./icons";//svg图标组件
// import './permission';//路由权限
import './permissionTest'
import btnPermission from './utils/btnPermission'
import './utils/debounce';//全局注册 防抖/节流 指令
// import say from "./utils/test"; 自己写插件
// Vue.use(say)
// import Throttle from '@/components/throttle'
// Vue.component('Throttle',Throttle)//注册全局防抖节流组件
Vue.use(btnPermission)
Vue.use(ElementUI);
// Vue.use(VCharts)
// Vue.component(VeLine.name, VeLine)


// store.dispatch("loginUser/whoAmI"); //在网站被访问时,就用token取换取用户的身份;

Vue.config.productionTip = false




//runtime模式运行
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')






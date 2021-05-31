import Vue from 'vue'
import svgIcon from './svgIcon'

Vue.component('svg-icon', svgIcon);
/**
 * 返回一个函数，该函数执行会返回一个vue文件，module;
 * //require.context执行后返回一个函数，有三个属性 即 resolve，keys, id
    1.resolve {Function} 接受一个参数request,request为test文件夹下面匹配文件的相对路径,
        返回这个匹配文件相对于整个工程的相对路径
    2.keys {Function} -返回匹配成功模块的数组
    3.id {String} -执行环境上下文模块的模块id
 */
const req = require.context("./svg", false, /\.svg$/);

/**
 * 
 * @param {*} requireContext require.context返回的函数
 * @returns 返回一个vue文件的数组
 */
const requireAll = (requireContext) => {
    // console.log(requireContext.keys().map(requireContext));
    //map() 方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。
    return requireContext.keys().map(requireContext);
}
requireAll(req);


// 动态加载views中所有的路由文件
// const files = require.context('@/views', true, /\.vue$/);
// const routes = files.keys().map(key => {
//   const page = require('@/views' + key.replace('.', ''));
//   return page.default;
// })
/**
 * 把全部组件挂载到全局
 */
// fileList.forEach(item => {
//     console.log('module', item);
//     Vue.component(`${item.default.name}`, item.default)
// });
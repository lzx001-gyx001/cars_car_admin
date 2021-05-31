
let say = {};
say.install = (Vue, options) => {
    Vue.prototype.say = function () {
        console.log('************');
    }
}



export default say;
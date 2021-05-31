import Vue from 'vue'
const debounce = function (fn, wait = 50, isDebounce, ctx) {
    let timer = null, //定时器
        lastCall = 0; //时间戳
    return function (...params) {
        if (isDebounce) {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                fn.apply(ctx, params);
            }, wait);
        } else {
            const now = new Date().getTime();
            if (now - lastCall < wait) {
                return;
            }
            lastCall = now;
            console.log(lastCall);
            fn.apply(ctx, params);
        }
    };
};
Vue.directive('debounce', {
    bind(el, { value }, vnode) {
        const [target, time, isDebounce,] = value
        const debounced = debounce(target, time, isDebounce, vnode)
        el.addEventListener('click', debounced)
        el._debounced = debounced
    },
    destroy(el) {
        el.removeEventListener('click', el._debounced)
    }
})

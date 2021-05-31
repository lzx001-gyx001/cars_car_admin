<!-- 防抖 节流 抽象函数 -->

<script>
/**
 *
 */
const throttle = function (fn, wait = 50, isDebounce, ctx) {
  let timer = null, //定时器
    lastCall = 0; //时间戳
  return function (...params) {
    if (isDebounce) {
      if (timer) {
        console.log(1);
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        console.log(1);
        fn.apply(ctx, params);
      }, wait);
    } else {
      const now = new Date().getTime();
      if (now - lastCall < wait) {
        return;
      }
      lastCall = now;
      fn.apply(ctx, params);
    }
  };
};
export default {
  name: "throttle",
  abstract: true,
  props: {
    isDebounce: {
      type: Boolean,
      default: false,
    },
    time: Number,
    events: String,
  },
  created() {
    this.eventKeys = this.events.split(",");
    this.originMap = {};
    this.throttledMap = {};
  },
//   render() {
//     let vnode = this.$slots.default[0];
//     this.eventKeys.forEach((key) => {
//       const target = vnode.data.on[key]; //子节点身上的事件);
//       if (target === this.originMap[key] && this.throttledMap[key]) {
//         //子节点身上有事件，且 originMap上有记载，
//         //则该事件的函数就是节流防抖函数
//         vnode.data.on[key] = this.throttledMap[key];
//       } else if (target) {
//         //子节点身上没有事件,
//         //把该事件记录到originMap中，
//         //把该事件用防抖节流函数处理一次并返回该节点
//         this.originMap[key] = target;
//         this.throttledMap[key] = throttle(
//           target,
//           this.time,
//           this.isDebounce,
//           vnode
//         );
//         vnode.data.on[key] = this.throttledMap[key];
//       }
//     });
//     return vnode;
//   },
};
</script>

<style>
</style>
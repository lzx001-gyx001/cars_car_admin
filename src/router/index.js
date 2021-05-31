import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '@/views/login'
import Layout from '@/views/layout'


Vue.use(VueRouter)
//解决router版本过高,重复点击路由控制台报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


//默认路由
export const defaultRouterMap = [
  {
    path: '/',
    name: 'Home',
    // component: () => import("@/views/layout/index.vue"),
    // component: () => import('@/views/login'),
    redirect: {
      path: "/login",
    },
    meta: {
      name: "主页",
      hidden: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    // hidden: true,
    meta: {
      name: "登录",
      hidden: true,
    },
    component: () => import('@/views/login')
  },
  // 控制台
  {
    path: "/control",
    name: "Control",
    component: () => import("@/views/layout/index.vue"),
    redirect: {
      path: "/index"
    },
    meta: {
      name: "控制台"
    },
    children: [
      {
        path: "/index",
        name: "Index",
        component: () => import("@/views/control/index.vue"),
        meta: {
          name: "控制台"
        }
      }
    ]
  },
  {
    path: "/404",
    name: "404",
    meta: {
      name: "404",
      hidden: true
    },
    // hidden: true,
    component: () => import("@/views/layout/index"),
    children: [
      {
        path: "/notFound",
        meta: {
          name: "notFound",
          hidden: true
        },
        component: () => import("@/views/notFound/index.vue")
      }
    ]
  },
  {
    path: "*",
    //  hidden: true,
    redirect: "/notFound",
    meta: {
      hidden: true,
    }
  }
]

//动态路由（可从后端获取）
export const asyncRouterMap = [
  //信息管理
  {
    path: "/info",
    name: "Info",
    component: () => import("@/views/layout/index.vue"),
    // redirect: "/user",
    meta: {
      system: "info",
      name: "信息管理"
    },
    children: [
      {
        path: "/infoIndex",
        name: "InfoIndex",
        component: () => import("@/views/info/index.vue"),
        meta: {
          name: "信息列表"
        }
      },
      {
        path: "/infoCategory",
        name: "InfoCategory",
        component: () => import("@/views/info/category.vue"),
        meta: {
          name: "信息分类"
        }
      },
      {
        path: "/infoDetail",
        name: "InfoDetail",
        hidden: true,
        component: () => import("@/views/info/detail.vue"),
        meta: {
          name: "信息详情"
        }
      }
    ]
  },
  //用户
  {
    path: "/user",
    name: "User",
    component: () => import("@/views/layout/index.vue"),
    // redirect: "/user",
    meta: {
      name: "用户管理",
      system: "user"
    },
    children: [
      {
        path: "/userIndex",
        name: "UserIndex",
        component: () => import("@/views/user/index.vue"),
        meta: {
          name: "用户列表"
        }
      }
    ]
  },
  //商品
  {
    path: "/goods",
    name: "Goods",
    component: () => import("@/views/layout/index.vue"),
    // redirect: "/user",
    meta: {
      system: "goods",
      name: "商品管理",

    },
    children: [
      {
        path: "/goodsList",
        name: "GoodsList",
        component: () => import("@/views/goods/index.vue"),
        meta: {
          name: "商品列表",
          keepAlive: true
        }
      },
      {
        path: "/goodsCategory",
        name: "GoodsCategory",
        component: () => import("@/views/goods/category.vue"),
        meta: {
          name: "商品类目",
          keepAlive: true
        }
      },
      {
        path: "/goodsAdd",
        name: "GoodsAdd",
        hidden: true,
        component: () => import("@/views/goods/add"),
        meta: {
          name: "商品新增"
        }
      }
    ]
  },
]




//创建路由
const createRouter = () => {
  return new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: defaultRouterMap
  })
}
const router = createRouter()
// 重置路由
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router

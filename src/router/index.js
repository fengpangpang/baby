import Vue from "vue";
import VueRouter from "vue-router";
import { Toast  } from 'vant'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "/",
        component: () => import("../views/Index.vue"),
      },
      {
        path: "/index",
        component: () => import("../views/Index.vue"),
      },
      {
        path: "/classify",
        component: () => import("../views/Classify.vue"),
      },
      {
        path: "/shopping",
        component: () => import("../views/Shopping.vue"),
      },
      {
        path: "/mine",
        component: () => import("../views/Mine.vue"),
      },
      {
        path: "*",
        component: () => import("../views/NotFound.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

//全局前置守卫
// 挂载路由守卫
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : "宝宝商城";
  // 判断页面是否需要登录
  if (to.meta.needLogin) {
    // 说明这个页面需要登录
    if (localStorage.getItem("token")) {
      next();
    } else {
      Toast("您还没有登录，请先登录");
      next("/login");
    }
  } else {
    next();
  }
});

export default router;

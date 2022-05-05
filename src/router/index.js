import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../views/NotFound.vue";
import Home from "../views/Home.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "Trang chủ",
    },
    component: Home,
  },
  {
    path: "*",
    name: NotFound,
    meta: {
      title: "404",
    },
    component: () => import("../views/NotFound.vue"),
  },
];
const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title =
      to.meta.title + " | What3ver Boutique - Thương hiệu thời trang nữ";
  }
});

export default router;

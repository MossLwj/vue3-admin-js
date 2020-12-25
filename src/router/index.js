import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("../views/account/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/account/Register.vue")
  },
  {
    path: "/forget",
    name: "Forget",
    component: () => import("../views/account/Forget.vue")
  },
  {
    path: "/index",
    name: "Index",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/layout/Index.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Login",
    hidden: true,
    component: () => import("../views/account/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    hidden: true,
    component: () => import("../views/account/Register.vue")
  },
  {
    path: "/forget",
    name: "Forget",
    hidden: true,
    component: () => import("../views/account/Forget.vue")
  },
  {
    path: "/index",
    name: "Index",
    meta: {
      title: "首页"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/layout/Index.vue")
  },
  {
    path: "/adminIndex",
    name: "AdminIndex",
    meta: {
      title: "管理总台"
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/layout/Index.vue"),
    children: [
      {
        path: "/role",
        name: "Role",
        meta: {
          title: "角色管理"
        },
        component: () => import("../views/admin/Role.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;

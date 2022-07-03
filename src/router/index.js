import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/index.vue"),
  },

  {
    path: "/",
    name: "layout",
    component: () => import("../layout/index.vue"),
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/home/index.vue"),
      },
      {
        path: "/books",
        name: "books",
        component: () => import("../views/books/index.vue"),
      },
      {
        path: "/friends",
        name: "friends",
        component: () => import("../views/friends/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/plants",
    name: "plants",
    // route level code-splitting
    // this generates a separate chunk (plants.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "plants" */ "../views/PlantsView.vue"),
  },
  {
    path: "/garden",
    name: "garden",
    // route level code-splitting
    // this generates a separate chunk (garden.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "garden" */ "../views/MyGardenView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

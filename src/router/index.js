import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/students",
    name: "students",
    component: () => import("@/views/student/StudentList.vue"),
  },
  {
    path: "/module",
    name: "module",
    component: () => import("@/views/Module.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;

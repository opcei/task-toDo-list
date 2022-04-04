import { createRouter, createWebHistory } from "vue-router";

import emptyPage from "@/views/emptyPage.vue";
import toDoList from "@/views/ToDo.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/empty", name: "Empty", component: emptyPage },
    { path: "/toDoList", name: "ToDo", component: toDoList },
  ],
});

export default router;

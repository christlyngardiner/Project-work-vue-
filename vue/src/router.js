import { createRouter, createWebHistory } from "vue-router";
import Repositories from "./components/Repositories.vue";
import Repository from "./components/Repository.vue";
import NotFoundComponent from "./components/NotFoundComponent.vue";

const routes = [
  {
    path: "/",
    name: "Repositories",
    component: Repositories,
  },
  {
    path: "/repository/:name",
    name: "Repository",
    component: Repository,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFoundComponent",
    component: NotFoundComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
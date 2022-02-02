import Vue from "vue";
import VueRouter from "vue-router";
import SingleBook from "../views/SingleBook.vue";
import Library from "../views/Library.vue";
import List from "../views/List.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/SingleBook/:id",
    name: "SingleBook",
    component: SingleBook,
  },
  {
    path: "/",
    name: "Library",
    component: Library,
  },
  {
    path: "/List",
    name: "List",
    component: List,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

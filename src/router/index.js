import Vue from "vue";
import VueRouter from "vue-router";
import AppHome from "../components/AppHome.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "AppHome",
    component: AppHome
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;

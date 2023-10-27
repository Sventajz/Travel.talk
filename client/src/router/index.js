import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import landing from "../components/LandingComponent.vue";
import login from "../components/LoginComponent.vue";
import postcomp from "../components/PostComponent.vue";
//import signup from "../components/Signup.vue";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: landing,
  },
  // {
  //   path: "/signup",
  //   name: "Signup",
  //   component: signup,
  // },
  {
    path: "/app",
    name: "app",
    component: App,
  },
  {
    path: "/login",
    name: "LoginComponent",
    component: login,
  },
  {
    path: "/post",
    name: "PostComponent",
    component: postcomp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;

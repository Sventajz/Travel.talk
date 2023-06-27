import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
<<<<<<< HEAD

const routes = [
  //   {
  //     path: "/",
  //     name: "App",
  //     component: () => import("../components/HelloWorld.vue"),
  //   },
=======
import landing from "../components/LandingComponent.vue";
import login from "../components/LoginComponent.vue";
import postcomp from "../components/PostComponent.vue";
import signup from "../components/Signup.vue";
const routes = [
  {
    path: "/",
    name: "Landing",
    component: landing,
  },
  {
    path: "/signup",
    name: "Signup",
    component: signup,
  },
>>>>>>> travel-test
  {
    path: "/app",
    name: "app",
    component: App,
  },
<<<<<<< HEAD
=======
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
>>>>>>> travel-test
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;

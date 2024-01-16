import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import welcome from "../components/WelcomeComponent.vue";
import signup from "../components/SignupComponent.vue";
import login from "../components/LoginComponent.vue";
import postcomp from "../components/PostComponent.vue";
import predictcomp from "../components/PredictComponent.vue";
//import signup from "../components/Signup.vue";

const routes = [
  {
    path: "/",
    name: "welcome",
    component: welcome,
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
  {
    path: "/signup",
    name: "Landing",
    component: signup,
  },
  {
    path: "/predict",
    name: "Predict",
    component: predictcomp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;

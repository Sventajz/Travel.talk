import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import hello from "./components/HelloWorld";
createApp(hello).use(router).use(App).mount("#app");

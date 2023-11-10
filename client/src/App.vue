<template>
  <title>Travel.talk</title>
  <NavComponent></NavComponent>
  <div class="router-wrapper">
    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import NavComponent from "./components/NavComponent.vue";

export default {
  name: "App",
  components: {
    NavComponent,
    // PostComponent,
    // AboutComponent
    // PostComponent,
    // AboutComponent
    methods: {
      forceRerender() {
        this.componentKey += 1;
      },
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap");

.my-toast {
  margin-top: 10%;
}

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #151516;
  height: 100vh;
  width: 100%;
}
html {
  -moz-box-sizing: border-box;
  overflow: hidden;
}

body {
  height: 100vh;
  margin: 0em;
  background: url("./assets/Wave.svg");
  background-size: cover;
  /* background-color: rgba(240, 229, 207, 255); */
}
.router-wrapper {
  height: 100%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
/* .slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s, transform 1s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-99%);
} */
</style>

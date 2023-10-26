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
elements.style {
  --backgroundClr: #f5f7f8;
  --buttonClr: #f4ce14;
  --contentClr: #495e57;
  --navClr: #495e57;
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
  width: 100vw;
}
html {
  -moz-box-sizing: border-box;
  overflow: hidden;
}

body {
  height: 100vh;
  margin: 0em;
  background-color: #2a4b3d;
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

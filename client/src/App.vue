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
// import AboutComponent from "./components/AboutComponent.vue";
import NavComponent from './components/NavComponent.vue';

// import PostComponent from "./components/PostComponent.vue";
// import hello from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    NavComponent
    // PostComponent,
    // AboutComponent
    ,
    // PostComponent,
    // AboutComponent
    methods: {
        forceRerender() {
            this.componentKey += 1;
        },
    },

}}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap");

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #151516;
  height: 100vh;
  background-color: #3c8086;
  margin: 0;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
html {
  -moz-box-sizing: border-box;
  overflow: hidden;
}

.mainContent {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: 500px 200px;
  gap: 10px;
}

.aboutComponent {
  grid-row-start: 2;
  grid-column-start: 1;
}

body {
  height: 100vh;
  margin: 0em;
  background-color: #3c8086 53%;
}

.mapContent {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  display: block;
  justify-content: center;
  margin-top: auto;
}

button {
  background-color: rgb(0, 0, 0);
  color: white;
  border-radius: 9px;
  height: 35px;
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

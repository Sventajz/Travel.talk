<template>
  <div>
    <title>Travel.talk</title>
    <div class="aboutContent"></div>
    <PostComponent />
  </div>
</template>

<script>
// import AboutComponent from "./components/AboutComponent.vue";

import PostComponent from "./components/PostComponent.vue";
// import hello from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    PostComponent,
    // AboutComponent,
  },
  data() {
    return {
      componentKey: 0,
    };
  },
  methods: {
    forceRerender() {
      this.componentKey += 1;
    },
  },
};
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
  background-color: #faf5f5;
  margin: 0;
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
  background-color: #faf5f5;
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
</style>

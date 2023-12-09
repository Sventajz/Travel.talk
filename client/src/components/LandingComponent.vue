<template>
  <div id="app">
    <NavComponent></NavComponent>
    <!-- this is where we setup the route for changing pages -->

    <div v-if="!['app'].includes($route.name)"></div>
    <!-- Logic for routing transition -->
    <div class="router-wrapper">
      <p>Hello</p>
      <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
          <component :is="Component" :key="$route.path"></component>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import NavComponent from "../components/NavComponent.vue"`;
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: { RouterView, NavComponent },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>

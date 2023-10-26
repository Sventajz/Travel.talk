<template>
  <div id="app">
    <!-- this is where we setup the route for changing pages -->
    <div v-if="!['app'].includes($route.name)">
      <!-- inside this div is the login form -->
      <div class="body-wrapper">
        <img src="../assets/wet.jpg" class="banner-img" alt="green" />
        <div class="landing-wrapper">
          <RouterLink to="/login">
            <button class="button-36">Log in!</button>
          </RouterLink>
          <RouterLink to="/signup">
            <button class="button-36">Sign up!</button>
          </RouterLink>
        </div>
      </div>
    </div>
    <!-- Logic for routing transition -->
  </div>
</template>

<script>
export default {
  name: "LandingComponent",
  props: {
    msg: String,
  },
  data() {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.body-wrapper {
  background-color: white;
  height: 500px;
  width: 600px;
}
.landing-wrapper {
  width: 100%;
}
.banner-img {
  object-fit: cover;
  width: 250px;
  height: 100%;
}
</style>

<template>
  <div id="app">
    <!-- this is where we setup the route for changing pages -->
    <div class="landing-class" v-if="!['app'].includes($route.name)">
      <!-- inside this div is the login form -->
      <div class="body-wrapper">
        <div class="banner-img">
          <div class="hover-wrapper">
            <div class="banner-overlay"><h1>Share your hidden gems!</h1></div>
            <img src="../assets/illu.jpg" class="image" alt="green" />
          </div>
        </div>
        <div class="landing-wrapper">
          <h3>Don't have an account?</h3>
          <RouterLink to="/signup">
            <button class="button-36">Sign up!</button>
          </RouterLink>
          <h3>You already have an account?</h3>
          <RouterLink to="/login">
            <button class="button-36">Log in!</button>
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
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");
.body-wrapper {
  background-color: rgba(58, 87, 65, 255);
  height: 75vh;
  width: 100%;
  color: White;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 2px rgba(1, 1, 1, 0.5);
}
.landing-wrapper {
  width: 100%;
}
.image {
  object-fit: cover;

  height: 100%;
  border-radius: 10px;
}
.hover-wrapper {
  transition: transform 0.5s;
}
.banner-img {
  height: 100%;
  position: relative;
  transition: transform 0.5s;
  overflow: hidden;
  width: 55%;
}

.hover-wrapper:hover {
  transform: scale(1.1);
}
.landing-class {
  width: 70%;
}

.banner-overlay {
  position: absolute;
  top: 200px;
  text-align: center;
  background-color: rgba(1, 1, 1, 0.479);
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Playfair Display", serif;
}
</style>

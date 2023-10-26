<template>
  <div id="app">
    <!-- this is where we setup the route for changing pages -->
    <div v-if="!['app'].includes($route.name)">
      <!-- inside this div is the login form -->
      <div class="body-wrapper">
        <div class="landing-wrapper">
          <img class="landing-logo" src="../assets/TravelLogo.svg" />
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
#app {
  height: 100%;
}
.landing-logo {
  height: 275px;
  width: 275px;
  padding-left: 25px;
  padding-top: 40px;
  margin-bottom: -40px;
}

.body-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 80vh;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.landing-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 60%;
  width: 600px;
  margin: auto;
  border-radius: 10px;
  background-color: #084c5e;
  box-shadow: 0.2em 0.2em 0.2em rgb(37, 37, 37);
}

.form-wrapper {
  display: flex;
  flex-direction: column;
  margin: auto;
}

.form-input {
  margin: 20px;
  height: 30px;
  width: 250px;
}

/* CSS */
.button-36 {
  background-color: rgb(251, 251, 125);
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #000000;
  cursor: pointer;
  flex-shrink: 0;
  font-size: 16px;
  font-weight: bold;
  height: 3rem;
  padding: 0 1.6rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all 0.5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin: 10px;
}

.button-36:hover {
  box-shadow: rgba(224, 223, 226, 0.5) 0 1px 30px;
  transition-duration: 0.1s;
}
</style>

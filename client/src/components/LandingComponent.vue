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
          <img src="../assets/travel-ver2.svg" class="svg-image" />
          <h3>Don't have an account?</h3>
          <div class="form-container">
            <form action="" class="form-wrapper">
              <input
                type="name"
                class="form-input"
                placeholder="username"
                v-model="name"
              />
              <input
                type="email"
                class="form-input"
                placeholder="info@mailaddress.com"
                v-model="email"
              />
              <input
                type="password"
                class="form-input"
                placeholder="••••••••••••"
                v-model="password"
              />
              <div class="form-input">
                <button
                  type="submit"
                  class="signup-Btn"
                  role="button"
                  value="Sign Up"
                  @click="signup()"
                >
                  Sign up!
                </button>
              </div>
            </form>
          </div>
          <h3>
            You already have an account?
            <RouterLink to="/login">
              <a href="" class="login-selector">Log in!</a>
            </RouterLink>
          </h3>
        </div>
      </div>
    </div>
    <!-- Logic for routing transition -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LandingComponent",
  props: {
    msg: String,
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    signup() {
      let newUser = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      console.log(newUser);
      axios.post("http://localhost:5000/api/posts/register", newUser);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");

.landing-class {
  min-width: 70%;
  max-width: 1200px;
  margin-top: 20px;
}
.body-wrapper {
  background-color: var(--landingClr);
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: var(--backgroundClr);
  box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem rgba(110, 110, 110, 0.644);
}

.landing-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.svg-image {
  height: 170px;
}
.form-container {
  height: 400px;
  background-color: var(--backgroundClr);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
}

input {
  margin: auto;
  width: 70%;
  border: none;
  border-bottom: 2px solid var(--landingClr);
  height: 3rem;
  transition: 0.5s;
}
input:focus {
  transform: scale(1.05);
  transition: 0.5s;
  outline: none;
}

.hover-wrapper {
  transition: transform 0.5s;
}

.login-selector {
  color: var(--buttonClr);
}
.banner-img {
  margin-right: auto;
  height: 100%;
  position: relative;
  transition: transform 0.5s;
  overflow: hidden;
  width: 70%;
}

.hover-wrapper:hover {
  transform: scale(1.1);
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

.signup-Btn {
  border: none;
  border-radius: 5px;
  height: 4em;
  width: 7rem;
  background-color: var(--buttonClr);
  margin: auto;
  margin-bottom: 5%;
  font-size: 1rem;
  font-weight: bold;
}
</style>

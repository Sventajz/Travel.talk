<template>
  <div id="app">
    <!-- this is where we setup the route for changing pages -->
    <div class="landing-class" v-if="!['app'].includes($route.name)">
      <!-- inside this div is the login form -->
      <div class="body-wrapper">
        <div class="banner-img">
          <div class="hover-wrapper">
            <!-- <img src="../assets/illu.jpg" class="image-filter" alt="green" /> -->
            <div class="banner-overlay"><h1>Share your hidden gems!</h1></div>
          </div>
        </div>
        <div class="landing-wrapper">
          <img src="../assets/travel-ver2.svg" class="svg-image" />

          <div class="form-container">
            <form action="" class="form-wrapper">
              <input
                type="name"
                class="form-input"
                placeholder="Name"
                v-model="name"
              />

              <input
                type="email"
                class="form-input"
                placeholder="Email"
                v-model="email"
                required
              />

              <input
                type="password"
                class="form-input"
                v-model="password"
                placeholder="Confirm Password"
                required
              />

              <input
                type="password"
                class="form-input"
                placeholder="Password"
                v-model="passwordConfirmation"
                required
              />
              <div style="color: black">{{ error }}</div>

              <button
                class="signup-Btn"
                type="submit"
                value="Sign Up"
                @click="signup()"
              >
                Sign up!
              </button>
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
import { useToast } from "vue-toastification";
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
      passwordConfirmation: "",
      error: "",
    };
  },
  methods: {
    signup() {
      const toast = useToast();
      let newUser = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      console.log(newUser);
      if (this.password == this.passwordConfirmation) {
        axios.post("http://localhost:5000/api/register", newUser);
        toast.success("Account created successfully", {
          toastClassName: "my-toast",
          position: "top-left",
        });
        setTimeout(() => {
          this.$router.push("/login");
        }, 2000);
      } else {
        this.error = "Password does not match";
      }
      console.log("hello worlds");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");

.landing-class {
  min-width: 70%;
  max-width: 1200px;
  margin: auto;
  margin-top: 59px;
}
.Vue-Toastification__toast--default.my-toast {
  margin-top: 100px;
}
label {
  text-align: left;
  color: black;
}
.body-wrapper {
  background-color: var(--landingClr);
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: var(--backgroundClr);
  box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem rgba(34, 34, 34, 0.877);
}

.landing-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.2rem;
}

.svg-image {
  height: 170px;
}
.form-container {
  height: 500px;
  background-color: var(--backgroundClr);
  width: 80%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 70%;
}

.form-input {
  font-size: 1.2rem;
  margin: auto;
  width: 100%;
  border: none;
  background: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom: 3px solid var(--landingClr);
  height: 40px;
  transition: 0.5s;
  color: var(--landingClr);
}
.form-input:focus {
  transform: scale(1.05);
  transition: 0.5s;
  outline: none;
}

.hover-wrapper {
  transition: transform 0.5s;
  background: url(../assets/illu.jpg);
  background-size: cover;
  filter: grayscale(25%);
  height: 100%;
  width: 100%;
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
  background-color: rgba(1, 1, 1, 0.719);
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Playfair Display", serif;
}

.signup-Btn {
  color: white;
  border: none;
  border-radius: 5px;
  height: 4em;
  width: 60%;
  background-color: #495e57;

  margin-bottom: 5%;
  font-size: 1rem;
  font-weight: bold;
  transition: 0.7s;
}

.signup-Btn:hover {
  color: #495e57;
  background-color: white;
  border: 1px solid #495e57;
  transition: 0.7s;
}
.image-filter {
  position: relative;
  filter: grayscale(25%);
}
</style>

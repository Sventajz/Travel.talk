<template>
  <div id="app">
    <!-- this is where we setup the route for changing pages -->

    <div class="landing-class" v-if="!['app'].includes($route.name)">
      <!-- inside this div is the login form -->
      <div class="body-wrapper">
        <div class="banner-img">
          <div class="hover-wrapper">
            <div class="banner-overlay">
              <h1>Share your hidden gems!</h1>
            </div>
          </div>
        </div>
        <div class="landing-wrapper">
          <img src="../assets/travel-ver2.svg" class="svg-image" />

          <div class="form-container">
            <form action="" class="form-wrapper" @keyup.enter="login">
              <input type="email" class="form-input" placeholder="Email" v-model="identifier" />

              <input type="password" class="form-input" v-model="password" placeholder="Password" />

              <div style="color: black">{{ error }}</div>

              <button class="signup-Btn" type="button" value="Sign Up" @click.prevent="login">
                Log in!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Logic for routing transition -->
  </div>
</template>

<script>
import axios from "axios";
import { useToast } from 'vue-toastification';
export default {
  name: "LoginComponent",
  props: {
    msg: String,
  },
  data() {
    return {
      identifier: "",
      password: "",
      error: "",
    };
  },
  methods: {
    login(event) {
      const toast = useToast();
      event.preventDefault(); // Prevent default form submission behavior
      let newUser = {
        identifier: this.identifier,
        password: this.password,
      };
      console.log(newUser);
      axios.post("http://localhost:5000/api/login", newUser).then(
        (res) => {
          console.log("this is response for login", res);
          this.error = res.data.message;
          if (res.status == 200) {
            console.log("hello");
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("userName", newUser.identifier);
            toast.success("Login succesfull", {
              toastClassName: "my-toast",
              position: "top-left",
            });

            this.$router.push("/post");
          }
        },
        (err) => {
          console.log(err.response);
          this.error = err.response.data.message;
        }
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>

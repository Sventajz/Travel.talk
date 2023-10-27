<template>
  <div id="app">
    <!-- this is where we setup the route for changing pages -->

    <div v-if="!['app'].includes($route.name)">
      <!-- inside this div is the login form -->
      <div class="body-wrapper">
        <div class="login-wrapper">
          <div class="welcome-wrapper">
            <h2>Hi!</h2>
            <p>Login to your account</p>
          </div>
          <form class="form-wrapper">
            <input
              type="email"
              class="form-input"
              placeholder="info@mailaddress.com"
              v-model="identifier"
            />
            <input
              type="password"
              class="form-input"
              placeholder="••••••••••••"
              v-model="password"
            />
            {{ error }}
            <div class="form-input">
              <button
                type="submit"
                class="login-btn"
                role="button"
                value="Sign Up"
                @click.prevent="login"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- Logic for routing transition -->
  </div>
</template>

<script>
import axios from "axios";
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
      event.preventDefault(); // Prevent default form submission behavior
      let newUser = {
        identifier: this.identifier,
        password: this.password,
      };
      console.log(newUser);
      axios.post("http://localhost:5000/api/posts/login", newUser).then(
        (res) => {
          console.log("this is response for login", res);
          this.error = res.data.message;
          if (res.status == 200) {
            console.log("hello");
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("userName", newUser.identifier);
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
<style scoped>
.welcome-wrapper {
  display: flex;
  flex-direction: column;
  color: white;
  text-align: justify;
  width: 80%;
}

.body-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.login-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60%;
  width: 400px;
  margin: auto;
  border-radius: 10px;
  background-color: #084c5e;
  box-shadow: 0.2em 0.2em 0.2em rgb(8, 8, 8);
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
.login-btn {
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
}

.login-btn:hover {
  box-shadow: rgba(224, 223, 226, 0.5) 0 1px 30px;
  transition-duration: 0.1s;
}
</style>

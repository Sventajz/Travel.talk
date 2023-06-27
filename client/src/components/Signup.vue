<template>
  <div id="app">
    <!-- this is where we setup the route for changing pages -->
    <div v-if="!['app'].includes($route.name)">
      <!-- inside this div is the login form -->
      <div class="body-wrapper">
        <div class="login-wrapper">
          <div class="welcome-wrapper">
            <h2>Welcome!</h2>
            <p>Sign in to contine</p>
          </div>
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
                class="button-36"
                role="button"
                value="Sign Up"
                @click="signup()"
              >
                Sign up!
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
  name: "SignUp",
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
.welcome-wrapper {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  text-align: justify;
  justify-self: left;
  width: 100%;
  padding-left: 4rem;
  margin: auto;
  color: black;
  font-weight: bold;
  font-size: large;
}
input {
  border: none;
  border-bottom: 2px solid white;
  background-color: #3c8086;
  color: black;
}
input::placeholder {
  color: black;
}
#app {
  height: 100%;
  background: #9adee2 53%;
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

.login-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  height: 450px;
  width: 600px;
  margin: auto;
  border-radius: 10px;
  background-color: #3c8086;
  box-shadow: 0.2em 0.2em 0.2em rgb(136, 134, 134);
}

.form-wrapper {
  display: flex;
  flex-direction: column;
  margin: auto;
}

.form-input {
  margin: 20px;
  height: 40px;
  width: 325px;
  font-size: large;
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
  margin: auto;
}

.button-36:hover {
  box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
  transition-duration: 0.1s;
}
</style>

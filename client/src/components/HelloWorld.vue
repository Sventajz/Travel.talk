<template>
  <div id="app">
    <NavComponent></NavComponent>
    <!-- this is where we setup the route for changing pages -->

    <div v-if="!['app'].includes($route.name)">
      <!-- inside this div is the login form -->
      <div class="body-wrapper">
        <div class="login-wrapper">
          <h2>Signup</h2>
          <form action="" class="form-wrapper">
            <input
              type="email"
              class="form-input"
              placeholder="info@mailaddress.com"
            />
            <input
              type="password"
              class="form-input"
              placeholder="••••••••••••"
            />
            <router-link to="/app">
              <div class="form-input">
                <input
                  type="submit"
                  class="button-36"
                  role="button"
                  value="Sign Up"
                /></div
            ></router-link>
          </form>
        </div>
      </div>
    </div>
    <!-- Logic for routing transition -->
    <div class="router-wrapper">
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
import NavComponent from "../components/NavComponent.vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: { RouterView, NavComponent },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#app {
  height: 100%;
  background: rgb(69, 181, 140);
  background: linear-gradient(
    90deg,
    rgba(69, 181, 140, 1) 0%,
    rgba(156, 221, 175, 1) 35%,
    rgba(163, 246, 225, 1) 100%
  );
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
  align-items: center;
  height: 350px;
  width: 400px;
  margin: auto;
  border-radius: 10px;
  background-color: whitesmoke;
  box-shadow: 0.2em 0.2em 0.2em rgb(136, 134, 134);
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
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s, transform 1.75s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-99%);
}

/* CSS */
.button-36 {
  background-image: linear-gradient(
    92.88deg,
    #45b58c 10%,
    #9cddaf 80%,
    #a3f6e1 10%
  );
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

.button-36:hover {
  box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
  transition-duration: 0.1s;
}
</style>

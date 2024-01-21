<!-- eslint-disable vue/require-v-for-key -->
<template>
  <nav>
    <div class="logoname">
      <img src="../assets/svgviewer-output.svg" style="height: 70px" />
      <h2>TravelTalk</h2>
    </div>

    <div class="ul-container">
      <ul>
        <li>
          <router-link class="animation" to="/">Home</router-link>
        </li>
        <li><router-link class="animation" to="/post">Post</router-link></li>
        <li>
          <router-link class="animation" to="/predict">Trip planer</router-link>
        </li>
        <div class="dropdown">
          <li @click="isOpen = !isOpen"><a class="animation">Account</a></li>
          <transition name="fade" appear>
            <div class="mydropdown" v-if="isOpen">
              <router-link
                class="dropdownContent"
                to="/login"
                @click="isOpen = !isOpen"
                >Log in!</router-link
              >
              <router-link
                class="dropdownContent"
                to="/signup"
                @click="isOpen = !isOpen"
                >Sign up!</router-link
              >
              <router-link
                class="dropdownContent"
                to="/login"
                @click="
                  isOpen = !isOpen;
                  logout();
                "
                >Logout</router-link
              >
            </div>
          </transition>
        </div>
      </ul>
    </div>
  </nav>
</template>

<script scoped>
export default {
  name: "navComponent",
  async created() {
    // if (localStorage.getItem("token") === null) {
    //   this.$router.push("/");
    // }
  },
  data() {
    return { isOpen: false };
  },

  methods: {
    isLoggedin() {
      console.log(this.$route.name);
      if (this.$route.name === "/post") return true;
    },
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
    },
  },
};
</script>
<style>
nav {
  background-color: rgb(31, 29, 29);
  color: #f5f7f8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: auto;
  top: 0;
  width: 100%;
  height: 9%;
}

.ul-container {
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin-right: 2rem;
}
li {
  list-style: none;
}
.animation {
  position: relative;
  text-decoration: none;
  color: var(--backgroundClr);
  letter-spacing: 0.5px;
}

.animation:after {
  content: "";
  position: absolute;
  background-color: var(--landingClr);
  height: 5px;
  width: 0;
  left: 0;
  bottom: -5px;
  transition: 0.3s;
}
.animation:hover:after {
  width: 100%;
}

ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 1.3rem;
}
.logoname {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
}

.navBtn {
  border: none;
  border-radius: 10px;
  height: 3rem;
  font-size: 1.2rem;
  width: 35%;
  background-color: var(--landingClr);
  color: #f5f7f8;
  font-weight: bold;
  transition: ease-in-out 0.3s;
}

.navBtn:hover {
  background-color: var(--backgroundClr);
  color: var(--landingClr);
  border: 3px solid var(--landingClr);
  transition: ease-in-out 0.3s;
}

.dropdown {
  position: relative;
  width: 30%;
  display: inline-block;
  transition: all 0.5s ease-in-out;
}

.mydropdown {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  background-color: white;
  height: fit-content;
  color: black;
  height: 150px;
  width: 100px;
  top: 100%;
  margin-top: 5px;
  border: 1px solid gray;
  border-radius: 5px;
  transition: all 0.5s ease-in;
  z-index: 3;
}

.dropdownContent {
  color: black;
  text-decoration: none;
  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 500;
}

.dropdownContent:hover {
  background-color: rgba(114, 102, 102, 0.068);
  font-weight: bold;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transition: all 0.5s ease-in-out;
}
</style>

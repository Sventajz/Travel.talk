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
          <router-link to="/">Home</router-link>
        </li>
        <li><router-link to="/post">Post</router-link></li>
        <li><router-link to="/signup">Account</router-link></li>

        <button
          class="navBtn"
          v-on:click="logout()"
          v-if="this.$route.name === 'PostComponent'"
        >
          Log out
        </button>
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

  methods: {
    isLoggedin() {
      console.log(this.$route.name);
      if (this.$route.name === "/post") return true;
    },
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      this.$router.push("/");
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
  position: fixed;
  top: 0;
  width: 100%;
  height: 9%;
}

.ul-container {
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin-right: 2rem;
}
li {
  list-style: none;
}
ul > li > a {
  text-decoration: none;
  color: #f5f7f8;
}
ul > li:hover,
ul > .router-link-active,
.router-link-exact-active {
  border-bottom: 5px solid var(--landingClr);
  font-weight: bolder;
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
  width: 40%;
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
</style>

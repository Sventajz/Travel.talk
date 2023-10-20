<template>
  <nav>
    <div class="logoname">
      <img src="../assets/TravelLogo.svg" style="height: 75px; width: 75px" />
      <H2>Travel.Talk</H2>
    </div>
    <div class="ul-container">
      <!-- <ul>
        <li>Profile name</li>
        <li>about</li>
      </ul> -->
      <button class="button-36" v-on:click="logout()">Log out</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navComponent",
  async created() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("/");
    }
  },
  methods: {
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
  border-bottom: 1px solid #adadad;
  background-color: rgb(233, 232, 232);
  color: black;
  height: 75px;
  display: flex;
  flex-direction: row;
}

.logoname {
  margin: auto;
  margin-left: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
}

ul {
  list-style-type: none;
  display: flex;
}

li {
  margin: 10px;
}
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
}
</style>

<template>
  <nav>
    <div class="logoname">
      <img src="../assets/travel-ver2.svg" style="height: 70px" />
      <H2>Travel.Talk</H2>
    </div>
    <div class="ul-container">
      <ul>
        <li><a href="">Profile</a></li>
        <li><a href="">About</a></li>
        <li><button class="navBtn" v-on:click="logout()">Log out</button></li>
      </ul>
    </div>
  </nav>
</template>

<script scoped>
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
elements.style {
  --backgroundClr: #f5f7f8;
  --buttonClr: #f4ce14;
  --contentClr: #495e57;
  --navClr: #495e57;
}
nav {
  background-color: rgb(31, 29, 29);
  color: #f5f7f8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  font-size: 20px;
}

.ul-container {
  display: flex;
  justify-content: space-between;
  margin-right: 2rem;
}
li {
  list-style: none;
}
ul > li > a {
  text-decoration: none;
  color: #f5f7f8;
}
ul > li > a:hover {
  color: #5f7e74;
  font-weight: bolder;
}
ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
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
  height: 2rem;
  background-color: #45474b;
  color: #f5f7f8;
}
</style>

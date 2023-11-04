<!-- eslint-disable vue/require-v-for-key -->
<template>
  <nav>
    <div class="logoname">
      <img src="../assets/travel-ver2.svg" style="height: 70px" />
      <H2>Travel.Talk</H2>
    </div>
    <div class="search-container">
      <div class="search-icon-wrapper">
        <!-- <img
          src="../assets/search.svg"
          style="height: 50px; width: 50px"
          v-on:click="getData"
        /> -->
      </div>
      <form @submit.prevent="getData">
        <input type="submit" />
        <input
          class="search-bar"
          type="search"
          v-model="query"
          v-on:input="getData"
        />
      </form>
    </div>
    <div
      class="search-results"
      style="color: black; height: 100px; width: 100px; background-color: red"
    >
      <ul style="background-color: white">
        <li v-for="name in names">{{ name }}</li>
      </ul>
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
import axios from "axios";
// import PostService from "@/PostService";
export default {
  name: "navComponent",
  async created() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("/");
    }
  },
  data() {
    return {
      query: null,
      names: [],
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      this.$router.push("/");
    },
    async getData() {
      // const query = this.query.toLowerCase();
      console.log("nav query: ", this.query);
      axios
        .get("http://localhost:5000/api/posts")
        .then((response) => {
          this.names = response.data
            .filter((item) =>
              item.userName.toLowerCase().startsWith(this.query)
            )
            .map((item) => item.userName);
          console.log("nav data: ", this.names);
        })
        .catch();
    },
  },
};
</script>
<style>
.search-bar {
  background-color: white;
  width: 100%;
}
.search-results {
  display: grid;
  grid-template-columns: 1fr;
}

.search-container {
  height: 50px;
  display: flex;
  width: 50%;
  background-color: white;
}
.search-icon-wrapper {
}
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

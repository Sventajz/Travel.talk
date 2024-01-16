<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div class="postcont">
    <div class="mapcont">
      <MapComponent v-bind:key="componentKey"></MapComponent>
    </div>
    <div class="container">
      <div class="create-post">
        <div class="user-input">
          <img
            src="../assets/icons8-user-48.png"
            alt="User icon"
            id="user-icon"
            style="height: 50px; width: 50px"
          />
          <span>{{ user }}</span>
        </div>
        <div class="iarea">
          <div class="place-wrapper">
            <input
              type="place"
              id="place-input"
              v-model="place"
              placeholder="Where have you been"
            />
          </div>

          <textarea
            maxlength="300"
            type="text"
            id="new-post-info"
            v-model="text"
            placeholder="What would you like to say"
            style="resize: none"
          />

          <button id="post-btn" v-on:click="createPost" @click="open = false">
            Post!
          </button>
        </div>
      </div>

      <p class="error" v-if="error">{{ error }}</p>
      <div class="posts-container">
        <div
          class="post"
          v-for="(post, index) in posts"
          v-bind:item="post"
          v-bind:index="index"
          v-bind:userName="userName"
          v-bind:place="place"
          v-bind:key="post._id"
        >
          <div class="post-info">
            <p>User: {{ post.userName }}</p>

            <p>Location: {{ post.place }}</p>
            <p>
              Posted:
              {{
                `${post.createdAt.getDate()}.${post.createdAt.getMonth()}.${post.createdAt.getFullYear()}`
              }}
            </p>
          </div>
          <p class="text">{{ post.text }}</p>

          <button class="delete-btn" v-on:click="deletePost(post._id)">
            Delete Post
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PostService from "../PostService.js";
import { geoCode } from "../geocode";
import MapComponent from "./MapComponent.vue";

export default {
  name: "PostComponent",

  data() {
    return {
      posts: [],
      userName: "",
      error: "",
      text: "",
      place: "",
      open: false,
      componentKey: 0,
      user: localStorage.getItem("userName"),
    };
  },
  async created() {
    // if (localStorage.getItem("token") === null) {
    //   this.$router.push("/");
    // }
    try {
      this.posts = await PostService.getPosts();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async createPost() {
      await PostService.createPost(
        localStorage.getItem("userName"),
        this.text,
        this.place
      );
      this.posts = await PostService.getPosts();
      console.log("this is place", this.place);
      console.log("this is geocode data", geoCode(this.place));
      this.componentKey += 1;
    },
    async deletePost(id) {
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts();
      this.componentKey += 1;
    },
    forceRerender() {
      this.componentKey += 1;
    },
  },
  components: { MapComponent },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.postcont {
  display: grid;
  grid-template-columns: 65% 35%;
  align-items: center;
  box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem rgba(34, 34, 34, 0.877);
  height: 88%;
  width: 100%;
  background-color: var(--backgroundClr);
}
.post-info {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 25px;
}
.mapcont {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.text {
  text-align: justify;
  padding: 1rem;
  border-top: 1px solid var(--landingClr);
}

.container {
  max-height: 100vh;
  width: 100%;
  color: black;
  margin: auto;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  background-color: var(--navClr);
}
.posts-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  padding: 0;
  width: 100%;
  margin-right: 20px;
  padding: 30px 0 30px;
}

.container::-webkit-scrollbar-track {
  display: none;
}

.container::-webkit-scrollbar {
  width: 10px;
}

.container::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background: var(--backgroundClr);

  margin-left: 10px;
}
.post {
  background-color: var(--backgroundClr);
  border-radius: 5px;
  margin: auto;
  width: 90%;
  height: 100%;
}

p.error {
  padding: 10px;
  margin-bottom: 15px;
  box-shadow: 0.2em 0.2em 0.2em rgb(136, 134, 134);
  border: 1px solid #adadad;
  border-radius: 10px;
  color: white;
  background-color: rgb(242, 68, 68);
}
#user-icon {
  background-color: var(--backgroundClr);
  border-radius: 50px;
}

.user-input {
  display: flex;
  justify-content: left;
  align-items: center;
  color: var(--backgroundClr);
  font-size: 1.5rem;
  height: 20%;
  gap: 1rem;
  font-weight: bold;
  padding: 10px;
}
::placeholder {
  color: var(--backgroundClr);
}
textarea,
input {
  border: none;
  color: var(--backgroundClr);
  background-color: red;
}
textarea,
input:focus {
  border: none;
  background: none;
  outline: none;
}

.iarea {
  display: grid;
  grid-template-columns: 80% 20%;
  height: 300px;
}
#place-input {
  height: 2rem;
  font-size: 1.2rem;
  width: 100%;

  border-bottom: 2px solid var(--backgroundClr);
  background: none;
  padding: 10px;
}

#new-post-info {
  width: 100%;
  height: 80%;
  grid-column-start: 1;
  grid-row-start: 2;
  background: none;
  padding: 10px;
  font-size: 15px;
}
.place-wrapper {
  grid-column: span 2;
  display: flex;
  justify-content: left;
}

#post-btn {
  border: none;
  border-radius: 5px;
  height: 2rem;
  font-size: 1.2rem;
  grid-column-start: 2;
  grid-row-start: 2;
  background-color: var(--backgroundClr);
  color: var(--landingClr);
  font-weight: bold;
  align-self: center;
}
</style>

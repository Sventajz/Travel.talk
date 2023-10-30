<template>
  <div class="postcont">
    <div class="mapcont">
      <MapComponent v-bind:key="componentKey"></MapComponent>
    </div>
    <div class="container">
      <button class="post-btn" @click="open = true">Add a new post!</button>
      <Teleport to="body">
        <div v-if="open" class="modal">
          <div class="create-post">
            <button @click="open = false">Close window</button>
            <ul>
              <li>
                <input
                  type="userName"
                  id="create-post name-input"
                  v-model="userName"
                  placeholder="Your name"
                />
              </li>
              <li>
                <input
                  type="place"
                  id="create-post place-input"
                  v-model="place"
                  placeholder="Where have you been"
                />
              </li>
            </ul>

            <textarea
              maxlength="350"
              type="text"
              id="create-post"
              v-model="text"
              placeholder="What would you like to say"
            />
            <button v-on:click="createPost" @click="open = false">Post!</button>
          </div>
        </div>
      </Teleport>
      <hr />
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
            {{
              `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}`
            }}
            <p>User: {{ post.userName }}</p>

            <p>Location: {{ post.place }}</p>
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
    };
  },
  async created() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("/");
    }
    try {
      this.posts = await PostService.getPosts();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async createPost() {
      await PostService.createPost(this.userName, this.text, this.place);
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
<style>
.postcont {
  display: grid;
  grid-template-columns: 65% 35%;
  align-items: center;
  gap: 20px;
  height: 80%;
  width: 100%;
  margin: auto;
}

.mapcont {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.container {
  max-height: 100vh;
  width: 100%;
  color: black;
  margin: auto;
  margin-top: 20px;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
}
.posts-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 0;
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
  border: 1px solid var(--landingClr);
  margin-left: 10px;
}
.post {
  background-color: var(--backgroundClr);
  border: 1px solid red;
  margin: auto;
  width: 100%;
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

.modal {
  position: absolute;

  top: 25%;
  left: 25%;
  height: 500px;
  width: 500px;

  background-color: rgba(240, 240, 240, 1);
  display: block;
  justify-content: center;
  align-items: center;
  box-shadow: 1px black;
}

.create-post {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<template>
  <div class="postcont">
    <div class="mapcont">
      <MapComponent v-bind:key="componentKey"></MapComponent>
    </div>
    <div class="container">
      <button @click="open = true">Add a new post!</button>
      <Teleport to="body">
        <div v-if="open" class="modal">
          <div class="create-post">
            <button @click="open = false">Close window</button>
            <ul>
              <label for="create-post"></label>
              <li>
                <input
                  type="userName"
                  class="field-style"
                  id="create-post name-input"
                  v-model="userName"
                  placeholder="Your name"
                />
              </li>
              <li>
                <input
                  type="place"
                  class="field-style"
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
              class="text-input field-style"
              v-model="text"
              placeholder="What would you like to say"
            />
            <button v-on:click="createPost" @click="open = false">Post!</button>
          </div>
        </div>
      </Teleport>
      <hr />
      <p class="error" v-if="error">{{ error }}</p>
      <div
        class="posts-container"
        style="overflow: auto; height: 75%; margin: auto"
      >
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

          <button v-on:click="deletePost(post._id)">Delete Post</button>
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
<style scoped>
.postcont {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  align-items: center;
}

.mapcont {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  max-height: 100vh;
  color: black;
  width: 500px;
  margin: auto;
  margin-top: 20px;
  height: 90%;
  overflow: hidden;
}
.post-container {
  background-color: red;
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

.post {
  margin-bottom: 20px;
  border-radius: 10px;
  width: 450px;
  height: 300px;
  background-color: #084c5e;
  color: white;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  background-color: darkgreen;
}

p.text {
  text-align: justify;
  padding: 8px;
  font-size: 17px;
  margin-bottom: 0;
  background: #3c8086 53%;
  border-top: 1px solid rgb(122, 120, 120);
  border-bottom: 1px solid rgb(122, 120, 120);
  border-radius: 12px;
  margin: 8px;
  height: 160px;
  word-wrap: break-word;
  box-sizing: border-box;
  color: white;
}

.modal {
  position: absolute;
  z-index: 999;
  top: 0;
  left: 8%;
  height: 100%;
  width: 100vw;
  margin: auto;
  margin-left: -150px;
  background-color: rgba(240, 240, 240, 0.5);
  display: block;
  justify-content: center;
  align-items: center;
  box-shadow: 1px black;
}

.create-post {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 600px;
  background-color: white;
  border: 1px solid gray;
  border-radius: 15px;
  opacity: 100%;
  box-shadow: 0.2em 0.2em 0.2em rgb(136, 134, 134);
}

.text-input {
  height: 250px;
  width: 90%;
}

.field-style {
  background-color: rgb(252, 251, 251);
}

button {
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

.post-info {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}
.post-info > * {
  margin-left: 8px;
  margin-right: 8px;
}
</style>

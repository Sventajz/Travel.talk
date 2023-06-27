<template>
  <div class="postcont">
    <div class="mapcont">
      <MapComponent v-bind:key="componentKey"></MapComponent>
    </div>
    <div class="container">
<<<<<<< HEAD
      <h1>Lastest Posts</h1>
=======
>>>>>>> travel-test
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
<<<<<<< HEAD
        style="overflow: scroll; height: 700px; margin: auto"
=======
        style="
          overflow: scroll;
          height: 500px;
          margin: auto;
          box-sizing: border-box;
        "
>>>>>>> travel-test
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
<<<<<<< HEAD
          {{
            `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}`
          }}
          <div id="location">
            <h3>User: {{ post.userName }}</h3>
=======
          <div class="post-info">
            {{
              `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}`
            }}
            <p>User: {{ post.userName }}</p>
>>>>>>> travel-test

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
<<<<<<< HEAD
=======
    if (localStorage.getItem("token") === null) {
      this.$router.push("/");
    }
>>>>>>> travel-test
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
// PostService.getPosts()
//   .then((response) => response.json())
//   .then((post) => {
//     console.log(post.userName);
//     return post.userName;
//   });

// const printAddress = async () => {
//   const a = await test;
//   console.log("this is post a: ", a);
// };

// printAddress();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
<<<<<<< HEAD
#location {
  /* display: flex;
  justify-content: center;
  margin: auto;
  align-items: center;
  text-align: center; */
}

=======
>>>>>>> travel-test
.postcont {
  display: grid;
  position: absolute;
  left: 10%;
  grid-template-columns: auto auto auto;
  grid-template-rows: 600px 300px;
<<<<<<< HEAD
  gap: 10px;
  background-color: white;
  margin-top: 10px;
  width: 80vw;
  box-shadow: 0.2em 0.2em 0.2em rgb(136, 134, 134);
  border-radius: 10px;
=======
  height: calc(100% - 100px);
  gap: 10px;
  background: #90ced1 53%;
  margin-top: 10px;
  width: 80%;
  box-shadow: 0.2em 0.2em 0.2em rgb(136, 134, 134);
  -moz-box-sizing: border-box;
  box-sizing: border-box;
>>>>>>> travel-test
}

.mapcont {
  display: flex;
  justify-content: center;
  align-items: center;
}

div.container {
  color: black;
  width: 500px;
  margin: auto;
  margin-top: 20px;
<<<<<<< HEAD
=======
  height: 90%;
  overflow: hidden;
>>>>>>> travel-test
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

div.post {
  position: relative;
  border: 1px solid #adadad;
  border-radius: 10px;
  margin: auto;
  color: black;
<<<<<<< HEAD
  background-color: whitesmoke;
  box-shadow: 0.2em 0.2em 0.2em rgb(136, 134, 134);
  margin-bottom: 15px;
  width: 450px;
  height: 360px;
=======

  background-color: #3c8086;
  box-shadow: 0.2em 0.2em 0.2em rgb(136, 134, 134);
  margin-bottom: 15px;
  width: 450px;
  height: 300px;
  box-sizing: border-box;
  margin-bottom: 40px;
>>>>>>> travel-test
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
<<<<<<< HEAD
  background-color: rgb(237, 221, 221);
=======
  background: #9adee2 53%;
>>>>>>> travel-test
  border-top: 1px solid rgb(122, 120, 120);
  border-bottom: 1px solid rgb(122, 120, 120);
  border-radius: 12px;
  margin: 8px;
  height: 160px;
  word-wrap: break-word;
<<<<<<< HEAD
=======
  box-sizing: border-box;
>>>>>>> travel-test
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
<<<<<<< HEAD
  background: rgb(69, 181, 140);
  background: linear-gradient(
    90deg,
    rgba(69, 181, 140, 1) 0%,
    rgba(156, 221, 175, 1) 35%,
    rgba(163, 246, 225, 1) 100%
  );
  color: black;
  border: none;
  font-weight: bold;
=======
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
>>>>>>> travel-test
}
</style>

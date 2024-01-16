<template>
  <div class="app">
    <!-- this is where we setup the route for changing pages -->
    <p>hello</p>
  </div>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";
export default {
  name: "LandingComponent",
  props: {
    msg: String,
  },

  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      error: "",
    };
  },
  methods: {
    signup() {
      const toast = useToast();
      let newUser = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      console.log(newUser);
      if (this.password == this.passwordConfirmation) {
        axios.post("http://localhost:5000/api/posts/register", newUser);
        toast.success("Account created successfully", {
          toastClassName: "my-toast",
          position: "top-left",
        });
        setTimeout(() => {
          this.$router.push("/login");
        }, 2000);
      } else {
        this.error = "Password does not match";
      }
      console.log("hello worlds");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");

.app {
  margin-bottom: auto;
  width: 100%;
  background-color: red;
  margin-bottom: auto;
  height: 88%;
  background-color: var(--backgroundClr);
  border-radius: 5px;
  color: var(--backgroundClr);
  box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem rgba(34, 34, 34, 0.877);
  color: black;
}
</style>

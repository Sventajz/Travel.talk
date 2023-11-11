<template>
  <div id="app">
    <!-- this is where we setup the route for changing pages -->
    <div class="welcome-wrapper">
      <article>
        Welcome to TravelTalk, your passport to a world of wanderlust and
        adventure! 🌍✈️ Embark on a journey of discovery and storytelling as you
        explore the globe through the lens of your travels. At TravelTalk, we
        believe every journey is a story waiting to be shared, and we're
        thrilled to be your virtual travel companion. Whether you're a seasoned
        globetrotter or a first-time explorer, this is your space to document
        and relive the magic of your adventures. Share the breathtaking
        landscapes, the delicious local cuisines, and the unforgettable moments
        that shape your unique travel experiences. Connect with fellow
        travelers, swap tips and recommendations, and inspire others with your
        tales of exploration. From the hidden gems of far-off destinations to
        the familiar charm of your hometown, every place has a story, and we
        can't wait to hear yours. So, pack your virtual bags, grab your camera,
        and join the TravelTalk community. Let's turn the pages of our
        collective travel diary and create a tapestry of memories that
        transcends borders. Welcome aboard! Your next great adventure starts
        here at TravelTalk. 🌟✨
      </article>

      <!-- inside this div is the login form -->
    </div>
    <!-- Logic for routing transition -->
  </div>
</template>

<script>
// import axios from "axios";
// import { useToast } from "vue-toastification";
export default {
  name: "LandingComponent",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome-wrapper {
  margin-top: 90px;
  height: 92%;
  width: 100%;
  background-color: var(--landingClr);
  display: flex;
  justify-content: center;
}

article {
  width: 60%;

  text-align: left;
}
</style>

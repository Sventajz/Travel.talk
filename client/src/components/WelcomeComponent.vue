<template>
  <div id="app">
    <!-- this is where we setup the route for changing pages -->
    <div class="welcome-wrapper">
      <svg viewBox="0 0 1000 220">
        <path
          class="planePath"
          id="planePath"
          d="M 0 110 C 50 10 150 10 200 110 S 350 210 400 110 S 550 10 600 110 S 750 210 800 110 S 950 10 1000 110"
        />
        <g id="plane" class="plane">
          <polygon
            class="fill1"
            points="-141,-10 199,0 -198,-72 -188,-61 -171,-57 -184,-57 "
          />
          <polygon class="fill2" points="199,0 -141,-10 -163,63 -123,9 " />
          <polygon
            class="fill3"
            points="-95,39 -113,32 -123,9 -163,63 -105,53 -108,45 -87,48 -90,45 -103,41 -94,41 "
          />
          <path
            class="fill4"
            d="M-87 48l-21 -3 3 8 19 -4 -1 -1zm-26 -16l18 7 -2 -1 32 -7 -29 1 11 -4 -24 -1 -16 -18 10 23zm10 9l13 4 -4 -4 -9 0z"
          />
          <polygon
            class="fill1"
            points="-83,28 -94,32 -65,31 -97,38 -86,49 -67,70 199,0 -123,9 -107,27 "
          />
        </g>
        <animateMotion
          xlink:href="#plane"
          dur="8s"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlink:href="#planePath" />
        </animateMotion>
      </svg>

      <div class="info-wrapper">
        <div class="info-component">
          <h2>
            Welcome to TravelTalk! A place to share and plan all of your travels
          </h2>
          <div class="inner-info">
            <h3>Create an account!</h3>
          </div>
          <div class="inner-info">
            <router-link to="/signup"
              ><button class="welcome-Btn" href="/signup">
                Sign up!
              </button></router-link
            >
          </div>
          <div class="inner-info">
            <h3>Already have an account?</h3>
          </div>
          <div class="inner-info">
            <router-link to="/login"
              ><button class="welcome-Btn" href="/login">
                Log in!
              </button></router-link
            >
          </div>
        </div>
      </div>

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
  height: 92%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
}

svg {
  position: absolute;
  width: 100%;
  margin: auto;
  rotate: 60deg;
  left: 25%;
}

.info-wrapper {
  height: 85%;
  width: 65%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  padding: 10px;
  background-color: rgba(233, 232, 232, 0.227);
  backdrop-filter: blur(5px);
  border-radius: 5px;
  box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem rgba(34, 34, 34, 0.877);
  min-width: 400px;
}
.info-component {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h2 {
  margin-bottom: 10px;
  margin-top: 10px;
}
.inner-info {
  width: 100%;
}
.planePath {
  opacity: 0.06;
  stroke: var(--landingClr);
  stroke-width: 1%;
  stroke-dasharray: 2%;
  fill: none;
}

.plane {
  transform: scale(0.15);
}

.fill1 {
  fill: #d9dada;
}
.fill2 {
  fill: #c5c6c6;
}
.fill3 {
  fill: #aeafb0;
}
.fill4 {
  fill: #9d9e9e;
}

.welcome-Btn {
  color: white;
  border: none;
  border-radius: 5px;
  height: 2.8em;
  width: 40%;
  background-color: var(--landingClr);
  margin-bottom: 5%;
  font-size: 1.3rem;
  font-weight: bold;
  transition: 0.7s;
}

.welcome-Btn:hover {
  color: #495e57;
  background-color: white;
  border: 1px solid #495e57;
  transition: 0.7s;
}
</style>

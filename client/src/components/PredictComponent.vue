<template>
  <div class="app">
    <div class="predict-wrapper">
      <div class="select-form">
        <label for="source">Starting city</label>
        <select name="source">
          <option value="1">Delhi</option>
          <option value="2">Mumbai</option>
          <option value="3">Bangalore</option>
          <option value="4">Kolkata</option>
          <option value="5">Hyderabad</option>
          <option value="6">Chennai</option>
        </select>
        <label for="destination">Destination city</label>

        <select name="destination">
          <option value="1">Delhi</option>
          <option value="2">Mumbai</option>
          <option value="3">Bangalore</option>
          <option value="4">Kolkata</option>
          <option value="5">Hyderabad</option>
          <option value="6">Chennai</option>
        </select>
        <label for="airline">Airline</label>
        <select name="airline">
          <option value="1">SG-8709</option>
          <option value="2">AirAsia</option>
          <option value="3">Vistara</option>
          <option value="4">Go_first</option>
          <option value="5">Indigo</option>
          <option value="5">Air_india</option>
        </select>
        <label for="arrival">Arrival time</label>

        <select name="arrival">
          <option value="1">Evening</option>
          <option value="2">Early morning</option>
          <option value="3">Morning</option>
          <option value="4">Afternoon</option>
          <option value="5">Night</option>
          <option value="6">Late night</option>
        </select>
        <label for="departure">Departure time</label>

        <select name="departure">
          <option value="1">Evening</option>
          <option value="2">Early morning</option>
          <option value="3">Morning</option>
          <option value="4">Afternoon</option>
          <option value="5">Night</option>
          <option value="6">Late night</option>
        </select>
        <label for="stops">Number of stops</label>

        <select name="stops">
          <option value="1">None</option>
          <option value="2">One</option>
          <option value="3">Two or more</option>
        </select>
        <label for="class">Type of seat class</label>

        <select name="class">
          <option value="1">Economy</option>
          <option value="2">Bussines</option>
        </select>
      </div>
    </div>
    <div id="map"></div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Loader } from "@googlemaps/js-api-loader";
const GOOGLE_MAPS_API_KEY = process.env.VUE_APP_GOOGLE_API;
export default {
  mounted() {
    this.initializeMap();
  },
  methods: {
    async initializeMap() {
      const loader = new Loader({
        apiKey: GOOGLE_MAPS_API_KEY,
        version: "weekly",
      });

      try {
        await loader.load();
        const { Map } = await google.maps.importLibrary("maps");

        // Declare the map variable
        const map = new Map(document.getElementById("map"), {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        });

        // Now you can use the 'map' variable for further operations if needed
      } catch (error) {
        console.error("Error loading Google Maps:", error);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");
#map {
  height: 100%;
}
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
  overflow-y: scroll;
}

.predict-wrapper {
  width: 100%;
  display: flex;
  height: 400px;
  justify-content: center;
  background-color: green;
}

.select-form {
  background-color: red;
  padding: 0.5rem;
}
</style>

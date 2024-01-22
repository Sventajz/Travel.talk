<template>
  <div class="app">
    <div class="predict-wrapper">
      <div class="select-form">
        <div class="form">
          <label for="source">Starting city</label>
          <select v-model="source" class="custom-select" required>
            <option value="1">Delhi</option>
            <option value="2">Mumbai</option>
            <option value="3">Bangalore</option>
            <option value="4">Kolkata</option>
            <option value="5">Hyderabad</option>
            <option value="6">Chennai</option>
          </select>
        </div>

        <div class="form">
          <label for="destination">Destination city</label>
          <select v-model="destination" class="custom-select" required>
            <option value="1">Delhi</option>
            <option value="2">Mumbai</option>
            <option value="3">Bangalore</option>
            <option value="4">Kolkata</option>
            <option value="5">Hyderabad</option>
            <option value="6">Chennai</option>
          </select>
        </div>

        <div class="form">
          <label for="airline">Airline</label>
          <select v-model="airline" class="custom-select" required>
            <option value="1">SG-8709</option>
            <option value="2">AirAsia</option>
            <option value="3">Vistara</option>
            <option value="4">Go_first</option>
            <option value="5">Indigo</option>
            <option value="5">Air_india</option>
          </select>
        </div>

        <div class="form">
          <label for="arrival">Arrival time</label>
          <select v-model="arrival" class="custom-select" required>
            <option value="1">Evening</option>
            <option value="2">Early morning</option>
            <option value="3">Morning</option>
            <option value="4">Afternoon</option>
            <option value="5">Night</option>
            <option value="6">Late night</option>
          </select>
        </div>

        <div class="form">
          <label for="departure">Departure time</label>
          <select v-model="departure" class="custom-select" required>
            <option value="1">Evening</option>
            <option value="2">Early morning</option>
            <option value="3">Morning</option>
            <option value="4">Afternoon</option>
            <option value="5">Night</option>
            <option value="6">Late night</option>
          </select>
        </div>

        <div class="form">
          <label for="stops">Number of stops</label>
          <select v-model="stops" class="custom-select" required>
            <option value="1">None</option>
            <option value="2">One</option>
            <option value="3">Two or more</option>
          </select>
        </div>

        <div class="form">
          <label for="type">Type of seat class</label>
          <select v-model="type" class="custom-select" required>
            <option value="1">Economy</option>
            <option value="0">Bussines</option>
          </select>
        </div>
        <div class="btn-form">
          <button
            v-on:click="
              predict();
              displayRoute();
            "
          >
            Estimate your price
          </button>
          <p>Ticket price: {{ Math.round(prediction * 0.012) }}$</p>
        </div>
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
import axios from "axios";
export default {
  data() {
    return {
      source: "",
      destination: "",
      airline: "",
      arrival: "",
      departure: "",
      stops: "",
      type: "",
      prediction: "",
    };
  },

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
          center: { lat: 22.397, lng: 82.644 },
          zoom: 4.5,
        });

        const pointA = new google.maps.LatLng(37.7749, -122.4194); // Example: San Francisco, CA
        const pointB = new google.maps.LatLng(40.7128, -74.006); // Example: New York, NY

        // Create a Polyline representing the direct air route
        const polyline = new google.maps.Polyline({
          path: [pointA, pointB],
          geodesic: true,
          strokeColor: "#FF0000",
          strokeOpacity: 1.0,
          strokeWeight: 2,
        });

        // Set the map for the Polyline
        polyline.setMap(map);

        // Now you can use the 'map' variable for further operations if needed
      } catch (error) {
        console.error("Error loading Google Maps:", error);
      }
    },
    predict() {
      let predictionData = {
        source_city: this.source,
        destination_city: this.destination,
        airline: this.airline,
        arrival_time: this.departure,
        departure_time: this.arrival,
        stops: this.stops,
        type: this.type,
      };

      console.log(predictionData);
      axios
        .post("http://127.0.0.1:8000/predict", predictionData)
        .then((response) => {
          // Handle successful response
          console.log(response.data[0]);
          this.prediction = response.data[0]; // Assuming you want to log the response data
        })
        .catch((error) => {
          // Handle error
          console.error(error);
        });
    },
    async displayRoute() {
      const { Map } = await google.maps.importLibrary("maps");
      let route = {
        source: this.source,
        destination: this.destination,
      };
      try {
        let cities = [
          { lat: 28.65553, lang: 77.23165 },
          { lat: 19.07283, lang: 72.88261 },
          { lat: 12.971599, lang: 77.594566 },
          { lat: 22.56263, lang: 88.36304 },
          { lat: 17.38405, lang: 78.45636 },
          { lat: 13.08784, lang: 80.27847 },
        ];
        let sourceCoords;
        let destinationCoords;

        for (let i = 0; i < cities.length; i++) {
          if (route.source == i + 1) console.log(cities[i].lat, cities[i].lang);
          sourceCoords = new google.maps.LatLng(cities[i].lat, cities[i].lang);
          console.log(sourceCoords);
          if (route.destination == i + 1) {
            destinationCoords = new google.maps.LatLng(
              cities[i].lat,
              cities[i].lang
            );
          }
        }
        const map = new Map(document.getElementById("map"), {
          center: { lat: 22.397, lng: 82.644 },
          zoom: 4.5,
        });
        const polyline = new google.maps.Polyline({
          path: [sourceCoords, destinationCoords],
          geodesic: true,
          strokeColor: "#FF0000",
          strokeOpacity: 1.0,
          strokeWeight: 2,
        });

        // Set the map for the Polyline
        polyline.setMap(map);
      } catch (error) {
        console.error("error displaying route: ", error);
      }

      console.log("route:", route);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");
#map {
  height: 100%;
  width: 60%;
  grid-column: span 2;
  margin-top: auto;
}
.app {
  margin-bottom: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: auto;
  height: 88%;
  background-color: var(--backgroundClr);
  border-radius: 5px;
  color: var(--backgroundClr);
  box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem rgba(34, 34, 34, 0.877);
  color: black;
  z-index: -1;
}

.predict-wrapper {
  width: 40%;
  display: flex;
  height: 100%;
  justify-content: center;
}

.select-form {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  margin: auto;
}
.form {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50px;
}

label,
select {
  width: 50%;
  height: 100%;
  font-size: 1.3rem;
}

select:focus,
select {
  outline: none;
  border: 2px solid var(--landingClr);
  border-radius: 5px;
  background-color: white;
}

button {
  color: white;
  border: none;
  border-radius: 5px;
  height: 2.5em;
  width: 30%;
  background-color: #495e57;
  font-size: 1rem;
  font-weight: bold;
  transition: 0.7s;
}

button:hover {
  color: #495e57;
  background-color: white;
  border: 1px solid #495e57;
  transition: 0.7s;
}

p {
  font-size: 1.3rem;
  font-weight: 500;
}
</style>

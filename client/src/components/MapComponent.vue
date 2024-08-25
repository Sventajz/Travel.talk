<script>
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import axios from "axios";
import { computed, onMounted, ref, watch } from "vue";
import { Loader } from "@googlemaps/js-api-loader";
import { useGeolocation } from "../useGeolocation";
const GOOGLE_MAPS_API_KEY = process.env.VUE_APP_GOOGLE_API;
const url = "http://localhost:5000/api/";

export default {
  setup() {
    const { coords } = useGeolocation();
    const currPos = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude,
    }));

    const mapDiv = ref(null);
    let map = null;

    async function initializeMap() {
      const loader = new Loader({
        apiKey: GOOGLE_MAPS_API_KEY,
        version: "weekly",
      });

      try {
        await loader.load();
        const { Map } = await google.maps.importLibrary("maps");

        // Initialize the map
        map = new Map(mapDiv.value, {
          center: currPos.value,
          zoom: 3.1,
        });

        // Load the markers
        const locations = await main();
        loadMarkers(locations);
      } catch (error) {
        console.error("Error loading Google Maps:", error);
      }
    }

    async function getPosts() {
      try {
        const response = await axios.get(url);
        return response.data.map((post) => post.place);
      } catch (err) {
        console.log(err);
      }
    }

    async function geoCode(location) {
      // Implement geocoding logic here
      // Returning a mock location object for example
      return new Promise((resolve) => {
        resolve({ lat: 0, lng: 0 });
      });
    }

    async function main() {
      try {
        const locationData = await getPosts();
        const geoResults = await Promise.all(locationData.map(geoCode));
        return geoResults;
      } catch (error) {
        console.error("Error in main:", error);
      }
    }

    function loadMarkers(locations) {
      locations.forEach((location) => {
        const marker = new google.maps.Marker({
          position: location,
          map: map,
        });
      });
    }

    onMounted(() => {
      initializeMap();
    });

    return { currPos, mapDiv };
  },
};
function geoCode(visited) {
  return new Promise((resolve, reject) => {
    axios
      .get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: {
          address: visited,
          key: GOOGLE_MAPS_API_KEY,
        },
      })
      .then(function (response) {
        var location = response.data.results[0].geometry.location;
        var locationString = JSON.stringify(location);
        resolve(locationString);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}
//geoCode();
</script>

<template>
  <div class="maps">
    <div ref="mapDiv" style="width: 100%; height: 93%"></div>
    <div id="location"></div>
  </div>
</template>

<style>
.maps {
  height: 100%;
  width: 100%;
}
</style>

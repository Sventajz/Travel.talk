<script>
/* eslint-disable no-undef */
import { Loader } from "@googlemaps/js-api-loader";
import axios from "axios";
import { computed, onMounted, ref } from "vue";

//import { geoCode } from '../geocode';
import { useGeolocation } from "../useGeolocation";
const GOOGLE_MAPS_API_KEY = process.env.VUE_APP_GOOGLE_API;
const url = "http://localhost:5000/api/posts";

const data = async function getPosts() {
  // eslint-disable-next-line no-async-promise-executor
  const res = await axios.get(url);
  const data = res.data;
  console.log(data);
  return data;
};

console.log("mapcomp:L ", data);

export default {
  setup() {
    const { coords } = useGeolocation();
    const currPos = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude,
    }));

    const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY });
    const mapDiv = ref(null);

    onMounted(async () => {
      await loader.load();

      new google.maps.Map(mapDiv.value, {
        center: currPos.value,
        zoom: 2.1,
      });
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
          key: process.env.VUE_APP_GOOGLE_API,
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
geoCode();
</script>

<template>
  <div class="maps">
    <div ref="mapDiv" style="width: 100%; height: 100%"></div>
    <div id="location"></div>
  </div>
</template>

<style>
.maps {
  height: 100%;
  width: 100%;
}
</style>

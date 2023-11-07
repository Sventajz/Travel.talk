<script>
/* eslint-disable no-undef */
import { Loader } from "@googlemaps/js-api-loader";
import axios from "axios";
import { computed, onMounted, ref, watch } from "vue";
//import { geoCode } from '../geocode';
import { useGeolocation } from "../useGeolocation";
const GOOGLE_MAPS_API_KEY = "AIzaSyACDiuKzL2tNd_q26PkXRFiLBtX5suP4Cg";
const url = "http://localhost:5000/api/posts";

export default {
  setup() {
    // this function gets the posts from database
    async function getPosts() {
      try {
        const response = await axios.get(url);
        let array = [];
        for (let i = 0; i < Object.keys(response.data).length; i++) {
          array.push(response.data[i].place);
        }
        return array;
      } catch (err) {
        console.log(err);
      }
    }

    async function main() {
      let locationdata = await getPosts();
      console.log("this is location data: ", locationdata);
      console.log(locationdata.length);

      let geoResult = []; // declare geoResult outside of the loop

      // this should loop all the locations and their coordinates and add that marker to the map
      for (let i = 0; i < locationdata.length; i++) {
        // assign the value returned by geoCode() function to geoResult
        geoResult.push(await geoCode(locationdata[i]));

        console.log("geo res: ", geoResult);
        console.log(geoResult.locationString);

        // You can now use the `geoResult` variable to access the result of `geoCode()` function outside of the loop.
      }

      console.log("this is geoResult", geoResult);
      return geoResult;
    }

    watch(async () => {
      await getPosts();
      await main();
    });

    const { coords } = useGeolocation();
    const currPos = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude,
    }));
    const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY });
    const mapDiv = ref(null);
    onMounted(async () => {
      // function that returns places data
      async function run() {
        const result = await main();
        console.log("hello", result);
        return result;
      }
      let runVal = await run();
      var jsVal = JSON.stringify(runVal);
      jsVal = JSON.parse(jsVal);
      console.log("jsVal:", jsVal[0]);

      main();
      await loader.load();
      var map = new google.maps.Map(mapDiv.value, {
        center: currPos.value,
        zoom: 2,
      });
      for (let i = 0; i < jsVal.length; i++) {
        var marker = new google.maps.Marker({
          position: JSON.parse(jsVal[i]),
          Text: "hello world",
        });
        marker.setMap(map);
        main();
      }
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
          key: "AIzaSyACDiuKzL2tNd_q26PkXRFiLBtX5suP4Cg",
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

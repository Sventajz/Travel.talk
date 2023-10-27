<script>
/* eslint-disable no-undef */
import { Loader } from "@googlemaps/js-api-loader";
import axios from "axios";
import { computed, onMounted, ref, watch } from "vue";
import { useGeolocation } from "../useGeolocation";

// const GOOGLE_MAPS_API_KEY = process.env.VUE_APP_GOOGLE_API;
console.log("this is google maps api: ", process.env.VUE_APP_GOOGLE_API);
const url = "http://localhost:5000/api/posts";

export default {
  mounted() {
    console.log(process.env.GOOGLE_API);
  },
  setup() {
    const { coords } = useGeolocation();
    const currPos = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude,
    }));
    const loader = new Loader({ apiKey: process.env.VUE_APP_GOOGLE_API });
    const mapDiv = ref(null);
    onMounted(async () => {
      // function that returns places data
      // async function run() {
      //   const result = await main();
      //   console.log("hello", result);
      //   return result;
      // }
      // let runVal = await run();
      // var jsVal = JSON.stringify(runVal);
      // jsVal = JSON.parse(jsVal);
      // console.log("jsVal:", jsVal[0]);

      await loader.load();
      new google.maps.Map(mapDiv.value, {
        center: currPos.value,
        zoom: 2,
      });

      // for (let i = 0; i < jsVal.length; i++) {
      //   var marker = new google.maps.Marker({
      //     position: JSON.parse(jsVal[i]),
      //     Text: "hello world",
      //   });
      //   marker.setMap(map);
      // }
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

        let geoResult = []; // declare geoResult outside of the loop

        // this should loop all the locations and their coordinates and add that marker to the map
        for (let i = 0; i < locationdata.length; i++) {
          // assign the value returned by geoCode() function to geoResult
          geoResult.push(await geoCode(locationdata[i]));

          // You can now use the `geoResult` variable to access the result of `geoCode()` function outside of the loop.
        }

        return geoResult;
      }

      watch(async () => {
        await getPosts();
        await main();
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
        console.log("this is location string", locationString);
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
  </div>
</template>

<style>
.maps {
  height: 100%;
  width: 100%;
}
</style>

import axios from "axios";
/* eslint-disable no-undef */

//call geocode

export function geoCode(visited) {
  return new Promise((resolve, reject) => {
    axios
      .get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: {
          address: visited,
          key: "AIzaSyCpaXgq5EN9sDtaNwj6jX7DzhRyRGmPYB4",
        },
      })
      .then(function (response) {
        var location = response.data.results[0].geometry.location;
        var locationString = location;
        resolve(locationString);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

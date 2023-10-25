import axios from "axios";
/* eslint-disable no-undef */

//call geocode

export function geoCode(visited) {
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
        var locationString = location;
        resolve(locationString);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

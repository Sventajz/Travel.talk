/* es-lint no-undef */

import { onMounted, onUnmounted, ref } from "vue";
 //import axios from 'axios'
 //import { geoCode } from '../src/geocode';
 //const url = "http://localhost:5000/api/posts";
export function useGeolocation() {
//   async function getUser() {
//     try {
//       const response = await axios.get(url);
//       let array = []
//       for (let i = 0; i<Object.keys(response.data).length;i++){
//         array.push(response.data[i].place)
//       }
//       return array;
//     } catch (err) {
//       console.log(err);
//     }
//   }
  
//   async function main () {
//   let locationdata = await getUser()
//   console.log('this is location data: ', locationdata[1])
//   console.log(locationdata.length)
//   for ( let i = 0; i<locationdata.length;i++){
//     console.log('geocoding data',geoCode(locationdata[i]).then((response)=>console.log('geo res: ',response)));
//     }
//   }

// main()
  const coords = ref({ latitude: 44.85302679999999, longitude: 13.8410653 });
  const isSupported = "navigator" in window && "geolocation" in navigator;


 
  let watcher = null;
  onMounted(() => {
    if (isSupported)
      watcher = navigator.geolocation.watchPosition(
        (position) => (coords.value = position.coords)
      );
  });
  onUnmounted(() => {
    if (watcher) navigator.geolocation.clearWatch(watcher);
  });
  return { coords, isSupported };
}

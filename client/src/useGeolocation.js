/* es-lint no-undef */

import { onMounted, onUnmounted, ref } from "vue";

export function useGeolocation() {

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

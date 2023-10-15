<template>
    <div id="map"></div>
</template>


<script lang="ts">
declare const google: any; 
</script>


<script setup lang="ts">

interface Props {
    coords: { lat: number, lng: number } ;
}

const props = defineProps<Props>();
const coords = toRef(props, 'coords');

const initMap = async ( position: { lat: number, lng: number }) => {
  const { Map } = await google.maps.importLibrary("maps");

  const map = new Map(document.getElementById("map"), {
    center: position,
    zoom: 18,
    // disableDefaultUI: true
  });

  // const icon = 'http://localhost:3000/marker.png';
  
  const marker = new google.maps.Marker({
    position,
    // icon
  });

  marker.setMap(map);

}

onMounted(() => {
    initMap({ lat: Number(coords.value.lat), lng: Number(coords.value.lng) });
})


</script>

<style lang="scss" scoped>


  #map {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  } 



</style>
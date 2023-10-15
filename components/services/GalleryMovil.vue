

<template>
    <vue-easy-lightbox
        :visible="visible"
        :imgs="images.map( image => image.src)"
        :index="index"
        @hide="handleHide"
    ></vue-easy-lightbox>
    <Swiper
      :loop="true"
      :pagination="true"
      :modules="[Pagination]"
    >
      <SwiperSlide v-for="(image, idx) in images" >
            <img 
                :src="image.src" 
                :alt="image.alt" 
                @click="() => showImg(idx)" >
      </SwiperSlide>
    </Swiper>
  </template>

<script setup lang="ts">
import VueEasyLightbox from 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.esm.min.js'
import 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.css'
import { Pagination } from 'swiper';
import { Image } from '~/interfaces';

interface Props {
    images: Image[];
}

const props = defineProps<Props>();
const images = toRef(props, 'images');

const index = ref<number>(0);
const visible = ref<boolean>(false);

const showImg = (idx: number) => {
    index.value = idx;
    visible.value = true
}

const handleHide = () => {
  visible.value = false
}

</script>



<style scoped>

.swiper {
  width: 100%;
}


img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: .8rem;
}

@media (max-width: 767.98px) { 
  img {
    height: 280px;;
  }
}



</style>
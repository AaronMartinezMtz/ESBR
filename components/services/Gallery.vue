
<template>
    <vue-easy-lightbox
        :visible="visible"
        :imgs="images.map( image => image.src)"
        :index="index"
        @hide="handleHide"
    ></vue-easy-lightbox>

    <div  class="row justify-content-end">
      <div v-for="(image, idx) in images"
          :key="idx"
          :class="
            images.length > 1 && images.length > max && idx > max-1 
              ? 'd-none' : idx == 0 ? 'col-md-6 p-0' : 'col-md-3 p-0' ">
          <div style="position: relative;" class="m-1">
          <img 
          :class="(idx == 0 && images.length > 3 ) ? 'image-fist image' : 'image'"
          @click="() => showImg(idx)"
          :src="image.src" :alt="image.alt">
            <div class="image image-end" 
              v-if="images.length > max && idx == images.length-(images.length-max+1)"
              @click="() => showImg(idx)">
              <span>{{(images.length - max)}}+</span>
            </div>
          </div>
      </div> 
    </div>
</template>




<script lang="ts" setup>
import VueEasyLightbox from 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.esm.min.js'
import 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.css'
import { Image } from '~~/interfaces';

interface Props {
    images: Image[];
}

const props = defineProps<Props>();
const images = toRef(props, 'images');

const index = ref<number>(0);
const visible = ref<boolean>(false);
const max = ref<number>(5);

const showImg = (idx: number) => {
    index.value = idx;
    visible.value = true
}

const handleHide = () => {
  visible.value = false
}


</script>


<style>
  .image-fist {
    position: absolute;
    height: 30.5rem !important;
  }

  .image {
    width: 100%;
    height: 15rem;
    cursor: pointer;
    object-fit: cover;
    border-radius: .5rem;
  }

  @media (max-width: 576px) { 
    .image {
      height: 10rem;
    }
  }

  .image-end {
    position: absolute;
    bottom: 0;
    background-color: rgba(0,0,0,.5);
    color: white;
    display: flex;
    justify-content: center;
    border-radius: .5rem;
    align-items: center;
    font-size: 3rem;
    font-weight: 100;
  }
</style>
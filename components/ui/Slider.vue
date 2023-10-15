<template>
  <Swiper
      class="swiper"
      :loop="true"
      :centeredSlides="true"
      :autoplay="{
          delay: 10000,
          disableOnInteraction: false,
      }"
      :pagination="{
          clickable: true,
      }"
      :modules="[Pagination, Autoplay]"
  >
    <SwiperSlide v-for="item in items" >
      <div class="slider-contentainer" :style="`background-image: url(${item.image});`" >
        <div class="text-contentainer d-flex align-items-center">
          <div class="text-content">
            <div class="text-title">{{ item.title }}</div>
            <div class="text-second mt-4">{{ item.text }}</div>
            <div class="mt-5 buttons-container">
              <a class="btn btn-primary me-3">Conocenos</a>
              <a class="btn btn-outline-primary">Promociones</a>
            </div>
          </div>
        </div>

      </div>
    </SwiperSlide>
  </Swiper>
</template>


<script setup lang="ts">
import { Pagination, Autoplay } from 'swiper';

interface Information {
  image: string;
  title: string;
  text?: string;
}

interface Props {
  items: Information[]
}

const props = defineProps<Props>();
const items = toRef(props, 'items');

</script>



<style lang="scss" scoped>

.slider-contentainer {
  width: 100%;
  height: 35em;
  position: relative; 
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);
}

.swiper {
    width:100%;
    padding-right:0;
    padding-left:0;
    margin-right:auto;
    margin-left:auto
}

.text-contentainer {
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;

  .text-content {
    width: 55%;
    color: #fff;
    margin-left: 5%;

    .text-title {
      font-size: 1.6rem;
      text-transform: uppercase;
      font-weight: bold;
    }

    .text-second {
      font-size: 1.3rem;
    }

  
  }

}


@media (max-width: 767.98px) { 
  .slider-contentainer {
    height: 25em;
  }

  .text-contentainer {

    .text-content {
      width: 100% !important; 
      margin: 0 10px !important;


      .text-title {
        font-size: 1rem !important;
        text-transform: uppercase;
        font-weight: bold;
      }
      .text-second {
        font-size: .9rem !important;
      }

      .buttons-container {
        text-align: center;
      }

    }
  }
  

}




</style>
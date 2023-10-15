

<template>
    <div class="card service-card p-3 mx-0 mx-md-2 my-2 my-md-0">
        <img 
            class="service-img-card"
            :src="service.image" 
            :alt="service.title">
        <div class="text-secondary fw-bold text-center mt-3">{{ service.title.toUpperCase() }}</div>
        <ul class="services-list p-0 mt-3">
            <li v-for="item in service.items">{{ item }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">

interface Service {
    title: string;
    image: string;
    items: string[];
}

interface Props {
  service: Service
}

const props = defineProps<Props>();
const service = toRef(props, 'service');

</script>

<style lang="scss" scoped>
    .service-card {
        border-radius: 20px;
        padding: 32px 24px;
        margin: 12px;
        text-decoration: none;
        z-index: 0;
        overflow: hidden;
        min-height: 480px;

        img {
            border-radius: 20px;
            height: 200px;
            object-fit: cover;
        }

        &:before {
            content: "";
            position: absolute;
            z-index: -1;
            top: -100px;
            right: -100px;
            background: #43B02A;
            height: 200px;
            width: 200px;
            border-radius: 100%;
            transform: scale(1);
            transform-origin: 50% 50%;
            transition: transform 0.5s ease-out;
        }

        &:hover:before {
            transform: scale(1.4);
        }
    }


    .service-card:hover {
    }


    ul.services-list {
        list-style: none;
        font-size: 15px;

        li::before {
            font-family: "Font Awesome 5 Free"; 
            font-weight: 900; 
            content: "\f1ec";
            margin-right:8px;
            font-size: 12px;
            color: #305E5D;
        }
    }
</style>
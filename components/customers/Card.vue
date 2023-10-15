

<template>
    <div class="customer-card bg-white p-2">
        <img 
            :src="customer.image" 
            :alt="customer.name"
        >
    </div>
</template>

<script setup lang="ts">

interface Customer {
    name: string;
    image: string;
}

interface Props {
  customer: Customer
}

const props = defineProps<Props>();
const customer = toRef(props, 'customer');


</script>

<style lang="scss" scoped>
    .customer-card {
     
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 100%;
            height: 100px;
            object-fit: contain;
        }
    }
</style>
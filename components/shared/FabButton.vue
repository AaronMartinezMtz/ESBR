<template>
    <div class="fab-button">
        <NuxtLink  
            to="https://wa.me/+529981342342?text=Hola,+me+gustaría+obtener+más+información+sobre+asesorías." 
            target="_blank"
            class="btn-rounded-whats">
           <span class="m-0"><i class="fab fa-whatsapp"></i></span>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>


.fab-button {
    bottom: 1rem;
    right: 1.8rem;
    position: fixed;
    z-index: 2;
}

.btn-rounded-whats {
    height: 60px;
    width: 60px;
    background-color: #25d366;
    border-color: #25d366;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.btn-rounded-whats i {
    color: white;
    font-size: 30px;
}

</style>
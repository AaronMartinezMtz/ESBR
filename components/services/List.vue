

<template>
    <div class="row mt-5">

        <div class="col-12 col-md-4 p-0 " v-for="service in services">
            <ServicesCard 
                :service="service"
            />
        </div>

    </div>
</template>

<script setup lang="ts">

interface Service {
    title: string;
    image: string;
    items: string[];
}


const services = ref<Service[]>([
    {
        image: 'https://i.pinimg.com/736x/11/95/73/11957364e71a038fcd17e9a87ae88fad.jpg',
        title: 'Matemáticas Básicas',
        items: [
            'Primaria',
            'Secundaria',
            'Teoria de numeros',
        ],
    },
    {
        image: 'https://clasesytutores.com/wp-content/uploads/2021/07/FISICA.jpg',
        title: 'Física',
        items: [
            'Mecánica.',
            'Termodinámica',
            'Óptica.',
            'Acústica',
            'Electromagnetismo'
        ],
    },
    {
        image: 'https://fundacioncarlosslim.org/wp-content/uploads/2021/12/curso-integral-definida-calculo-integral-1.jpg',
        title: 'Matemáticas Avanzadas',
        items: [
            'Calculo Diferencial',
            'Calculo Integral',
            'Límites',
            'Geometría Analítica'
        ],
    }
])

</script>

<style lang="scss" scoped>

</style>



<template>
    <header>
        <nav class="navbar navbar-expand-lg fixed-top bg-white">
            <div class="container nav-container bg-white">

                <a class="navbar-brand" href="#">
                    <img 
                        src="/images/logo1.png" 
                        alt="Bootstrap" 
                        height="50"
                        class="me-2">
                    <span class="fw-bold c-secondary">El profe Eduardo Bautista</span>
                </a>

                <button 
                    class="navbar-toggler py-1" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <i class="fa-solid fa-bars fa-lg"></i>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0 text-center">

                        <li class="nav-item">
                            <NuxtLink class="nav-link" aria-current="page" to="/">Inicio</NuxtLink>
                        </li>

                        <li class="nav-item">
                            <NuxtLink 
                                class="nav-link" 
                                to="#servicios">Servicios</NuxtLink>
                        </li>

                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="#acerca">Nosotros</NuxtLink>
                        </li>

                        <!-- <li class="nav-item">
                            <a class="nav-link" href="#">Productos</a>
                        </li> -->

                        <!-- <li class="nav-item">
                            <a class="nav-link" href="#">Promociones</a>
                        </li> -->

                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="#contacto">Contacto</NuxtLink>
                        </li>
                    </ul>


                    
                    <ul class="navbar-nav mb-2 mb-lg-0 text-center">

                        <li class="nav-item">
                            <NuxtLink  
                                to="tel:+529981589395"
                                class="nav-link tel-link" >
                                <i class="fa-solid fa-phone fa-xl"></i> 
                                (998) 134 2342
                            </NuxtLink>
                        </li>

                        <li class="nav-item">
                            <NuxtLink 
                                to="https://www.facebook.com/la.magia.de.las.matematicas.2018"
                                target="_blank"
                                class="nav-link" >
                                <i class="fa-brands fa-facebook fa-xl"></i>
                            </NuxtLink>
                        </li>

                         <li class="nav-item">
                            <NuxtLink 
                                to="https://www.instagram.com/eduardo.bautista.52035/"
                                target="_blank"
                                class="nav-link" >
                               <i class="fa-brands fa-instagram fa-xl"></i>
                            </NuxtLink>
                        </li>


                    </ul>


                </div>

            </div>
        </nav>

    </header>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
    img.logo-image {
        border-radius: 100%;
    }

    i.fa-phone, a.tel-link {
        color: #305E5D;
    }
    i.fa-facebook {
        color: #2177F2;
    }

    i.fa-instagram {
        color: #D300C5;
    }

        
    
</style>
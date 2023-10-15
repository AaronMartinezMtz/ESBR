

<template>
    <footer class="bg-secondary d-flex align-items-center">
        <div class="container py-4">


            <div class="row mb-4">
                <ul class="navbar-nav d-flex flex-row justify-content-center">
                    <li class="nav-item social-item mx-2">
                        <NuxtLink  
                            to="https://www.facebook.com/la.magia.de.las.matematicas.2018" 
                            target="_blank"
                            class="nav-link p-0"><i class="fa-brands fa-facebook fa-xl"></i>
                        </NuxtLink>
                    </li>
                    <li class="nav-item social-item mx-2">
                        <NuxtLink
                            to="https://www.instagram.com/eduardo.bautista.52035/"
                            target="_blank"
                            class="nav-link p-0" ><i class="fa-brands fa-instagram fa-xl"></i>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            
            <div class="row">


                <div class="col-md-2 d-flex justify-content-center align-items-center">
                    <NuxtLink to="/" class="navbar-brand">
                        <img 
                        src="/images/logo1.png" 
                        alt="LOGO JAMER"
                        width="100"
                        height="100">
                    </NuxtLink>
                </div>


                <div class="col-md-4 d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-location-dot fa-xl me-3"></i>
                    <p>Av. Miguel Hidalgo Supermanzana 94, 77517 Cancún, Q.R.</p>
                </div>
                
                
                <div class="col-md-3 mt-4 mt-md-0">
                    <p class="fw-bold">Menú</p>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Nosotros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Servicios</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Productos</a>
                        </li>
                    </ul>
                </div>


                <div class="col-md-3 mt-4 mt-md-0">
                    <p class="fw-bold">Contacto</p>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="tel:+529981589395"><i class="fa-solid fa-phone fa-xl me-3"></i>(998) 352 7483</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href=""><i class="fa-solid fa-envelope fa-xl me-3"></i> email@mail.com</a>
                        </li>
                        
                    </ul>
                </div>


                <div class="col-12 mt-5">
                    <p class="m-0 text-center text-copyright">Copyright &copy; {{ new Date().getFullYear() }}</p>
                </div>



            </div>

        </div>
    </footer>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

    img.logo-image {
        border-radius: 100%;
    }

    footer {
        border-top: 5px solid #43B02A;
    }

    p.text-copyright {
        font-size: 14px;
    }

    a.nav-link {
        padding-bottom: 0;
    }

    .social-item {
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 100%;
        height: 40px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>
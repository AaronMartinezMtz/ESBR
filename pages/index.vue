

<template>

    <UISlider 
        :items="items"
    />

    <!-- SERVICES -->
    <section id="servicios">
        <div class="container py-5">
            <h2 class="text-primary mb-3">Servicios</h2>
            <div class="liner"></div>
            <ServicesList />

        <!-- <div class="services-us">
            <img 
                src="https://theressa.net/images/articles/61cfa330e5ec4-fumigacion-saneamiento-ambiental-1200x600.jpg" 
                alt="">
        </div>   -->

        
            <h3 class="text-primary mb-3 text-center mb-4 mt-5">Galería</h3>
            <div class="d-none d-md-block">
                <ServicesGallery 
                    :images="[
                        { src: 'https://esbr05.files.wordpress.com/2019/09/medalla.jpg', alt: 'Matemáticas 1'},
                        { src: 'https://esbr05.files.wordpress.com/2019/02/img-20190202-wa0106.jpg', alt: 'Matemáticas 2'},
                        { src: 'https://esbr05.files.wordpress.com/2019/09/medalla.jpg', alt: 'Matemáticas 3'},
                        { src: 'https://esbr05.files.wordpress.com/2019/02/img-20190202-wa0106.jpg', alt: 'Matemáticas 4'},
                        { src: 'https://esbr05.files.wordpress.com/2019/09/medalla.jpg', alt: 'Matemáticas 5'},
                        { src: 'https://esbr05.files.wordpress.com/2019/02/img-20190202-wa0106.jpg', alt: 'Matemáticas 6'},
                        { src: 'https://esbr05.files.wordpress.com/2019/09/medalla.jpg', alt: 'Matemáticas 7'},
                        { src: 'https://esbr05.files.wordpress.com/2019/02/img-20190202-wa0106.jpg', alt: 'Matemáticas 8'},
                    ]"
                />
            </div>
            <div class="d-block d-md-none">
                <ServicesGalleryMovil 
                    :images="[
                        { src: 'https://esbr05.files.wordpress.com/2019/09/medalla.jpg', alt: 'Matemáticas 1'},
                        { src: 'https://esbr05.files.wordpress.com/2019/02/img-20190202-wa0106.jpg', alt: 'Matemáticas 2'},
                        { src: 'https://esbr05.files.wordpress.com/2019/09/medalla.jpg', alt: 'Matemáticas 3'},
                        { src: 'https://esbr05.files.wordpress.com/2019/02/img-20190202-wa0106.jpg', alt: 'Matemáticas 4'},
                        { src: 'https://esbr05.files.wordpress.com/2019/09/medalla.jpg', alt: 'Matemáticas 5'},
                        { src: 'https://esbr05.files.wordpress.com/2019/02/img-20190202-wa0106.jpg', alt: 'Matemáticas 6'},
                        { src: 'https://esbr05.files.wordpress.com/2019/09/medalla.jpg', alt: 'Matemáticas 7'},
                        { src: 'https://esbr05.files.wordpress.com/2019/02/img-20190202-wa0106.jpg', alt: 'Matemáticas 8'},
                    ]"
                />
            </div>



        </div>

    </section>
    <!-- END SERVICES -->




    <!-- ABOUT US -->
    <section class="bg-white" id="acerca">
        <div class="container py-2">
            
            <div class="row">
                
                <div class="col-md-6 d-flex flex-column justify-content-center">
                    
                    <h2 class="text-primary mb-3">Acerca de nosotros</h2>
                    <div class="liner"></div>
                    
                    <p class="mt-5">Estamos dedicados a proporcionar asesorías de matemáticas y física de alta calidad para estudiantes de todos los niveles. Nuestra misión es ayudar a nuestros estudiantes a comprender y dominar estas dos disciplinas, superar desafíos académicos y alcanzar su máximo potencial.</p>
                        
                    <p>
                        <strong> Clases Individuales y Grupales:</strong> Ofrecemos asesorías tanto en sesiones individuales como en grupos pequeños, permitiendo a los estudiantes elegir el formato que mejor se adapte a sus necesidades.
                    </p>
                    <p>
                        <strong> Preparación para Exámenes:</strong> Ayudamos a los estudiantes a prepararse para exámenes académicos y pruebas estandarizadas, brindándoles la confianza y el conocimiento necesarios para el éxito.
                    </p>

                    <p>
                        <strong>Apoyo en Tareas y Proyectos:</strong> Nuestros instructores están disponibles para ayudar a los estudiantes a abordar tareas y proyectos específicos, garantizando un entendimiento completo de los conceptos.
                    </p>

                    <p>
                        <strong>Asesoramiento a Largo Plazo:</strong> No solo nos enfocamos en el corto plazo; también ayudamos a los estudiantes a construir una base sólida en matemáticas y física para un éxito a largo plazo en sus carreras académicas.
                    </p>

                            
                </div>
                        

                <div class="col-md-6">
                    
                    <div class="row">
                        
                        <div class="col-md-6 d-none d-md-block p-0 p-md-3">
                            
                            <div class="img-one">
                                <img 
                                src="https://i.pinimg.com/550x/8e/79/ee/8e79ee1a121df98ae91de3ebd109c9a2.jpg" 
                                alt=""
                                >
                            </div>
                            
                        </div>
                        
                        <div class="col-md-6 p-0 p-md-3">
                            
                            <div class="img-two">
                                <img 
                                src="https://pbs.twimg.com/media/EPbx_ZoXUAAolKT.jpg" 
                                alt=""
                                >
                            </div>
                            
                        </div>
                        
                    </div>
                    
                    
                </div>
                        
            </div>
                    
        </div>
    </section>
    <!-- END ABOUT US -->
                
                
    <!-- CUSTOMERS -->
    <section>
        <div class="container py-5">
            <div class="row">
                <h2 class="text-primary text-center">Clientes que confían en nosotros</h2>
                <CustomersList />
            </div>
        </div>
    </section>
    <!-- END CUSTOMERS -->

    

    <ContactForm />

</template>

<script setup lang="ts">

    interface Information {
        image: string;
        title: string;
        text?: string;
    }

    const items = ref<Information[]>([
        {
            image: 'https://www.educaciontrespuntocero.com/wp-content/uploads/2018/04/matematicas-978x652.jpg',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit dignissimos veniam ex debitis tempore.',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit dignissimos veniam ex debitis tempore impedit labore quidem porro provident odio.'
        },
        {
            image: 'https://www.educarchile.cl/sites/default/files/inline-images/imagen-curso-matematica.png',
            title: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            text: 'he point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here".'
        },
        {
            image: 'https://elestudiantedigital.com/wp-content/uploads/2020/05/curso-en-linea-de-matematicas.jpg',
            title: 'There are many variations of passages of Lorem Ipsum available.',
            text: 'If you are going to use a passage of Lorem Ipsum.'
        }
    ])


    
</script>

<style lang="scss" scoped>


    .img-one {
        width: 100%;
        height: 500px;
        margin-top: 100px;
    }

    .img-two {
        width: 100%;
        height: 500px;
    }

    .img-one img,
    .img-two img {
        border-radius: 20px;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    


    .services-us {
    img {}
    }

</style>
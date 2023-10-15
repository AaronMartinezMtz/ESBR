

<template>
    <section id="contacto" class="bg-white">
        <div class="container py-5">

            <div class="row">

                <div class="col-md-6 px-0 pe-md-5">

                    <h2 class="text-primary mb-3">Contáctanos</h2>
                    <div class="liner"></div>
                    
                    <p class="subtitle mt-3" >Cuéntanos que tipo de asesoría necesitas y adecuaremos una ruta de aprendizaje para ti.</p>
                    
                    <form 
                        class="mt-5" 
                        @submit="onSubmit"
                        autocomplete="off">

                        <div class="col-12 mb-2">
                            <label for="inputUserEmail">Nombre completo</label>
                            <input 
                                type="text"
                                v-model="fullName"
                                id="inputUserName"
                                class="form-control mt-2"
                                placeholder="Nombre completo" />
                            <span class="text-danger"><small>{{errors.fullName}}</small></span>
                        </div>

                        <div class="col-12 mb-2">
                            <label for="inputUserEmail">Correo electrónico</label>
                            <input 
                                type="email"
                                v-model="email"
                                id="inputUserEmail"
                                class="form-control mt-2"
                                placeholder="Correo electrónico" />
                            <span class="text-danger"><small>{{errors.email}}</small></span>
                        </div>

                        <div class="col-12 mb-2">
                            <label for="inputUserPhone">Teléfono</label>
                            <vue-tel-input 
                                v-model="phone"
                                class="form-control mt-2"
                                id="inputUserPhone"
                                v-bind="telProps"></vue-tel-input>
                            <span class="text-danger"><small>{{errors.phone}}</small></span>
                        </div>


                        <div class="col-12 mb-2">
                            <label for="inputUserMessage">¿En qué te podemos ayudar?</label>
                            <textarea
                                v-model="message"
                                id="inputUserMessage"
                                class="form-control mt-2"
                                placeholder="Escribe tu mensaje aquí..." 
                                rows="4"></textarea>
                            <span class="text-danger"><small>{{errors.message}}</small></span>
                        </div>


                        <div class="text-end">
                            <button 
                                class="btn btn-primary mt-2" 
                                type="submit"
                                :disabled="isLoding">{{isLoding ? 'Enviando...' : 'Contactar' }}</button>
                        </div>

                    </form>
                </div>

                <div class="col-md-6 px-0 ps-md-5 mt-4 mt-md-0">
                    <div class="map-content">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d930.1901659852476!2d-86.86550306856218!3d21.16192093854475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1697403241624!5m2!1ses-419!2smx"
                            style="border:0; width: 100%; height: 100%;"  
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    

                </div>

            </div>

        </div>
    </section>
</template>

<script setup lang="ts">
import { ContactForm } from '~~/interfaces';
import { useForm, useField } from 'vee-validate';
import * as Yup from 'yup';
import Swal from 'sweetalert2'

const telProps = ref<any>({ 
    mode: "international",
    inputOptions: {
        placeholder: "(999)-999-9999",
    },
});

const isLoding = ref<boolean>(false);

const { errors, handleSubmit, setValues, values  } = useForm<ContactForm>({
    validationSchema: Yup.object({
        fullName: Yup.string()
            .required('Tu nombre es requerido.'),
        phone: Yup.string()
            .required('Tu número telefónico es requerido.')
            .min(10, 'Número telefónico inválido.'),
        message: Yup.string()
            .required('El mensaje es requerido.')
            .max(500, 'El mensaje es demasiado largo.'),
        email: Yup.string()
            .required('Tu correo electrónico es requerido.')
            .email('Ccorreo electrónico inválido.'),
    }),
    initialValues: {
        fullName: '',
        email: '',
        phone: '',
        message: '',
    },
});

const { value: fullName } = useField('fullName');
const { value: email } = useField('email');
const { value: phone } = useField('phone');
const { value: message } = useField('message');



const onSubmit = handleSubmit.withControlled( async ({ fullName, email, phone, message}) => {

    isLoding.value = true;

    const { data, error } = await useAsyncData<{status: boolean}>(
        'createLead',
        () => $fetch( `/leads/create`, {
            method: 'POST',
            baseURL: 'http://localhost:3000/api',
            body: { 
                fullName, 
                email, 
                phone: phone.replace(/ /g, ''), 
                message 
            }
        })
    );


    if ( data.value?.status ) {
        Swal.fire({
            title: '¡Gracias por contactarnos!',
            text: 'En breve nos pondremos en contacto contigo para brindate más información.',
            icon: 'success',
            showConfirmButton: false,
            timer: 3000,
            allowOutsideClick: false,
            allowEscapeKey: false,
        })
    } else {
        Swal.fire({
            title: 'Oops!',
            text: 'Ocurrio un error. Hable con el administrador.',
            icon: 'error',
            showConfirmButton: false,
            timer: 3000,
            allowOutsideClick: false,
            allowEscapeKey: false,
        })
    }
        
    isLoding.value = false;


});



</script>

<style lang="scss" scoped>

.map-content {
    height: 100%;
}

@media (max-width: 768px) {
    .map-content {
        height: 200px;
    }

}




</style>
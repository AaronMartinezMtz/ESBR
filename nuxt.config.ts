// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devServer: {
      port: 3000
    },
    app: {
        head: {
          htmlAttrs: {
            lang: 'en'
          },
          meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { hid: 'keywords', name: 'keywords', content: '' },
            { hid: 'og:title', name: 'og:title', content: 'EL PROFE EDUARDO BAUTISTA' },
            { hid: 'og:url', name: 'og:url', content: 'www.jamer.com' },
            { hid: 'og:image', name: 'og:image', content: '' },
            { hid: 'og:description', name: 'og:description', content: '' },

          ],
          title: 'EL PROFE EDUARDO BAUTISTA',
          link: [
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
            { rel: 'stylesheet', href:'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap' },
          ],
          script: [ 
            { src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB8mev9hA6gkTUpqQDLJuyPtfYTZ_UjNdc', defer: true},
            { src: 'https://kit.fontawesome.com/2fff93d78d.js', crossorigin: 'anonymous' },
            { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js', integrity: 'sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN', crossorigin: 'anonymous'},
          ]
        },
    },
    css: [
        '@/assets/css/custom.css',
    ],
    
    components: [
      { path: '~/components/shared', prefix: 'Shared' },
      { path: '~/components/contact', prefix: 'Contact' },
      { path: '~/components/customers', prefix: 'Customers' },
      { path: '~/components/services', prefix: 'Services' },
      { path: '~/components/ui', prefix: 'UI' },
      '~/components'
    ],
    modules: [
      'nuxt-swiper',
    ],
    runtimeConfig: {
      apiSecret: "123",
      public: {
        site: process.env.SITE || ":)",
      }
    },
})
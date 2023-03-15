// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    buildModules: [
        '@pinia/nuxt',
      ],
      modules: [
        '@nuxtjs/tailwindcss'
      ],
      css: [
        '@/assets/css/main.css',
      ]
    
    
})

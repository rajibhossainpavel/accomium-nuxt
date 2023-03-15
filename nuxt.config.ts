export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@sidebase/nuxt-auth'
  ],
  css: [
    '@/assets/css/main.css',
  ],
  auth: {
    isEnabled: true,
    origin: 'http://localhost:3000',
    basePath: '/ams',
    enableSessionRefreshPeriodically: false,
    enableSessionRefreshOnWindowFocus: true,
    enableGlobalAppMiddleware: false,
    defaultProvider: 'passport',
    globalMiddlewareOptions: {
      allow404WithoutAuth: true

    }
  },
  runtimeConfig: {
    passport: {
      baseUrl: process.env.PASSPORT_BASE_URL,
      clientId: process.env.PASSPORT_CLIENT_ID,
      clientSecret: process.env.PASSPORT_CLIENT_SECRET,
    }
  }

})

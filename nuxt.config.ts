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
    isEnabled: false,
    origin: 'http://localhost:3000',
    basePath: '/api/auth',
    enableSessionRefreshPeriodically: false,
    enableSessionRefreshOnWindowFocus: true,
    enableGlobalAppMiddleware: false,
    defaultProvider: undefined,
    globalMiddlewareOptions: {
      allow404WithoutAuth: true
    }
  }
})

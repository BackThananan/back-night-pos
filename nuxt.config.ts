// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      'IBM Plex Sans Thai': [100, 200, 300, 400, 500, 600, 700],
    }
  },
  // SET API PROXY
  routeRules: {
    // SET API POS
    '/pos-api/**': {
      proxy: {
        to: `${process.env.API_URL}/pos-api/**`,
        headers: {
          Accept: 'application/json',
        },
      },
    },
    // SET API BACKOFFICE
    '/backoffice-api/**': {
      proxy: {
        to: `${process.env.API_URL}/pos-backoffice-api/**`,
        headers: {
          Accept: 'application/json',
        },
      },
    },
  },
  runtimeConfig: {
    apiUrl: process.env.API_URL,
  },
})
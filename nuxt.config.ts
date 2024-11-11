// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      'IBM Plex Sans Thai': [100, 200, 300, 400, 500, 600, 700],
    }
  },
})
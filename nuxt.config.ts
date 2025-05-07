// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  css: [
    '~/assets/css/main.css',
  ],

  devtools: {
    enabled: true,
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
  ],

  ui: { // for `@nuxt/ui`
    fonts: true, // use `@nuxt/fonts`
  },

  image: { // for `@nuxt/image`
  },
})

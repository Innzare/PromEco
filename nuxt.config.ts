// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  yandexMaps: {
    apikey: 'e419efa4-26ff-449c-bbb3-5d21a3216406'
  },

  css: ['~/assets/styles/global.scss'],

  modules: ['@nuxt/icon', '@nuxtjs/tailwindcss', 'motion-v/nuxt', 'vue-yandex-maps/nuxt']
});

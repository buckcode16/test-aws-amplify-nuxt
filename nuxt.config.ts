// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@sidebase/nuxt-auth', '@nuxt/ui'],
  auth: {
    globalAppMiddleware: true,
    baseUrl: process.env.AUTH_ORIGIN,
    provider: {
      type: 'authjs',
    },
  },
  runtimeConfig: {
    dbUrl: process.env.DB_URL,
    authSecret: process.env.AUTH_SECRET,
  },
  colorMode: {
    preference: 'light',
  },
})

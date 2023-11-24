// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ['@sidebase/nuxt-auth', '@nuxt/ui'],
  auth: {
    baseUrl: 'http://3.216.72.67:3000',
    provider: {
      type: 'authjs',
    },
  },
  runtimeConfig: {
    dbUrl:
      'postgresql://postgres:root@localhost:5432/test-aws-amplify-nuxt?schema=public',
    authSecret: '633c945b94bb11d745725248b5daa7d2',
  },
  colorMode: {
    preference: 'light',
  },
})

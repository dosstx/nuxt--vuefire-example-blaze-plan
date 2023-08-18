export default defineNuxtConfig({
  // Having SSR allows us to use `nuxt generate`, turn it off if you don't care
  ssr: true,
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Nuxt + VueFire Blaze Plan Example',
      link: [
        {
          href: 'https://cdn.jsdelivr.net/npm/water.css@2/out/water.css',
          rel: 'stylesheet',
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/vuefire.svg',
        },
      ],
    },
  },

  css: ['~/assets/style.css'],

  nitro: {
    prerender: {
      // these routes are not dependent on any data and can be prerendered
      // it's a good idea to pre render all routes that you can
      routes: ['/', '/analytics'],
    },
    preset: 'firebase',

    // for the upcoming preset
    firebase: {
      gen: 2,
      nodeVersion: '18',
    },
  },

  modules: ['nuxt-vuefire', '@vueuse/nuxt'],

  vuefire: {
    emulators: {
      // uncomment this line to run the application in production mode without emulators during dev
      // enabled: false,
      auth: {
        options: {
          disableWarnings: true,
        },
      },
    },
    auth: true,

    // appCheck: {
    //   provider: 'ReCaptchaV3',
    //   // site key, NOT secret key
    //   key: '6LeS5q0nAAAAABH3u13ntLwuIOkiNjHlXJOXoN5T',
    //   isTokenAutoRefreshEnabled: true,
    // },

    config: {
      apiKey: "AIzaSyBmi_GgpLar7mEc6sY45m7DOQ_RxDPM2lc",
      authDomain: "nuxt-vuefire-2576f.firebaseapp.com",
      projectId: "nuxt-vuefire-2576f",
      storageBucket: "nuxt-vuefire-2576f.appspot.com",
      messagingSenderId: "1025496429698",
      appId: "1:1025496429698:web:ded72e04d514be6492309b",
      measurementId: "G-J9FPX367L6"
    },
  },

  experimental: {
    payloadExtraction: false,
  },

  // Customize this to your needs and try to server side render only what is needed
  // https://nuxt.com/docs/guide/concepts/rendering#hybrid-rendering
  routeRules: {
    // Make some pages client only (since we have an SPA)
    // useful for authenticated pages that require the user to be logged in to be
    // displayed
    '/admin': { ssr: false },
    '/login': { ssr: false },
    '/analytics': { ssr: false },
    // you don't need to add ssr: true to any route, it's the default
    // '/users': { ssr: true },
    // '/posts/new': { ssr: true },
    // '/emoji-panel': { swr: true },
  },
})

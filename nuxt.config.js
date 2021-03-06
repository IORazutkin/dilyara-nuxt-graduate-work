export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dilyara-graduate-work',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap' }
    ],
    script: [
      { src: 'https://www.gstatic.com/charts/loader.js' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/style.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
    '~/plugins/vuelidate',
    '~/plugins/formatters',
    '~/plugins/event-bus',
    '~/plugins/chart.client'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: [
      '~/assets/scss/_mixins.scss',
      '~/assets/scss/_style_resources.scss'
    ]
  },

  axios: {
    credentials: true,
    baseUrl: 'https://localhost:8443'
  },

  server: {
    // host: '0.0.0.0',
    port: 3000
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'client',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#f0f0f0' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', size: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', size: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', size: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
    ],
    script: [
      { src: '/js/app.js', body: true },
      { src: '/js/do-slide.min.js', body: true },
      { src: 'https://unpkg.com/swiper@7/swiper-bundle.min.js', body: true },
      { src: 'https://api-maps.yandex.ru/2.1/?lang=ru_RU', body: true },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/app",
    "@/assets/scss/app"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src:'~/plugins/gsap.js', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/moment',
    '@nuxtjs/google-fonts'
  ],
  //family=IBM+Plex+Sans:wght@200;300;400;700&family=PT+Sans:wght@400;700&display=swap
  // googleFonts: {
  //   families: {
  //     'IBM+Plex+Sans': {
  //       wght: [200, 300, 400, 700]
  //     },
  //     'PT+Sans': {
  //       wght: [400, 700]
  //     },
  //   },
  //   prefetch: true,
  //   preconnect: true,
  //   preload: true,
  //   display: 'swap'
  // },

  moment: {
    defaultLocale: 'ru',
    locales: ['ru']
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: 'https://rsp.fvds.ru/api'
  },
  env: {
    backend: 'https://rsp.fvds.ru/api'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

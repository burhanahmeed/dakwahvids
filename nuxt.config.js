
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    titleTemplate: '%s - A place where ilms are collected here',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/imgs/icon-dakwahvids.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;600;700;800;900&display=swap' }
    ],
    script: [
      { src: 'https://code.iconify.design/1/1.0.7/iconify.min.js' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/formatter'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-112771033-4'
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/chakra-ui/chakra-ui-vue/tree/develop/packages/nuxt-chakra
    // Doc: https://github.com/nuxt-community/emotion-module#readme
    '@chakra-ui/nuxt',
    '@nuxtjs/emotion',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
  ],
  chakra: {
    extendTheme: {
      colors: {
        brand: { /* ... */ }
      },
      fonts: {
        heading: '"Montserrat", sans-serif',
        body: '"Montserrat", sans-serif',
        mono: '"Montserrat", sans-serif'
      },
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}

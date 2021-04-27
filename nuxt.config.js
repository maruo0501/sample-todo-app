export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sample-todo-app',
    titleTemplate: '%s | sample-todo-app',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',  
  ],
  axios: {
    baseURL: "https://jsonplaceholder.typicode.com/"
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  // プログレスバーの設定
  loading: { color: '#FF8733' },
}

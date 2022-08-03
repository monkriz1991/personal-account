export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'LK',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'LK' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    'element-ui/lib/theme-chalk/index.css'
  ],

  webfontloader: {
    custom: {
      families: [
        'Montserrat',
      ],
      urls: [
        'https://fonts.googleapis.com/css?family=Montserrat:300,400,700,800&display=swap',
      ]
    }
  },
  

  plugins: [
    '@/plugins/vue-tel-input',
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://space.autopilotrent.ru',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    postcss: null,
  },

  loading: {
    color: 'blue',
    height: '5px'
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'access_token',
          maxAge: 60*60*24*5,
          global: true,
          type: 'bearer'
        },
        user: {
          property: '',
        },
        endpoints: {
          login: { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, url: 'http://space.autopilotrent.ru/token', method: 'post', propertyName: 'access_token' },
          logout: false,
          user: { url: 'http://space.autopilotrent.ru/users/get/me/', method: 'get' }
        },
        // tokenRequired: true,
        tokenType: '',
      },
    },
    cookie: {
      options: {
          sameSite: 'lax',
      },
    },
    redirect: {
      login: '/cabinet/',
      home: '/cabinet/',
      callback: '/',
      logout: '/'
    }
  },


}

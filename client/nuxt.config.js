const pkg = require("./package");

module.exports = {
  server: {
    port: process.env.PORT | 4000
  },

  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL
  },
  privateRuntimeConfig: {
    apiSecret: process.env.API_SECRET
  },
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.6.3/css/all.css",
        integrity:
          "sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/",
        crossorigin: "anonymous"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  router: {
    middleware: ["clearValidationErrors"]
  },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "./plugins/mixins/validation",
    "./plugins/mixins/user",
    "./plugins/axios"
  ],

  env: {
    baseUrl: process.env.BASE_URL // "https://jwt-auth.test.com/api/"
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "v1/auth/login",
            method: "post",
            propertyName: "token"
          },
          user: {
            url: "v1/auth/me",
            method: "get",
            propertyName: "data"
          },
          logout: {
            method: "get",
            url: "v1/auth/logout",
            method: "get"
          }
        }
      }
    },
    redirect: {
      login: "/auth/login",
      home: "/"
    },
    plugins: ["./plugins/Auth"]
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    // Doc: https://bootstrap-vue.js.org/docs/
    "bootstrap-vue/nuxt",

    "@nuxtjs/auth-next",

    "@nuxtjs/dotenv"
  ],
  bootstrapVue: {
    bootstrapCSS: true, // or `css`
    bootstrapVueCSS: true // or `bvCSS`
  },

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.BASE_URL //"http://jwt-auth.test/api"
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extractCSS: true,
    extend(config, ctx) {}
  }
};

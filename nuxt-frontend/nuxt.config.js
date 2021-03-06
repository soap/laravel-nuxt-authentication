export default {
    server: {
        host: process.env.SERVER_HOST,
        port: process.env.SERVER_PORT,
    },
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Nuxt-frontend for Laravel',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ['@nuxtjs/axios', '@nuxtjs/auth-next'],

    auth: {
        // Options
        strategies: {
            laravelSanctum: {
                provider: 'laravel/sanctum',
                url: 'http://api.mydomain.test:8000',
                endpoints: {
                    login: { url: '/api/v1/auth/login', method: 'post', propertyName: 'access_token' },
                    logout: { url: '/api/v1/auth/logout', method: 'post' },
                    user: { url: '/api/v1/auth/user', method: 'get', propertyName: 'user' },
                },
            },
        },
        redirect: {
            login: '/auth/login'
        }
    },

    axios: {
        proxy: true,
        credentials: true,
        baseURL: 'http:/api.mydomain.test:8000',
    },
    proxy: {
        // add /api/v1 to http://mydoamin.com:8000
        'laravel': {
            target: 'http://api.mydomain.com:8000',
            pathRewite: {
                '/laravel/': '/api/v1/'
            }
        }
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
}

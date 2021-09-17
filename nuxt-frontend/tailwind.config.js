const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: defaultTheme.colors.blue[700],
                accent: defaultTheme.colors.gray[900],
                warn: defaultTheme.colors.red[500],
            },
            boxShadow: {
                primary: '0 4px 14px 0 rgba(0, 118, 255, 0.39)',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/ui')],
}

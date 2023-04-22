import { defineNuxtConfig } from 'nuxt/config'
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    typescript: {
        strict: true,
        typeCheck: true
    },
    build: {
        transpile: ['vuetify'],
    },
    hooks: {
        'vite:extendConfig': (config) => {
            config.plugins!.push(vuetify())
        },
    },
    vite: {
        ssr: {
            noExternal: ['vuetify'],
        },
        define: {
            'process.env.DEBUG': false,
        },
    },
    css: ['@/assets/main.scss'],
})

import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import { createI18n } from 'vue-i18n'
import App from './App.vue'
import localeOptions from './locale/i18n'
import router from './router'

const i18n = createI18n(localeOptions)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')



import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('custom-');
app.use(createPinia())
app.use(router)

app.mount('#app')

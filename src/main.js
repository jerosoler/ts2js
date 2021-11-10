import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'

//createApp(App).mount('#app')
createApp(App).use(createPinia()).mount('#app')


import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createPinia } from 'pinia'


const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(VueAxios, axios) 
app.mount('#app')

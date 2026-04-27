import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'simplebar/dist/simplebar.css'
import 'toastify-js/src/toastify.css'
import App from './App.vue'
import router from './router'
import './style.css'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'boxicons/css/boxicons.min.css';
createApp(App).use(router).mount('#app')

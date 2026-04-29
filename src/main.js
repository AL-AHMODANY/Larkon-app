import { createApp } from 'vue'

// ── Core CSS (order matters) ──────────────────────────────
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'boxicons/css/boxicons.min.css'

// ── Plugin CSS ────────────────────────────────────────────
import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'simplebar/dist/simplebar.css'
import 'toastify-js/src/toastify.css'

// ── App ───────────────────────────────────────────────────
import App from './App.vue'
import router from './router'

// ── Global theme tokens (must be LAST to override Bootstrap) ─
import './style.css'

// ── Bootstrap JS ─────────────────────────────────────────
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

createApp(App).use(router).mount('#app')

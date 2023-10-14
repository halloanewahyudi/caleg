import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'aos/dist/aos.css'
import Aos from 'aos'
import BootstsrapIcon from 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)
app.use(Aos.init)
app.use(BootstsrapIcon)
app.mount('#app')

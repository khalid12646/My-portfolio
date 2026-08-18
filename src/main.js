import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './style.css'

import reveal from './directives/reveal'

const app = createApp(App)

app.directive('reveal', reveal)

app.mount('#app')
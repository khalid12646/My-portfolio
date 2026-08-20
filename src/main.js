import { createApp } from 'vue'

import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './style.css'

const app = createApp(App)

/*
|--------------------------------------------------------------------------
| Single Page Navigation
|--------------------------------------------------------------------------
*/

const sectionRoutes = {
  '/home': 'home',
  '/about': 'about',
  '/skills': 'skills',
  '/experience': 'experience',
  '/projects': 'projects',
  '/services': 'services',
  '/education': 'education',
  '/contact': 'contact'
}

function navigateToSection(path, updateHistory = true) {
  const sectionId = sectionRoutes[path]

  if (!sectionId) {
    return
  }

  const section = document.getElementById(sectionId)

  if (!section) {
    return
  }

  if (updateHistory) {
    window.history.pushState(
      {},
      '',
      path
    )
  }

  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

/*
|--------------------------------------------------------------------------
| Browser Back / Forward
|--------------------------------------------------------------------------
*/

window.addEventListener('popstate', () => {
  const path = window.location.pathname

  navigateToSection(path, false)
})

/*
|--------------------------------------------------------------------------
| Global Navigation Function
|--------------------------------------------------------------------------
*/

app.config.globalProperties.$navigateTo = navigateToSection

app.mount('#app')

/*
|--------------------------------------------------------------------------
| Initial URL
|--------------------------------------------------------------------------
*/

window.addEventListener('load', () => {
  const currentPath = window.location.pathname

  if (sectionRoutes[currentPath]) {
    setTimeout(() => {
      navigateToSection(currentPath, false)
    }, 100)
  }
})
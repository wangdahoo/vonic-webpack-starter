import Vue from 'vue'
import Vonic from 'vonic/src/index.js'

// Page Components
import Index from './components/Index.vue'
import About from './components/About.vue'

// Routes
const routes = [
  { path: '/', component: Index },
  { path: '/about', component: About }
]

Vue.use(Vonic.app, {
  routes: routes
})

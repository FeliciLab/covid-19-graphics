import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RoscaCasosPorMunicipio from '../views/RoscaCasosPorMunicipio.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/RoscaCasosPorMunicipio',
    name: 'RoscaCasosPorMunicipio',
    component: RoscaCasosPorMunicipio
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

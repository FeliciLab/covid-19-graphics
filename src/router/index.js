import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RoscaCasosPorMunicipio from '../views/RoscaCasosPorMunicipio.vue'
import Tabela from '../views/Tabela.vue'
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
  },
  {
    path: '/tabela',
    name: 'Tabela',
    component: Tabela
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

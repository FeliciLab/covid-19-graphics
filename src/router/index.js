import Vue from 'vue'
import VueRouter from 'vue-router'
import Curva from '../views/Curva.vue'
import RoscaCasosPorMunicipio from '../views/RoscaCasosPorMunicipio.vue'
import RoscaTeste from '../views/RoscaTeste.vue'
import Tabela from '../views/Tabela.vue'
import CasosPorDia from '../views/CasosPorDia.vue'
import CasosEpidemiologico from '../views/CasosEpidemiologico.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Casos Epidemiológico',
    component: CasosEpidemiologico
  },
  {
    path: '/curva-epidemiologica',
    name: 'Curva Epidemiologica',
    component: Curva
  },
  {
    path: '/rosca-casos-por-municipio',
    name: 'RoscaCasosPorMunicipio',
    component: RoscaCasosPorMunicipio
  },
  {
    path: '/rosca-Teste',
    name: 'RoscaTeste',
    component: RoscaTeste
  },
  {
    path: '/tabela-casos-por-municipio',
    name: 'Tabela',
    component: Tabela
  },
  {
    path: '/casos-por-dia',
    name: 'CasosPorDia',
    component: CasosPorDia
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

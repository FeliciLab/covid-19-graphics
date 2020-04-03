import Vue from 'vue'
import VueRouter from 'vue-router'
import DashBoard from '../views/Dashboards.vue'
import CasosPorDia from '../views/CasosPorDia.vue'
import TabelaCasosPorMunicipio from '../views/TabelaPorMunicipio'
import RoscaCasosPorMunicipio from '../views/RoscaCasosPorMunicipio'
import CasosEpidemiologicos from '../views/CasosEpidemiologicos'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DashBoard',
    component: DashBoard
  },
  {
    path: '/casos-por-dia',
    name: 'Casos por dia',
    component: CasosPorDia
  },
  {
    path: '/tabela-casos-por-municipio',
    name: 'Tabela Casos Por Municipio',
    component: TabelaCasosPorMunicipio
  },
  {
    path: '/rosca-casos-por-municipio',
    name: 'rosca Casos Por Municipio',
    component: RoscaCasosPorMunicipio
  },
  {
    path: '/casos-epidemiologico',
    name: 'Casos Epidemiologicos',
    component: CasosEpidemiologicos
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

<template>
<div class="row" v-if="data.length != 0">
  <div class="col-12">
    <RoscaPorMunicipio :data="data" :options="options"/>
  </div>
  <div class="col-12">
    <div class="row d-flex justify-content-center">
      <div v-for="item in cities" :key="item.municipio" class="col-12 col-md-3 d-flex align-items-center justify-content-center">
        <div class="legend legend-3498DB" :class="[`legend-${colors[index]}`]"></div>
        <span>{{ item.municipio }}</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import RoscaPorMunicipio from '@/components/RoscaPorMunicipio'
import { colors, sortByQuantity, filterByDate } from '@/helpers.js'
import api from '@/services/api'
export default {
  components: {
    RoscaPorMunicipio
  },
  data () {
    return {
      colors,
      data: [],
      cities: [],
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false,
          segmentShowStroke: false
        }
      }
    }
  },

  async created () {
    const response = await api.get('/casos-ceara-por-dia')
    let item = null
    const data = response.data
    item = data.reduce((a, b) => {
      return new Date(a.data) > new Date(b.data) ? a : b
    })
    let citiesArr = filterByDate(data, item)
    citiesArr = sortByQuantity(citiesArr)
    this.cities = citiesArr
    this.data = {
      labels: citiesArr.map(item => item.municipio),
      datasets: [
        {
          label: 'Número de Casos Confirmados',
          data: citiesArr.map(item => item.quantidade),
          backgroundColor: colors,
          borderWidth: 0
        }
      ]
    }
  },
  methods: {
    selectRandomColor (data) {
      return data.map(item => this.colors[Math.floor(Math.random() * this.colors.length)])
    }
  }
}
</script>

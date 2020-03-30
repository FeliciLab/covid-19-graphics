<template>
  <RoscaPorMunicipio v-if="data.length != 0" :data="data" :options="options"/>
</template>

<script>
import RoscaPorMunicipio from '@/components/RoscaPorMunicipio'
// import api from '@/services/api'
import { colors, sortByQuantity, filterByDate } from '@/helpers.js'
import jsonData from '@/data/casos-ceara-por-dia.json'
export default {
  components: {
    RoscaPorMunicipio
  },
  data () {
    return {
      colors,
      data: [],
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
    // const response = await api.get('/casos-ceara-por-dia')
    const response = { data: jsonData }
    let item = null
    const data = response.data
    item = data.reduce((a, b) => {
      return new Date(a.data) > new Date(b.data) ? a : b
    })
    let citiesArr = filterByDate(data, item)
    citiesArr = sortByQuantity(citiesArr)
    this.data = {
      labels: citiesArr.map(item => item.municipio),
      datasets: [
        {
          label: 'Número de Casos Confirmados',
          data: citiesArr.map(item => item.quantidade),
          backgroundColor: this.selectRandomColor(citiesArr),
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

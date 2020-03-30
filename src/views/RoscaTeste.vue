<template>
  <RoscaPorMunicipio v-if="data.length != 0" :data="data" :options="options"/>
</template>

<style lang="scss" scoped>

</style>

<script>
import RoscaPorMunicipio from '@/components/RoscaPorMunicipio'
// import api from '@/services/api'
import jsonData from '@/data/casos-ceara-por-dia.json'
export default {
  components: {
    RoscaPorMunicipio
  },
  data () {
    return {
      colors: ['#fb397a', '#1fbb87', '#5d78ff', '#fab822', '#0088ff'],
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
    let citiesArr = this.filterByDate(data, item)
    citiesArr = this.sortByQuantity(citiesArr)
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
    // this.renderChart(this.data, this.options)
  },
  methods: {
    filterByDate (data, item) {
      return data.filter(i => {
        // eslint-disable-next-line eqeqeq
        if (item.data == i.data) {
          return i
        }
      })
    },
    selectRandomColor (data) {
      return data.map(item => this.colors[Math.floor(Math.random() * this.colors.length)])
    },
    sortByQuantity (data) {
      return data.sort((a, b) => {
        if (a.quantidade > b.quantidade) {
          return 1
        }
        if (a.quantidade < b.quantidade) {
          return -1
        }
        return 0
      })
    }
  }
}
</script>

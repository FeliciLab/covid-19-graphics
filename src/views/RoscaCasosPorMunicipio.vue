<script>
import { Doughnut } from 'vue-chartjs'
import api from '@/services/api'
// import moment from 'moment'
export default {
  // Casos por Municipio.
  // Casos Por Municipio (Tabela).
  // Casos novos por dia.
  extends: Doughnut,
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

  async mounted () {
    const response = await api.get('/casos-ceara-por-dia')
    let item = null
    const data = response.data
    item = data.reduce((a, b) => {
      return new Date(a.data) > new Date(b.data) ? a : b
    })
    const citiesArr = this.filterByDate(data, item)
    this.data = {
      labels: citiesArr.map(item => item.municipio),
      datasets: [
        {
          label: 'Número de Casos Confirmados',
          data: citiesArr.map(item => item.quantidade),
          backgroundColor: this.selectRandomColor(citiesArr)
        }
      ]
    }
    this.renderChart(this.data, this.options)
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
    }
  }
}
</script>

<script>
import { Doughnut } from 'vue-chartjs'
export default {
  extends: Doughnut,
  data () {
    return {
      data: [],
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        }
      }
    }
  },
   async mounted () {
    const response = await api.get('/casos-ceara-por-dia')
    const result = []
    this.data = {
      labels: result.map(item => {
        const splitted = item.x.split('-')
        return `${splitted[2]}/${splitted[1]}`
      }),
      datasets: [
        {
          label: 'Número de Casos Confirmados',
          data: result.map(item => item.y),
          backgroundColor: 'rgba(52, 152, 219, 0.2)',
          borderColor: 'rgb(52, 152, 219)'
        }
      ]
    }
    this.renderChart(this.data, this.options)
  }
}
</script>

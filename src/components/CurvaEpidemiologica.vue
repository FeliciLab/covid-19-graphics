<script>
import { Line } from 'vue-chartjs'
import api from '@/services/api'
export default {
  extends: Line,
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
    response.data.reduce((res, value) => {
      if (!res[value.data]) {
        res[value.data] = { x: value.data, y: 0 }
        result.push(res[value.data])
      }
      res[value.data].y += value.quantidade
      return res
    }, {})

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

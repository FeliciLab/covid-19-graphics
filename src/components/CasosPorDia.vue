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
    const response = await api.get('/casos-novos-ceara-por-dia')
    this.data = {
      labels: response.data.map(item => {
        const splitted = item.data.split('-')
        return `${splitted[2]}/${splitted[1]}`
      }),
      datasets: [
        {
          label: 'Novos casos por dia',
          data: response.data.map(item => item.qtdnovoscasos),
          backgroundColor: 'rgba(224, 43, 32, 0.2)',
          borderColor: 'rgb(224, 43, 32)'
        }
      ]
    }
    this.renderChart(this.data, this.options)
  }
}
</script>

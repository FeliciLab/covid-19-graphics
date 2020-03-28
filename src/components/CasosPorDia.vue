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
        res[value.data] = { data: value.data, quantidade: 0 }
        result.push(res[value.data])
      }
      res[value.data].quantidade += value.quantidade
      return res
    }, {})
    const newResult = result
    result.forEach((item, index) => {
      if (index !== 0) {
        newResult[index].quantidade = result[index].quantidade - result[index - 1].quantidade
      }
    })
    console.log(result)
    this.data = {
      labels: result.map(item => item.data),
      datasets: [
        {
          label: 'Novos casos por dia',
          data: result.map(item => item.quantidade),
          backgroundColor: 'rgba(52, 152, 219, 0.2)',
          borderColor: 'rgb(52, 152, 219)'
        }
      ]
    }
    this.renderChart(this.data, this.options)
  }
}
</script>

<script>
import { Doughnut } from 'vue-chartjs'
export default {
  // Casos por Municipio.
  // Casos Por Municipio (Tabela).
  // Casos novos por dia.
  extends: Doughnut,
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>

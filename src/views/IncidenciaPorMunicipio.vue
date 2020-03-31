<template>
    <div>
        <IncidenciaPorMunicipio :data="data" />
    </div>
</template>

<script>
import IncidenciaPorMunicipio from '@/components/IncidenciaPorMunicipio'
// import api from '@/services/api'
import jsonData from '@/data/incidenciaPorMunicipio.json'
export default {
  components: {
    IncidenciaPorMunicipio
  },
  async created () {
    //   const response = api.get('/')  # Colocar a API quando estiver disponível
    const response = { data: jsonData }
    this.data = {
      labels: response.data.map(item => item.municipio),
      datasets: [
        {
          data: response.data.map(item => item.incidencia),
          label: 'Incidencia por município'
        }
      ]
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-12 col-md-4"></div>
          <div class="col-12 col-md-4"></div>
          <div class="col-12 col-md-4"></div>
          <div class="col-12 col-md-4"></div>
          <div class="col-12 col-md-4"></div>
          <div class="col-12 col-md-4"></div>
          <div class="col-12 col-md-4"></div>
          <div class="col-12 col-md-4"></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-4">
        <TabelaCasosPorMunicipio/>
      </div>
      <div class="col-12 col-md-8"></div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="p-3">
          <CurvaEpidemiologica />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="p-3">
          <CasosPorDia />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CasosPorDia from '@/components/visualizations/CasosPorDia'
import CurvaEpidemiologica from '@/components/visualizations/CurvaEpidemiologica'
import TabelaCasosPorMunicipio from '@/components/visualizations/TabelaCasosPorMunicipio'
export default {
  components: {
    CasosPorDia,
    CurvaEpidemiologica,
    TabelaCasosPorMunicipio
  }
}
</script>

<template>
    <div class="p-3">
        <div>
            <CasosPorDia />
        </div>
        <div class="pt-3">
            <Curva />
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import CasosPorDia from '@/views/CasosPorDia'
import Curva from '@/views/Curva'

export default {
  components: {
    CasosPorDia,
    Curva
  }
}
</script>

<template>
    <div>
        <img class="responsive" src="" alt=""/>
        <p class="number text-center">{{ number }}</p>
        <p class="text-center">{{ text }}</p>
    </div>
</template>

<style lang="scss" scoped>
    // .number {

    // }
</style>

<script>
export default {
  props: ['number', 'text', 'typeOfCard']
}
</script>

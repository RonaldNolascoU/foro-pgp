<template lang="pug">
.user__hero
  .row
    .col-6.avatar
      Avatar(:width='150', :height='150')
    .col-6.d-flex.flex-column.justify-content-between
      h1 María Helena Padilla
      i.d-flex mpadilla@pgplegal.com
      span Pinilla, González & Prieto Abogados
</template>

<script>
import Avatar from '@/components/Avatar'
export default {
  components: { Avatar }
}
</script>

<style lang="scss" scoped>
.user__hero {
  .avatar {
    border-right: 1px solid #807a73;
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>

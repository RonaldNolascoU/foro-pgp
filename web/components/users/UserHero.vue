<template lang="pug">
.user__hero
  .row
    .avatar.col-12.col-md-6
      Avatar(
        :img='"/users/fondo.png"',
        :width='150',
        :height='150',
        :centered='false'
      )
    .d-flex.flex-column.justify-content-between.col-12.col-md-6.info
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

    @media screen and (max-width: 1200px) {
      border-right: 0;
    }
  }

  .info {
    @media screen and (max-width: 768px) {
      justify-content: center !important;
      text-align: center;
      i {
        display: block !important;
      }
    }
  }
}
</style>

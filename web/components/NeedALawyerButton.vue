<template lang="pug">
.lawyer__btn.d-flex.justify-content-center
  .rounded-circle.d-flex.justify-content-center.align-items-center
    img(src='@/static/users/cog.svg')
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.rounded-circle {
  background: #233539;
  width: 58px;
  height: 58px;
  cursor: pointer;

  img {
    width: 33px;
    height: 33px;
  }
}
</style>

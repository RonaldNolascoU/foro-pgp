<template lang="pug">
.profile__image.d-flex.justify-content-center
  img.rounded-circle(
    src='@/static/users/fondo.png',
    :width='width',
    :height='height'
  )
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 74
    },
    height: {
      type: Number,
      default: 74
    }
  }
}
</script>

<style lang="scss" scoped></style>

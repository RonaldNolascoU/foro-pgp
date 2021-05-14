<template lang="pug">
.profile__image.d-flex.justify-content-center
  img(
    :src='isLogged ? img : img',
    :width='width',
    :height='height',
    :class='className'
  )
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 74
    },
    height: {
      type: Number,
      default: 74
    },
    className: {
      type: String,
      default: 'rounded-circle'
    }
  },
  data() {
    return {
      isLogged: false
    }
  }
}
</script>

<style lang="scss" scoped></style>

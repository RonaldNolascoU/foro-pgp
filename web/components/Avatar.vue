<template lang="pug">
.profile__image.d-flex(
  :class='centered ? "justify-content-center" : "justify-content-end"'
)
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
    },
    centered: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isLogged: false
    }
  }
}
</script>

<style lang="scss" scoped>
.profile__image {
  @media screen and (max-width: 768px) {
    justify-content: center !important;
  }
}
</style>

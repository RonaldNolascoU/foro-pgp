<template lang="pug">
.card
  img(:src="imageUrl")
  span {{ title }}
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  background: #ffffff;
  padding: 2em;
  margin-right: 1em;
  max-width: 265px;
  width: 100%;
}
</style>

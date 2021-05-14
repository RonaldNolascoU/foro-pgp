<template lang="pug">
.card
  img(:src='imageUrl', height='22')
  span.title {{ title }}
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
  display: flex;
  justify-content: center;
  height: 264px;
  max-height: 264px;

  .title {
    font-family: 'Merriweather', serif;
    margin-top: 1em;
    color: #807a73;
    text-align: center;
    font-size: 22px;
  }
}
</style>

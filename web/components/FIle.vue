<template lang="pug">
.file__preview
  img.img-fluid(:src='url', v-if='type == "image"')
  video(:src='url', v-if='type == "video"')
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'image'
    },
    url: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.file__preview {
  padding: 63px 208px;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
}
</style>

<template lang="pug">
.file__preview
  img(:src='url', v-if='type == "image"').img-fluid
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
}
</style>

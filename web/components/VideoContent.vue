<template lang="pug">
.content.shadow-lg.flex-wrap
  File(:type='"image"', :url='"/img_preview.png"')
  CourseContent
</template>

<script>
import File from '@/components/File'
import CourseContent from '@/components/CourseContent'
export default {
  components: {
    File,
    CourseContent
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;

  .file__preview {
    padding: 0 !important;
  }
}
</style>

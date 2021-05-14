<template lang="pug">
div
  Post
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import Post from '@/components/Post'
export default {
  components: { VueSlickCarousel, Post },
  data() {
    return {
      settings: {
        dots: true,
        dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>

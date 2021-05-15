<template lang="pug">
div
  VueSlickCarousel(v-bind="settings")
      div 
        Post
      div 
        Post
      div 
        Post
      div 
        Post
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Post from '@/components/Post'
export default {
  components: { VueSlickCarousel, Post },
  data() {
    return {
      settings: {
        dots: true,
        dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0.35,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>

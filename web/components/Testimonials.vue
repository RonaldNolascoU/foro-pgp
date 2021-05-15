<template lang="pug">
.testimonials
  .title
    h1 Qué dicen nuestros usuarios
    p Reconocimientos que agradecemos de corazón

  .wrapper.d-flex.justify-content-center.flex-wrap
    IndividualTestimonial(v-for="index in 3" :key="index")
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import IndividualTestimonial from '@/components/IndividualTestimonial'
export default {
  components: { IndividualTestimonial, VueSlickCarousel }
}
</script>

<style lang="scss" scoped>
.testimonials {
  background: #ffffff;

  .title {
    text-align: center;
    h1 {
      color: #807a73;
    }
    p {
      font-size: 20px;
      color: #9fd44e;
      font-weight: normal;
      font-family: 'Merriweather', serif;
      font-style: italic;
    }
  }
}
</style>

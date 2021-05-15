<template lang="pug">
.testimonials
  .title
    h1 Qué dicen nuestros usuarios
    p Reconocimientos que agradecemos de corazón

  VueSlickCarousel(v-bind="settings" )
    .wrapper.d-flex.justify-content-center.flex-wrap
      IndividualTestimonial
    .wrapper.d-flex.justify-content-center.flex-wrap
      IndividualTestimonial
    .wrapper.d-flex.justify-content-center.flex-wrap
      IndividualTestimonial
    .wrapper.d-flex.justify-content-center.flex-wrap
      IndividualTestimonial
    .wrapper.d-flex.justify-content-center.flex-wrap
      IndividualTestimonial
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import IndividualTestimonial from '@/components/IndividualTestimonial'
export default {
  components: { IndividualTestimonial, VueSlickCarousel },
  data() {
    return {
      settings: {
        dots: true,
        dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0.35,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      }
    }
  }
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

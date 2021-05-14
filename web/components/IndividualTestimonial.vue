<template lang="pug">
.testimonial
  .quote__wrapper
    .quote.shadow-lg
      span.text-center Efficient Collaborating
      p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.
  .user.d-flex.justify-content-center.flex-column.text-center
    Avatar.mt-3(:img='"/users/fondo.png"')
    span.name Jane Cooper
    span.position CEO
</template>

<script>
import Avatar from '@/components/Avatar'
export default {
  components: { Avatar }
}
</script>

<style lang="scss" scoped>
.testimonial {
  width: 425px;
  margin: 1em;
  .quote__wrapper {
    position: relative;
    width: 425px;
  }
  .quote {
    background-color: white;
    color: #000;
    text-align: center;
    border-radius: 6px;
    padding: 3em;
    height: 231px;
    &::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: #fff transparent transparent transparent;
    }
    span {
      font-family: 'Merriweather';
      font-style: italic;
      font-size: 25px;
    }
  }

  .user {
    .name {
      font-weight: bold;
    }
  }
}
</style>

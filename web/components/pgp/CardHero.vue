<template lang="pug">
.hero
  h1 {{ title }}
  h3 {{ subtitle }}

  .cards.mt-5
    Card(
      v-for='card in pgp',
      :imageUrl='card.url',
      :title='card.title',
      :key='card.title'
    )

  .lawyer__btn.d-flex.justify-content-center.mt-5.mb-5
    NeedALawyerLargeButton

  .floating__button(v-if='includeLogo')
    Avatar(:img='"/pgp.svg"', :width='128', :height='128', :className='""')
</template>

<script>
import Card from '@/components/pgp/Card'
import NeedALawyerLargeButton from '@/components/NeedALawyerLargeButton'
import Avatar from '@/components/Avatar'
export default {
  components: { Card, NeedALawyerLargeButton, Avatar },
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    includeLogo: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      pgp: [
        {
          url: '/pgp/messages.svg',
          title: 'Preguntas y respuestas'
        },
        { url: '/pgp/document.svg', title: 'Textos y videos' },
        { url: '/pgp/podcast.svg', title: 'Podcast' },
        { url: '/pgp/webinar.svg', title: 'Webinars y cursos' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  text-align: center;
  background: url('/users/fondo.png');
  background-size: cover;
  padding: 2em;
  position: relative;
}
.cards {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
}
.floating__button {
  position: absolute;
  right: 12em;
  background: white;
  padding: 1.5em;
  bottom: -4.5em;
  z-index: 99999;
  border-radius: 50%;
}
</style>

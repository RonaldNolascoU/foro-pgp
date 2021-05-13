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
    button Abogado
</template>

<script>
import Card from '@/components/pgp/Card'
export default {
  components: { Card },
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      pgp: [
        {
          url: '../../static/pgp/messages.svg',
          title: 'Preguntas y respuestas'
        },
        { url: '../../static/pgp/document.svg', title: 'Textos y videos' },
        { url: '../../static/pgp/podcast.svg', title: 'Podcast' },
        { url: '../../static/pgp/webinar.svg', title: 'Webinars y cursos' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  text-align: center;
  background: url('../../static/users/fondo.png');
  background-size: cover;
  padding: 2em;
}
.cards {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
}
</style>

<template lang="pug">
div
  .post.shadow-lg
    .title__container
      span Ley de vivienda, avance para la seguridad jurídica
    .description__container
      .badge__text_container
        .badges
          Badge(v-for='badge in badges', :key='badge.title', :badge='badge')
        span.d-flex.mt-5 El Gobierno Nacional sancionó el pasado 14 de enero la Ley 2079 de 2021, nueva Ley de Vivienda y Hábitat, que incorpora legislación en materia de instrumentos de fomento para el acceso a la vivienda urbana, acciones para la promoción de la vivienda rural, y modificaciones a la Ley 388 de 1997 en materia de ordenamiento y planificación del territorio, referidas a asuntos tan importantes como las instancias de concertación de asuntos ambientales en la expedición y modificación de los Planes de Ordenamiento Territorial (POT)...
      .view__more.mt-5
        ReadMoreButton
</template>

<script>
import Badge from '@/components/Badge'
import ReadMoreButton from '@/components/ReadMoreButton'

export default {
  components: { ReadMoreButton, Badge },
  data() {
    return {
      badges: [
        {
          title: 'Artículo',
          color: '#FFFAEB',
          textColor: '#946C00',
          borderColor: 'rgba(148, 108, 0, 0.21)'
        },
        {
          title: 'Inmobiliario',
          color: '#EFFAF5',
          textColor: '#257953',
          borderColor: 'rgba(37, 121, 83, 0.21);'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  border-radius: 19px;
  display: flex !important;
  flex-wrap: wrap;

  .title__container {
    background: #233539;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    @media screen and (max-width: 1200px) {
      width: 100%;
    }
    padding: 2em;
    border-radius: 19px 0 0 19px;
    span {
      font-family: 'Merriweather', serif;
      color: white;
      font-size: 38px;
      text-align: center;
    }
  }

  .description__container {
    width: 60%;
    @media screen and (max-width: 1200px) {
      width: 100%;
    }
    padding: 2em 4em 2em 4em;
    background: #ffffff;
    border-radius: 0 19px 19px 0;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    span {
      font-size: 25.82px;
      line-height: 38.27px;
      font-family: 'Merriweather', serif;
      color: #807a73;
    }
  }

  .badges {
    flex-wrap: wrap;
  }
}
</style>

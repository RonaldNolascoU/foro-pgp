<template lang="pug">
div
  footer
    .row
      .col-12.col-md-4
        .content
          h2 Contenido
          .border__green
          ul
            li Textos y vídeos
            li Webinars y cursos
            li Podcast
            li Preguntas y respuestas
      .col-12.col-md-4
        .sign
          h2 La Firma
          .border__green
          ul
            li Presentación
            li Abogados
            li Servicios especializados
            li Formatos y planillas
      .col-12.col-md-4
        .contact
          h2 Contacto
          .border__green
          ul.no__list
            li Formulario
            li 
              a(href='mailto:pgp@pgplegal.com') pgp@pgplegal.com
            li +57(1) 210 1000
            li pgplegal.com
  .footer__secondary
    span 2021 | Pinilla, González & Prieto Abogados | Bogotá, Colombia
    span Política de tratamiento de datos
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'No title set'
    }
  }
  // data: (data) => {
  //   if (!data.$store.state) {
  //     return
  //   }
  //   return {
  //     year: new Date().getFullYear(),
  //     eventInformation: data.$store.state.eventInformation
  //   }
  // }
}
</script>

<style lang="scss" scoped>
footer {
  padding: 1.5em 0em 1.5em 8.5em;
  background: #233539;
  color: white;

  @media screen and (max-width: 1200px) {
    padding: 1.5em 1em;
  }

  .content,
  .sign,
  .contact {
    h2 {
      font-weight: 700;
    }
    li {
      font-family: 'Merriweather', serif;
    }
  }

  .border__green {
    border: 1px solid #b5e742;
    width: 32px;
    border-radius: 3px;
  }

  ul {
    margin-top: 10px;
    font-size: 23px;

    li {
      a {
        color: #b5e742;
      }
    }
  }

  .no__list {
    list-style: none;
    padding-left: 0 !important;
  }
}

.footer__secondary {
  display: flex;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.6);
  background: #192629;
  padding: 1.5em 1em 1.5em 8em;
  flex-wrap: wrap;

  @media screen and (max-width: 1200px) {
    padding: 1.5em 1em;
    span {
      display: flex;
    }
  }
}
</style>

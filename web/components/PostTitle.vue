<template lang="pug">
.post__title
  .title
    h2 {{ title }}
  .published
    span Publicado en 
    a Asuntos Legales, La Republica
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.post__title {
  h2 {
    margin-bottom: 15px;
  }
  .title {
    margin-bottom: 15px;
    border-bottom: 1px solid #e5e5e5;
    color: #807a73;
  }

  .published {
    a {
      color: #9fd44e !important;
    }
  }
}
</style>

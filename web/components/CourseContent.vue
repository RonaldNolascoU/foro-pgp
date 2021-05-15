<template lang="pug">
.course
  .title
    h3 Contenido del curso
  .course__content
    .cap(v-for='(cap, index) in content', :key='cap.title')
      input(type='checkbox', :checked='cap.seen')
      label.content__title(for='content') {{ index + 1 }}. {{ cap.title }}
</template>

<script>
export default {
  data() {
    return {
      content: [
        { seen: true, title: 'Régimen General de Impuestos' },
        { seen: false, title: 'Impuesto de Registro' },
        { seen: false, title: 'Impuesto de delineación urbana' },
        { seen: false, title: 'Valorización' },
        { seen: false, title: 'Impuesto Predial Unificado' }
      ]
    }
  }
}
</script>

<style lang="scss">
.course {
  background: white;
  color: rgba(35, 53, 57, 0.6);

  .title {
    padding: 0.2em;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .cap {
    padding: 1em;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    .content__title {
      margin-left: 1em;
    }
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
}
</style>

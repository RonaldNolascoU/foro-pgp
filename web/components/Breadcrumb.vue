<template lang="pug">
nav(style='--bs-breadcrumb-divider: ">"', aria-label='breadcrumb')
  ol.breacrumb
    li.breacrumb-item
      nuxt-link(to='/') Foro PGP
    li.breacrumb-item(aria-current='page')
      nuxt-link(to='/') Cursos
    li.breacrumb-item(aria-current='page')
      nuxt-link(to='/') Tributario
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.breacrumb {
  display: flex;
  flex-wrap: wrap;
  padding: 0 0;
  margin-bottom: 1rem;
  list-style: none;

  .breacrumb-item {
    &.hover {
      text-decoration: underline;
    }
    &::after {
      padding: 8px;
      color: #9fd44e !important;
      content: '\003e';
    }
    &:last-child {
      &::after {
        content: '';
      }
    }
  }

  a {
    text-decoration: none;
    color: #9fd44e !important;
  }
}
</style>

<template lang="pug">
  header.header
    nuxt-link(to="/" class="home") {{ title }}
    nav
      nuxt-link(to="/users") Users
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'No title set'
    },
    ticketLink: {
      type: String,
      default: undefined
    }
  }
}
</script>

<style scoped lang="scss">
@import '../styles/custom-properties.css';

.header {
  padding: 1.5rem;
  box-sizing: border-box;
  margin: 0 auto;
  background: yellow;
}

@media screen and (min-width: 520px) {
  .header {
    display: flex;
    justify-content: space-between;
  }
}

@media screen and (min-width: 520px) {
  nav {
    display: flex;
    justify-content: flex-end;
  }
  nav a {
    margin-left: 2rem;
  }
}

.header a {
  display: block;
  color: inherit;
  text-decoration: inherit;
}

.home {
  font-weight: 600;
}
</style>

<template lang="pug">
header.header
  nuxt-link.home(to='/')
    img(:src='"/pgp.svg"')
  .search
    i.bi.bi-search.me-2
    input(type='text', placeholder='Busca artículos, webinars, videos...')
  nav
    ProfileButton.me-4
    Avatar(:img='"/users/fondo.png"')
</template>

<script>
import Avatar from '@/components/Avatar'
import ProfileButton from '@/components/ProfileButton'
export default {
  components: { Avatar, ProfileButton },
  props: {
    title: {
      type: String,
      default: 'No title set'
    },
    ticketLink: {
      type: String,
      default: undefined
    }
  },
  data() {
    return {
      isLogged: false
    }
  }
}
</script>

<style scoped lang="scss">
@import '../styles/custom-properties.css';

.header {
  box-sizing: border-box;
  margin: 0 auto;
  background: #fafbfc;
  padding: 25px 82px 28px 25px;

  @media screen and (max-width: 768px) {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .search {
    display: flex;
    align-items: center;
    width: 100%;
    margin-left: 4em;
    color: #c8c9c9;
    @media screen and (max-width: 768px) {
      margin-left: 0;
      margin-top: 1em;
      margin-bottom: 1em;
    }
    input {
      width: 100%;
      border: none;
      background: transparent;
      outline: none;
    }
  }
}

nav {
  display: flex;
  align-items: center;
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

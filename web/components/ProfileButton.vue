<template lang="pug">
.profile
  i.bi.bi-person.me-2
  span {{isLogged ? 'Perfil' : 'Acceder'}}
</template>

<script>
export default {
  data() {
    return {
      isLogged: false // Check with Firebase
    }
  }
}
</script>

<style lang="scss" scoped>
.profile {
  border: 1px solid #000000;
  border-radius: 4px;
  padding: 1em;
  cursor: pointer;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-family: 'Merriweather', serif;
  }
}
</style>

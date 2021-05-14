<template lang="pug">
.lawyer__btn
  img(src='/users/cog.svg')
  span Necesitas contratar un abogado?
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.lawyer__btn {
  background: #233539;
  border-radius: 26px;
  padding: 0.8em 4em 0.8em 4em;
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: 33px;
    height: 33px;
    margin-right: 1em;
  }

  span {
    color: white;
  }
}
</style>

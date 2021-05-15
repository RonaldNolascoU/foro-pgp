<template lang="pug">
.shadow-lg.box
  .content.d-flex.align-items-center
    img.me-3(src='/google.svg', alt='Google Podcasts')
    span Google Podcasts
  .content.d-flex.align-items-center
    img.me-3(src='/spotify.svg', alt='Spotify Podcasts')
    span Spotify Podcasts
  .content.d-flex.align-items-center
    img.me-3(src='/apple.svg', alt='Apple Podcasts')
    span Apple Podcasts
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.box {
  padding: 1em;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 16px;
  width: 284px;
  img {
    width: 34px;
    height: 34px;
  }
  span {
    font-family: 'Montserrat', sans-serif;
    color: rgba(128, 122, 115, 0.7);
    font-weight: 600;
  }
}
</style>

<template lang="pug">
.badge(:style='getStyles(badge)') {{ badge.title }}
</template>

<script>
export default {
  props: {
    badge: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    getStyles(badge) {
      return `background: ${badge.color}; 
      border: 1px solid ${badge.borderColor};
      color: ${badge.textColor}
      `
    }
  }
}
</script>

<style lang="scss" scoped>
.badge {
  font-family: 'Montserrat', sans-serif;
  border-radius: 10px;
  padding: 0.8em 3em;
  margin-right: 1em;
  @media screen and (max-width: 768px) {
    margin-bottom: 1em;
  }
}
</style>

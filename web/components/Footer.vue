<template lang="pug">
  footer
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'No title set'
    }
  },
  data: data => {
    if (!data.$store.state) {
      return
    }
    return {
      year: new Date().getFullYear(),
      eventInformation: data.$store.state.eventInformation
    }
  }
}
</script>

<style scoped>
@import '../styles/custom-properties.css';

.footer {
  padding: 1.5rem;
  text-align: center;
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
}

.footer a {
  color: inherit;
  text-decoration: inherit;
  padding: 1em 0.5em;
}

address.venue {
  margin: 3em 1.5em 1.5em;
  font-style: inherit;
}

.power a {
  display: inline;
  padding: 0;
  text-decoration: underline;
}
</style>

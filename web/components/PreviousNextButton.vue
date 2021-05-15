<template lang="pug">
.btn__both
  .previous(:class='!previousActive ? "disabled" : null') < Anteriores
  .next(:class='!nextActive ? "disabled" : null') Siguientes >
</template>

<script>
export default {
  data() {
    return {
      previousActive: false,
      nextActive: true
    }
  }
}
</script>

<style lang="scss" scoped>
.btn__both {
  font-family: 'Oswald', sans-serif;
  background: #233539;
  border-radius: 28px;
  display: flex;
  width: 440px;
  color: white;
  font-size: 20px;
  padding: 16px;
  cursor: pointer;

  .disabled {
    color: rgba(255, 255, 255, 0.4);
  }

  .previous {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    border-right: 1px solid rgba(255, 255, 255, 0.3);
  }

  .next {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
  }
}
</style>

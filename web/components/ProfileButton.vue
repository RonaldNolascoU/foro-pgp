<template lang="pug">
div
  button.profile(@click='openModal')
    i.bi.bi-person.me-2
    span {{ isLogged ? "Perfil" : "Acceder" }}
  AuthModal(v-if='showModal', @closeModal='closeModal')
</template>

<script>
import AuthModal from '@/components/AuthModal'
export default {
  components: { AuthModal },
  data() {
    return {
      showModal: false
    }
  },
  computed: {
    isLogged() {
      return this.$store.state.auth.user.auth
    }
  },
  methods: {
    openModal($event) {
      if (this.isLogged) {
        $event.preventDefault()
        this.$router.push({ name: 'users' })
      } else {
        this.showModal = true
        document.body.style.overflowY = 'hidden'
      }
    },
    closeModal() {
      this.showModal = false
      document.body.style.overflowY = 'scroll'
    }
  }
}
</script>

<style lang="scss" scoped>
.profile {
  border: 1px solid #000000;
  background: white;
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

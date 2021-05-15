<template lang="pug">
div
  transition(name='fade', appear)
    .modal-overlay(@click='$emit("closeModal")')
  transition(name='pop', appear)
    .modal-mask(role='dialog')
      .modal-wrapper
        .modal-dialog
          .modal-content
            .modal-header
              h4.modal-title {{ isLogin ? "Iniciar Sesión" : "Registrarse" }}
            .modal-body
              div(v-if='!isLogin')
                .row
                  .mb-3.col
                    label.form-label(for='name') Nombre
                    input#name.form-control(
                      type='text',
                      placeholder='John',
                      v-model='formData.name'
                    )
                  .mb-3.col
                    label.form-label(for='lastname') Apellido
                    input#lastname.form-control(
                      type='text',
                      placeholder='Doe',
                      v-model='formData.lastname'
                    )
                  .mb-3
                    label.form-label(for='email') Correo
                    input#email.form-control(
                      type='email',
                      placeholder='correo@ejemplo.com',
                      v-model='formData.email'
                    )
                  .mb-3
                    label.form-label(for='password') Contraseña
                    input#password.form-control(
                      type='password',
                      placeholder='Contraseña',
                      v-model='formData.password'
                    )
              div(v-else)
                .mb-3
                  label.form-label(for='email') Correo
                  input#email.form-control(
                    type='email',
                    placeholder='correo@ejemplo.com',
                    v-model='formData.email'
                  )
                .mb-3
                  label.form-label(for='password') Contraseña
                  input#password.form-control(
                    type='password',
                    placeholder='Contraseña',
                    v-model='formData.password'
                  )
            .modal-footer
              a.login__btn(@click='onSubmit') {{ isLogin ? "Iniciar Sesión" : "Registrarse" }}
</template>

<script>
export default {
  data() {
    return {
      isLogin: false,
      formData: {
        name: null,
        lastname: null,
        email: null,
        password: null,
        sector: null,
        company: null,
        position: null,
        interests: [],
        webinars: [],
        course: null,
        questions: null
      }
    }
  },
  computed: {
    isLogged() {
      return this.$store.state.auth.user.auth
    }
  },
  methods: {
    async onSubmit() {
      try {
        await this.$fire.auth
          .createUserWithEmailAndPassword(
            this.formData.email,
            this.formData.password
          )
          .then(userCredential => {
            console.log(userCredential.user)
            this.$fire.firestore
              .collection('users')
              .doc(userCredential.user.uid)
              .set({
                nombre: this.formData.name,
                apellido: this.formData.lastname,
                empresa: this.formData.company,
                puesto: this.formData.position,
                sector: this.formData.sector,
                areas_interes: this.formData.interests,
                webinars: this.formData.webinars,
                curso: this.formData.course,
                preguntas: this.formData.questions
              })
              .then(userSaved => {
                this.$store.commit('auth/login', {
                  ...this.formData,
                  auth: true
                })
                console.log(userSaved, 'user saved with new fields')
                this.$emit('closeModal')
                // MUTATE SANITY
              })
              .catch(error => {
                console.log(error, 'error saving user')
              })
          })
          .catch(error => {
            console.log(error, 'error')
          })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
/* ---------------------------------- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}
.box {
  padding: 2em;
}

.modal-overlay {
  content: '';
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background: #2c3e50;
  opacity: 0.6;
  cursor: pointer;
}

.modal-dialog {
  margin: 0 !important;
}

.modal-header {
  padding: 0 !important;
}

.modal-content {
  border: none;
}

.modal-mask {
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  text-align: center;
  width: fit-content;
  height: fit-content;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  background: #fff;
  z-index: 999;
  transform: none;
}
@media screen and (min-width: 768px) {
  .modal-dialog {
    width: 700px;
  }
}

.login__btn {
  padding: 0.6em 2em;
  background: #9fd44e;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
}
</style>

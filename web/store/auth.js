export const state = () => ({
  user: {
    auth: false
  }
})

export const mutations = {
  login(state, payload) {
    state.user = payload
  },

  isAuth(state, payload) {
    state.user.auth = payload
  },
  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser }) => {
    console.log(authUser, 'user changed')
    // Don't do this:
    state.user = authUser

    // Do this:
    const { uid, email, emailVerified } = authUser
    state.user = { uid, email, emailVerified }
  },
  onAuthStateChangedAction: (ctx, { authUser }) => {
    if (!authUser) {
      // claims = null
      // Perform logout operations
    } else {
      console.log(authUser, 'user action ')
      // Do something with the authUser and the claims object...
    }
  }
}

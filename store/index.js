export const actions = {
  nuxtServerInit(store, context) {
    if (this.$cookies.get('access_token')) {
      this.$axios
        .post(`${process.env.API_DOMAIN}/${process.env.API_VERSION}/auth/me`)
        .then((response) => {
          store.commit('user/refreshed', { user: response.data.user })
        })
    }
  },
}

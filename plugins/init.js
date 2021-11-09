export default function ({ $axios, store, app, route }) {
  if (app.$cookies.get('auth_token')) {
    $axios
      .get(`${process.env.API_URL}/auth/me`)
      .then((res) => {
        // console.log(res.data.data.user)
        const userData = res.data.data.user
        store.dispatch('user/refreshed', { user: userData })
      })
      .catch((err) => {
        console.log(err)
        if (err.response?.status === 401) {
          app.$cookies.remove('auth_token')
          store.dispatch('user/logout')
        }
      })
  } else {
    store.dispatch('user/logout')
  }

  if (process.client) {
    console.log(
      '%c%s',
      `
          background-color: red;
          color: #fff;
          padding: 10px 20px;
          font-size: 18px;
          border-radius: 5px;
        `,
      app.i18n.t('consoleSecurity')
    )
  }
}

export default function ({ app, store, redirect }) {
  if (
    !store.getters['user/currentUser'] ||
    !store.getters['user/currentUser'].user ||
    store.getters['user/currentUser'].user.role !== 'admin'
  ) {
    if (process.client) app.$toast.error('У Вас нет доступа к этой странице')
    return redirect('/')
  }
}

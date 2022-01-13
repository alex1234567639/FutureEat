export default ({ store, route }) => {
  store.commit('setPath', route.path)
}

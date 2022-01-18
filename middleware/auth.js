export default function ({ redirect, route }) {
  if (process.server) {
    return
  }
  const user_id = sessionStorage.getItem('user_id')
  if (!user_id && route.path !== '/') {
    console.log('return')
    return redirect('/')
  }
}

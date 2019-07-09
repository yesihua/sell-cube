export const foods = state => state.foods
export const singer = state => {
  if (!state.singer) {
    state.singer = JSON.parse(sessionStorage.getItem('singer'))
  }
  return state.singer
}
export const userInfo = state => {
  if (!state.userInfo) {
    state.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
  }
  return state.userInfo
}

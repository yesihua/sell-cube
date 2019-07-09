import * as types from './mutation-types'

const mutations = {
  [types.SET_FOODS](state, foods) {
    state.foods = foods
  },
  setSinger(state, singer) {
    sessionStorage.setItem('singer', JSON.stringify(singer))
    state.singer = singer
  },
  login(state, data) {
    sessionStorage.setItem('userInfo', JSON.stringify(data))
    state.userInfo = data
  },
  loginOut(state) {
    state.userInfo = null
    sessionStorage.removeItem('userInfo')
  }
}

export default mutations

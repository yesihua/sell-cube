import * as types from './mutation-types'
export const foodList = function ({ commit, state }, { food }) {
  commit(types.SET_FOODS, food)
}

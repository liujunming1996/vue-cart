import shop from '../../../api/shop'
import * as types from '../mutation-types'
const state = {
  all: []
}
const getters = {
  allProducts: state => state.all
}
// commit传递给(name)
// action 是唯一的请求或者处理数据的地方
const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      console.log(products)
      commit(types.RECEIVE_PRODUCTS, { products })
    })
  }
}
const mutations = {
  [types.RECEIVE_PRODUCTS] (state, { products }) {
    state.all = products
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}

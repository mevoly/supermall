import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCounter(state, playload) {
      playload.count++
    },
    addToCart(state, playload) {
      playload.checked = true
      state.cartList.push(playload)
    }
  },
  actions: {
    addCart(context, playload) {
      return new Promise((resolve, reject) => {
        let oldProduct = context.state.cartList.find(item => item.iid === playload.iid)
        if (oldProduct) {
          context.commit('addCounter', oldProduct)
          resolve('当前商品数量加一')
        } else {
          playload.count = 1
          context.commit('addToCart', playload)
          resolve('添加了新的商品')
        }
      })

    }
  }
})

export default store
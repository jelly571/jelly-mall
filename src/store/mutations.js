// import {
//   ADD_COUNTER, 
//   ADD_TO_CART
// } from './mutation-types'

export default {
  addCounter(state, payload) {
    payload.count +=1;
  },
  addtoCart(state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  }
}
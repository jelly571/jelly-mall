export default {
  addCart(context, payload) {

    return new Promise((resolve, reject) => {
      //1.查找之前的数组里是否有该商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

      //2.判断oldProduct
      if (oldProduct) {
        context.commit('addCounter', oldProduct)
        resolve('当前商品的数量+1')
      } else {
        payload.count = 1
        context.commit('addtoCart', payload)
        resolve('已添加新商品到购物车')
      }
    })
  }
}
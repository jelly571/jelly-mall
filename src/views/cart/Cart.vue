<template>
  <div id='cart'>
    <!-- 顶部导航栏 -->
    <cart-nav-bar nav-color="var(--color-tint)" class='cart-nav'>
      <div slot="center">购物车({{cartLength}})</div>
    </cart-nav-bar>
    <!-- 商品列表 -->
      <cart-list></cart-list>
    <!-- 底部汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import cartNavBar from "components/common/navbar/NavBar";
import CartList from "./childcomps/CartList"
import CartBottomBar from "./childcomps/CartBottomBar"
import {mapGetters} from 'vuex'

export default {
  name: 'Cart',
  components: {
    cartNavBar,
    CartList,
    CartBottomBar,
    
  },
  computed: {
    //Vuex中的getters中映射计算属性
    ...mapGetters(['cartLength'])
  },
 
}
</script>

<style scoped>
.cart-nav {
  color: #fff;
  font-weight: bold;
  letter-spacing:2px;
}

</style>
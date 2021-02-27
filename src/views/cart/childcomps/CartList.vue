<template>
  <scroll class="cart-list" ref='scroll'>
    <div class='cart-item' v-for='(item, index) in cartList' :key='index'>
      <div class='cart-select'>
        <check-button :isSelect='item.checked' @click.native='checkClick(item)'/>
      </div>
      <div class='cart-image'>
        <img :src="item.image" alt="">
      </div>
      <div class='cart-info'>
        <div class='title'>{{item.title}}</div>
        <div class='desc'>商品描述：{{item.desc}}</div>
        <div class='price'>
          <span>￥ {{item.price}}</span>
          <div class='count'>
            <button>+</button>
              <span>{{item.count}}</span>
            <button>-</button>
          </div>
          
        </div>
      </div>
    </div>
  </scroll>
</template>

<script>
import {mapGetters} from 'vuex'
import CheckButton from './CheckButton'
import Scroll from "components/common/scroll/Scroll";

export default {
  name: 'CartList',
  components: {
    CheckButton,
    Scroll
  },
  computed: {
    //Vuex中的getters中映射计算属性
    ...mapGetters(['cartList'])
  },
  activated() {
    this.$refs.scroll.refresh();
    console.log('...')
  },
  methods: {
    checkClick(item) {
      item.checked = ! item.checked
    }
  }
}
</script>

<style scoped>
.cart-list {
  height: calc(100vh - 44px - 49px - 40px); 
  
  overflow: hidden;
}
.cart-item {
  display: flex;
  /* 元素位于容器的中心 */
  align-items: center;
  padding: 10px 8px;
  border-bottom: 3px solid rgba(100, 100, 100, .1);
  
}
.cart-image {
  margin: 0 8px;
}
.cart-image img {
  width: 70px;
  height: 90px;
  border-radius: 8px;
}

.cart-info {
  overflow: hidden;
}
.cart-info .title {
  color: #333;
  margin-bottom: 20px;
  font-size: 16px;

} 
.cart-info .desc {
  font-size: 12px;
  margin-bottom: 20px;

} 
 .title,.desc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .price {
    display: flex;
    justify-content: space-between;
  }

  .price span {
    color: rgba(250, 131, 51, 0.842);
  }

  .count button {
    margin: 0 5px;
    width: 20px;
    height: 20px;
    color: var(--color-high-text);
    background-color: #fff;
    border: 1px solid #999;
    border-radius: 5px;
    text-align: center;
  }

   .count span {
     color: var(--color-high-text);
   }
</style>
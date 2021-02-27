<template>
  <div class='bottom-bar'>
    <div class="button">
      <check-button :isSelect='isTotalSelect' @click.native='totalCheck'></check-button>
      <span>全选</span>
    </div>

    <div class="total">
      合计 :
      <span>￥{{totalPrice}}</span>
    </div>

    <div class="gocalc">结算({{checkLength}})</div>
  </div>
</template>

<script>
import CheckButton from './CheckButton'
import {mapGetters} from 'vuex'
export default {
  name:'CartBottomBar',
  components:{
    CheckButton
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return this.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    checkLength() {
      return this.cartList.filter(item => {
        return item.checked
      }).length
    },
    isTotalSelect() {
      // return ! this.cartList.filter(item => {
      //   return !item.checked 
      // }).length
      if(this.cartList.length === 0) return false
      return ! this.cartList.find(item => !item.checked)
    }
  },
  methods: {
    totalCheck() {
      if (this.isTotalSelect) {
        this.cartList.forEach(item => item.checked = false)
      } else {
        this.cartList.filter(item => {
          if (!item.checked)
          item.checked = true
        })
      }
    }
  }
}
</script>

<style scoped>

.bottom-bar {
  height: 40px;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
}

.button {
  display: flex;
  align-items: center;
  margin-left: 10px;
}

.button span {
  margin-left: 10px;
}
.total span {
  color: rgba(250, 131, 51, 0.842);
}
.gocalc {
  background-color: var(--color-tint);
  line-height: 40px;
  padding: 0 20px;
  color: #fff;
}

</style>
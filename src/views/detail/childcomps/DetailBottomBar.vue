<template>
  <div class='bottom-bar'>
    <div class="bar-item bar-left">
      <div>
        <img class="server" src="~assets/img/detail/server.png" alt="">
        <span>客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span>店铺</span>
      </div>
      <div @click='selectClick' :class='{active: isClick}'>
        <i class="icon select"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  data() {
    return {
      isClick: false
    }
  },
  methods: {
    selectClick() {
      this.isClick = !this.isClick  
    }
  }

}
</script>

<style scoped>
.bottom-bar {
  height: 49px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  border-top: 1px solid rgba(100, 100, 100, .1)
  
}
.bar-item {
  flex: 1;
}


.bar-left {
  display: flex;
  text-align: center;
  font-size: 13px;
  color: #333;
}
.server {
  width: 20px;
  display: block;
  margin: 5px 15px 3px;
}

.bar-left .icon {
    display: block;
    width: 20px;
    height: 20px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
    margin: 5px 15px 3px;
}

.bar-left .shop {
    background-position:0 -88px;
}

.bar-right {
  display: flex;
  text-align: center;
  line-height: 49px;
  font-size: 14px;
}

.bar-right  div {
  flex: 1;
}

.bar-right .cart {
  background-color: rgba(255, 202, 122, 0.815);
  
}
.bar-right .buy {
  background-color: var(--color-tint);
  color: #fff;
}

.active .select {
  background-position:0 -24px;
}

.active span {
  color:orange
}
</style>
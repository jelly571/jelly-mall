<template>
  <div class='shop-info'>
    <div class='shop-logo'>
      <img :src="shop.logo" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class='content'>
      <div class='sell-info'>
        <div class='sell-num'>{{shop.sells | sellCountFilter}}</div>
        <div>总销量</div>
      </div>
      <div class='goods-info'>
        <div class='goods-num'>{{shop.goodsCount}}</div>
        <div>全部宝贝</div>
      </div>
      <div class='score-info'>
        <table>
          <tr v-for='(item, index) in shop.score' :key='index'>
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
            <td class="value" :class="{'value-higher':item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class='shop-bottom'>
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props:{
    shop: {
      type: Object,
      default: {}
    }
  },
  filters: {
    sellCountFilter(value) {
    return (value < 10000 ? value : (value / 10000).toFixed(1) + '万')
    }
  }
}
</script>

<style scoped>
.shop-info {
  padding: 20px 25px;
  color: #333;
  border-bottom: 5px solid#f2f5f8;
}
.shop-logo {
  display: flex;
  /* 元素位于容器的中心 */
  align-items: center;
}
.shop-logo img{
  width: 40px;
  border-radius: 50%;
  border: 1px solid rgba(100, 100, 100, .1);
  margin-right: 10px;
}

.content {
  display: flex;
  margin-top: 10px;
  font-size: 12px;
  align-items: center;
}

.sell-info {
  padding-right: 15px;
  text-align: center;
}
.sell-num,
.goods-num {
  font-size: 16px;
  margin-bottom: 10px;
  color: #333;
}
.goods-info {
  padding-right: 20px;
  border-right: 1px solid rgba(100, 100, 100, .2);
  margin-right: 20px;
  text-align: center;
}
.score-info table {
  width: 110px;
  font-size: 13px;

}
.score-info table td{
  padding:5px 0;
}
.score {
  color: var(--color-high-text);
}
.score-better {
  color:#f13e3a;
}
.value span{
  background-color: var(--color-high-text);
  color: #fff;
}
.value-higher span{
  background-color: #f13e3a;
  color: #fff;
}
.shop-bottom {
  font-size: 13px;
  text-align: center;
  margin-top: 15px;
}
.enter-shop {
  display: inline-block;
  background-color: #c6d9f7;
  width: 120px;
  height: 30px;
  line-height: 30px;
  border-radius: 15px;
}

</style>
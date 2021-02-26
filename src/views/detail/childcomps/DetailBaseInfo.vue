<template>
  <!-- 有数据时展示 -->
  <div v-if='Object.keys(goods).length !==0' class='baseinfo'>
    <div class='title'>{{goods.title}}</div>
    <div class='price'>
      <span class="new">{{goods.newPrice}}</span>
      <span class="old">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class='discount' :style="{backgroundColor: goods.discountBgColor}">{{goods.discount}}</span>
    </div>
    <div class='other-info'>
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length - 1].name}}</span>
    </div>
    <div class='ser-info'>
      <!-- 数字遍历从1开始，数组遍历从0开始 -->
      <span v-for="index in (goods.services.length - 1)" :key="index">
        <img v-if="goods.services[index-1].icon" :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index -1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    goods: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style scoped>
.baseinfo {
  padding: 0 8px;
  margin-top: 15px;
  border-bottom:5px solid #f2f5f8;
  color:#999;
}
.title {
  line-height: 1.2;
  color: #333;

}

.price {
  margin-top: 10px;
}

.price .new {
  color: var(--color-high-text);
  font-size: 20px;
  margin-right: 10px;
}

.price .old {
  font-size: 12px;
  text-decoration: line-through;
}

.price .discount {
  color: #fff;
  font-size: 12px;
  border-radius: 5px;
  padding: 1px 2px;
  position:relative;
  top: -10px;
}

.other-info {
  margin-top: 20px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(100, 100, 100, .1)
}

.ser-info {
  font-size: 12px;
  color: #333;
  display: flex;
  justify-content: space-between;
  line-height: 50px;
}
.ser-info img {
  width: 12px;
  position: relative;
  top: 2px;
  left: -2px;
}
</style>
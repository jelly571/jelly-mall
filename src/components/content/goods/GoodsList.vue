<template>
  <div class='goods'>
    <div v-for='(item, index) in goods' 
        :key='index' 
        class='goods-item' @click='itemClick(item)'>
      <!-- @load监听图片加载 -->
      <img v-lazy="showImg(item)" alt="" @load='imgLoad'>
      <div class='goods-info'>
        <p>{{item.title}}</p>
        <span class='price'>￥{{item.price}}</span>
        <span class='cfav'>{{item.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsList',
  props: {
    goods: {
      type: Array,
      default: []
    }
  },
  computed:{
    
  },
  methods: {
    imgLoad() {
      //可以采用父子组件通信
      //如果不是父子组件的话 
      //可以通过vuex，在这里改变vuex中的一个属性，表示图片加载完成$store
      //也可以通过事件总线$bus
        this.$bus.$emit('itemImageLoad')
    },
    itemClick(item) {
      //跳转详情页，并带上id
      if (this.$route.path.indexOf('/home') !== -1) {
        this.$router.push('/detail/'+ item.iid).catch(err => err)
      }
    },
    
    showImg(item) {
      return item.image || item.show.img
    }
  }
}
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;/*规定灵活的项目在必要的时候拆行或拆列*/
    justify-content: space-around;/*项目位于各行之前、之间、之后都留有空白的容器内。 */
    padding: 5px;
  }
  
  .goods-item {
    position: relative;
    width: 48%;
    padding-bottom: 40px; 
  }
  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5px;
  }
  .goods-info p {
    overflow: hidden;
    margin-bottom: 5px;
    white-space: nowrap; /* 规定段落中的文本不进行换行 */
    text-overflow: ellipsis; /*显示省略符号来代表被修剪的文本*/
  }
  .goods-info .price {
    margin-right: 25px;
    color: var(--color-high-text);
  }
  .goods-info .cfav {
    position: relative;
  }
  .goods-info .cfav::before {
    content: '';
    /*绝对定位开启后行内会变成块元素*/
    position: absolute;
    left: -15px;
    top: -1px;
    background-image: url('~assets/img/common/collect.svg');
    background-size: 14px;
    width: 14px;
    height: 14px;
  }
</style>
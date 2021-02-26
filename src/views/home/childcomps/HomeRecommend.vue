<template>
<div class='recommend'>
    <div v-for='(item, index) in recommends' :key='index' class='recommend-item'>
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <p>{{item.title}}</p>
    </div>
</div>

</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommends: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
  .recommend {
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 10px 1px 15px;
    border-bottom: 8px solid #f2f5f8;
   
  }

  .recommend-item img {
    width: 80%;
    margin-bottom: 10px;
  }
</style>
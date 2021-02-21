<template>
<div class='recommend'>
    <div v-for='(item, index) in recommends' :key='index' class='recommend-item'>
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
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
    width: 100%;

  }
  .recommend-item{
   
  }
  .recommend-item img {
    width: 80%;
  }
</style>
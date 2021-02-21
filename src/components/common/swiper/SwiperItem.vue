<template>

  <div class='slide'>
    <!-- 放入超链接和图片 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SwiperItem'
}
</script>

<style scoped>
  .slide{ 
    width: 100%;
    /* 不缩放 */
    flex-shrink: 0;
  }
.slide img {
  width: 100%;
}


 
</style>
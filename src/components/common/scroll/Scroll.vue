<template>
  <!-- better-scroll需要有一个外部容器指定高度，内容一个容器可以滚动，
  内容容器只能有一个，但是 内容容器里可以有多个容器 -->
  <div class='wrapper' ref='wrapper'>
    <div class='content'>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll' 
export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    //内部需要有一个对象引用这个对象，确保可以调用这个对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      //新版本需要添加这个
      observeDOM: true,
    })
  },
  methods:{
  }
}
</script>

<style scoped>


</style>
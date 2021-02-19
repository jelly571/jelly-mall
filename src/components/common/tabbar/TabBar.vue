<template>
  <div class='tab-bar'>
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'TabBar',
  components: {

  }
}
</script>

<style scoped>
.tab-bar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -2px 1px rgba(100,100,100,0.1);/*X轴偏移量、Y轴偏移量、模糊半径*/
  background-color: #f6f6f6;
}

</style>
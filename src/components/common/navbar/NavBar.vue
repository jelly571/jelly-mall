<template>
  <div class='nav-bar' :style='{backgroundColor: navColor}'>
    <div class='left'><slot name='left'></slot></div>
    <div class='center'><slot name='center'></slot></div>
    <div class='right'><slot name='right'></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    navColor: {
      type: String,
      default: 'var(--color-tint)'
    } 
  },
}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    /*垂直居中*/
    height: 44px;
    line-height: 44px;
    /*水平居中*/
    text-align: center;    
  }
  .left, .right {
    width: 60px;
  }
  .center {
    flex: 1;
  }
</style>
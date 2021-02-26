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
    box-shadow: 0 1px 1px rgba(100,100,100,0.1);  
  }
  .left, .right {
    width: 60px;
  }
  .center {
    flex: 1;/* flex: 1; -> felx: 1 1 0% */ /*占据全部剩余空间*/
  }
</style>
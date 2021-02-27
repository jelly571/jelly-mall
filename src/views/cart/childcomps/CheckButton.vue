<template>
  <div class='check-button' >
    <div v-if='isSelect'>
      <img src="~assets/img/cart/select.png" alt="">
    </div>
    <div v-else>
      <img src="~assets/img/cart/unselect.png" alt="">
    </div>

  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    isSelect: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style scoped>
.check-button img{
  width: 18px;
}
</style>
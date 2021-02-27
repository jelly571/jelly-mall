<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
    
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data(){
    return {
      isShow: false,
      message: ''
    }
  },
  methods: {
    show (message='默认文字', duration=2000) {
      this.isShow = true;
      this.message = message
      
      setTimeout(() => {
        this.isShow = false;
        this.message = ''
      }, duration)
    }
  }
}
</script>

<style scoped>
  .toast{
    position: fixed;
    left:50%;
    top:50%;
    background-color: rgba(0,0,0,0.7);
    color:#fff;
    transform: translate(-50%, -50%);
    font-size: 14px;
    z-index: 999;
    padding:8px;
  }
</style>
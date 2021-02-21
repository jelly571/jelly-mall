<template>
  <div class='tab-control'>
    <div v-for='(item, index) in titles' 
    :key='index' 
    @click='itemClick(index)'
    class='tab-item' 
    :class='{active: index ===  currentIndex}'>
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    }
  }

}
</script>

<style scoped>
  .tab-control {
    display:flex;
    background-color: var(--color-background);
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 15px;
  }
  .tab-item {
    flex: 1;
  }
  .tab-item span {
    padding: 5px;
  }
  .active span{
    color: var(--color-high-text);
    border-bottom: 2px solid var(--color-tint);
  }
</style>
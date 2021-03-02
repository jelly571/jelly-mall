<template>
  <div class='menu'>
    <div class='menu-item' 
         :class='{active: currentIndex == index}'
         v-for='(item, index) in menuList' 
         :key='index'
         @click='itemClick(index)'>
      {{item.title}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryMenu',
  props: {
    menuList: {
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
      this.$emit('menuItemClick',index)
    }
  }
}
</script>

<style scoped>
.menu {
  width: 100px;
  background-color: #f6f6f6;
}
.menu-item {
  padding: 15px 0;
  font-size: 15px;
  color:#333;
  text-align: center;
}
.menu-item.active {
  background-color: #fff;
  color:var(--color-high-text);
  font-weight: bold;
}
</style>
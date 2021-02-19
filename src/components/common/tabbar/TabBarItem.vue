<template>
    <div class='tab-bar-item' @click='itemClick'>
      <div v-if='!isActive'><slot name='item-icon'></slot></div>
      <div v-else><slot name='item-active'></slot></div>
      <!--加一层div的目的是，用户添加的标签会直接替换slot,
      这样在slot上添加class不会生效-->
      <!-- 动态设置样式，让用户使用组件时自己传入点击后的字体颜色 -->
      <!-- <div :class='{active: isActive}'><slot name='item-text'></slot></div> -->
      <div :style='activeStyle'><slot name='item-text'></slot></div>
    </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    colorActive: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      
    }

  },
  computed: {
    isActive() {
      //this.$route哪个路由活跃就是哪个对象的
      //indexOf返回某个指定的字符串值在字符串中首次出现的位置
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.colorActive} : {}
    }
    
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch(err => err)
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
  height: 49px;
}

.tab-bar-item img {
  width: 24px;
  margin: 2px 0;
}

.active {
  color: var(--color-high-text)
}
</style>
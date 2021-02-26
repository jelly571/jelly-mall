<template>
  <div id="app">
    <!-- 2.路由跳转页面 -->
    <!-- exclude值为组件导出的name值 -->
    <keep-alive exclude='Detail'>
      <router-view></router-view>
    </keep-alive>
    <!-- 1.底部标签栏 -->
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from "components/content/tabbar/MainTabBar";
  
  export default {
    name: "App",
    components: {
      MainTabBar,
    },
  };
</script>

<style>
  @import "assets/css/base.css";
</style>

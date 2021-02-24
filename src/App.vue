<template>
  <div id="app">
    <!-- 2.路由跳转页面 -->
    <keep-alive>
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

<template>
  <div id="home">
    <!-- 顶部导航栏 -->
    <nav-bar navColor="var(--color-tint)" class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <!-- 滚动 -->
    <scroll class='content'>
      <!-- 轮播图 -->
      <home-swiper :banners='banners'></home-swiper>
      
      <!--推荐栏-->
      <home-recommend :recommends='recommends'></home-recommend>

      <!--本期流行-->
      <feature-view></feature-view>

      <!--商品导航-->
      <tab-control 
      :titles="['流行', '新款', '精选']" 
      class='tab-control'
      @tabClick='tabItemClick'>
      </tab-control>
      
      <!--商品信息-->
      <goods-list :goods='gooodsList'></goods-list>
      </scroll>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll"
import TabControl from "components/content/tabcontrol/TabControl"
import GoodsList from "components/content/goods/GoodsList"

import HomeSwiper from './childcopms/HomeSwiper'
import HomeRecommend from './childcopms/HomeRecommend'
import FeatureView from './childcopms/FeatureView'
/* 网络请求*/
import { getHomeMultidata, getHomeGoods } from "network/home";


export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll

  },
  data() {
    return {
      /*轮播图数据*/
      banners: [],
      /*推荐数据*/
      recommends: [],
      /* 商品数据 */
      goods: {
        pop: {page: 0, list: []},
        new: {page: 0, list: []},
        sell: {page: 0, list: []},
      },
      currentType: 'pop',

    };
  },
  computed: {
    gooodsList() {
      return this.goods[this.currentType].list
    }
  },
  /* 数据网络请求在实例创建完成后进行 */
  created() {
    //1.请求多个数据
    this.getHomeMultidata();
    //2.请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },

  methods: {
    /* 网络请求相关函数 */
    getHomeMultidata() {
      /*这时引用的home.js中的函数 */
      getHomeMultidata().then((res) => {
        /*轮播图数据*/
        this.banners = res.data.banner.list;
        /*推荐数据*/
        this.recommends = res.data.recommend.list;
      });
    },

    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        //完成下拉加载更多
      })
    },


    tabItemClick(index) {
      switch (index) {
        case 0: 
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
      
    }
  },
};
</script>

<style scoped>
#home {
  /* margin-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  color: rgb(255, 255, 255);
  font-weight:bold;
  letter-spacing:2px;
  position: fixed;
  /*否则center宽度不撑满整个屏幕*/
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}

.content {
  /* height: calc(100% - 93px); */
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;


}
</style>
<template>
  <div id="home">
    <!-- 顶部导航栏 -->
    <nav-bar nav-color="var(--color-tint)" class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    
    <!--商品导航-->
    <tab-control 
      :titles="['流行', '新款', '精选']" 
      @tabClick='tabItemClick'
      ref='tabControl1'
      class='tabControl'
      v-show='isTabFixed'>
    </tab-control>

    <!-- 滚动 -->
    <scroll class='content' ref='scroll' 
            :probe-type='3'
            @scrollpos='contentScroll'
            :pull-up-load='true'
            @pullingUp='loadMore'>

      <!-- 轮播图 -->
      <home-swiper :banners='banners' @swiperImageLoad='swiperImageLoad'></home-swiper>
      
      <!--推荐栏-->
      <home-recommend :recommends='recommends'></home-recommend>

      <!--本期流行-->
      <feature-view></feature-view>

      <!--商品导航-->
      <tab-control 
      :titles="['流行', '新款', '精选']" 
      @tabClick='tabItemClick'
      ref='tabControl2'>
      </tab-control>
      
      <!--商品信息-->
      <goods-list :goods='gooodsList'></goods-list>
      </scroll>
      
      <!-- 回到顶部 -->
      <!-- 监听组件根元素的点击.native -->
      <back-top @click.native='backtopClick' v-show='isShowBacktop'></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backtop/BackTop";

import {itemListenerMixin} from "common/mixin"
import HomeSwiper from './childcomps/HomeSwiper';
import HomeRecommend from './childcomps/HomeRecommend';
import FeatureView from './childcomps/FeatureView';
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
    Scroll,
    BackTop

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
      isShowBacktop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      //切换路由时要保存当前位置
      saveY: 0,

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
  //1.在mounted中监听goodlist的item中图片加载完成
    //防抖动操作debounce
  mixins: [itemListenerMixin],

  //切换路由时要保存当前位置
  activated() {
    //否则回来时会回到顶部
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
  },
  deactivated() {
    //保存y值
    this.saveY = this.$refs.scroll.getScrollY();
    //取消全局事件监听
    this.$bus.$off('itemImageLoad', this.itemImagListener)
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
        this.$refs.scroll.finishPullUp();
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
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },


    backtopClick() {
      //500ms回到00顶部
      //通过refs拿到ref为scroll的对象 调用里面的方法
      this.$refs.scroll.scrollTo(0, 0, 500)
    },

    //监听scroll滚动
    contentScroll(position) {
      //1.判断BackTop是否显示
      this.isShowBacktop = -position.y > 1000;
      
      //2.决定tabcontrol是否吸顶
      this.isTabFixed = -position.y >= this.tabOffsetTop ;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      
    },
    //防抖
    debounce(func, delay) {
      let Timer = null
    },

    //监听轮播图图片加载完成
    //tabcontrol的滚动到的位置
    swiperImageLoad() {
      //2.获取tabControl的offsetTop
      //所有组件都有一个属性$el：用于获取组件中的元素
      //offsetTop指obj距离上方或上层控件的位置，整型，单位像素
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
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
  font-weight: bold;
  letter-spacing:2px;
  /* 在适应浏览器原生滚动时，为了让导航不跟随一起滚动，使用fixed,
  使用better-scrool后不再需要*/
  /* position: fixed;
  //否则center宽度不撑满整个屏幕
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}

/* //使用better-scroll后无效了
  .tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
} */

.tabControl {
  position: relative;
  z-index: 999;
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
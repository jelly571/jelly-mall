<template>
  <div id="detail">
    <!-- 顶部导航栏 -->
    <detail-nav-bar class='dnavbar' ref='nav' @titleClick='titleClick'></detail-nav-bar>

    <scroll class='detail-content' ref="scroll"  
            :probe-type='3'
            @scrollpos='contentScroll'>
      <!-- 轮播图 -->
      <detail-swiper :top-images="topImages"></detail-swiper>
      <!-- 商品信息 -->
      <detail-base-info :goods="goods"></detail-base-info>
      <!-- 商家信息 -->
      <detail-shop-info :shop="shop"></detail-shop-info>
      <!-- 商品详细信息 -->
      <detail-goods-info :detail-info='detailInfo' @detailImgLoad='detailImgLoad'></detail-goods-info>
      <!-- 商品参数 -->
      <detail-params ref='params' :param-info='paramInfo'></detail-params>
      <!-- 用户评价 -->
      <detail-comment ref='comment' :comment-info='commentInfo'></detail-comment>
      <!-- 推荐商品 -->
      <detail-goods-list ref='recommend' :goods='recommends'></detail-goods-list>
    </scroll>
    
    <!-- 回到顶部 -->
      <!-- 监听组件根元素的点击.native -->
      <back-top @click.native='backtopClick' v-show='isShowBacktop'></back-top>

    <!-- 底部工具栏 -->
    <detail-bottom-bar @addCart='addToCart'></detail-bottom-bar>
    
  </div>
</template>

<script>
import DetailNavBar from "./childcomps/DetailNavBar";
import DetailSwiper from "./childcomps/DetailSwiper";
import DetailBaseInfo from "./childcomps/DetailBaseInfo";
import DetailShopInfo from "./childcomps/DetailShopInfo";
import DetailGoodsInfo from "./childcomps/DetailGoodsInfo";
import DetailParams from "./childcomps/DetailParams";
import DetailComment from "./childcomps/DetailComment";
import DetailBottomBar from "./childcomps/DetailBottomBar";

import BackTop from "components/content/backtop/BackTop";
import DetailGoodsList from "components/content/goods/GoodsList";
import { getDetail, GoodsInfo, Shop, GoodsParam, getRecommend } from "network/detail";

import Scroll from "components/common/scroll/Scroll";

import {itemListenerMixin} from "common/mixin"

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParams,
    DetailComment,
    DetailGoodsList,
    DetailBottomBar,
    Scroll,
    BackTop,

  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      currentIndex: 0,
      isShowBacktop: false
    };
  },
  //在mounted中监听goodlist的item中图片加载完成
  //防抖动操作debounce
  mixins: [itemListenerMixin],
  //因为detail没有开启keep-alive所以没有activated和deactivated
  destroyed() {
    //取消全局事件监听
    this.$bus.$off('itemImageLoad', this.itemImagListener)
  },
  created() {
    //保存被点击商品的id
    this.iid = this.$route.params.iid;

    //发送网络请求，请求商品详细信息
    getDetail(this.iid).then((res) => {
      //1.获取数据
      const data = res.result;
      //2.获取顶部轮播数据
      this.topImages = data.itemInfo.topImages;
      //3.获取商品信息
      this.goods = new GoodsInfo(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //4.获取商家店铺信息
      this.shop = new Shop(data.shopInfo);
      //5.获取商品详情信息
      this.detailInfo = data.detailInfo;
      //6.获取商品参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      //7.获取评论信息
      if(data.rate.cRate !== 0){
        this.commentInfo = data.rate.list[0]
      }

      //8.获取推荐数据
      getRecommend().then(res => {
        this.recommends = res.data.list;
      }) 
    
    });
  },
  methods: {
    //监听详情图片加载
    detailImgLoad() {
      this.$refs.scroll.refresh();

      // 加载完成后计算offsetTop
      this.themeTopYs = []
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      this.themeTopYs.push(1e10);
    },
    
    //点击切换
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 0)
    },

    //监听滚动
    contentScroll(position) {
      let currentY = -position.y;
      let len = this.themeTopYs.length;
      for(let i = 0; i < len - 1; i++) {
        if(this.currentIndex !== i && currentY > this.themeTopYs[i] && currentY < this.themeTopYs[i + 1]) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }

      //判断BackTop是否显示
      this.isShowBacktop = -position.y > 1000;
        
    },

    //回到顶部
    backtopClick() {
      //500ms回到00顶部
      //通过refs拿到ref为scroll的对象 调用里面的方法
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    addToCart() {
      //1.获取购物车中需要展示的信息
      const product = {}
      product.iid = this.iid;
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      
      //2.将商品添加到购物车
      this.$store.dispatch('addCart', product).then(res => {
        this.$toast.show(res,1500)
      })

      //3.添加到购物车成功
      
    }
   
  }
};
</script>

<style scoped>
#detail {
  /* 隐藏底部导航栏 */
  position: relative;
  z-index: 99;
  background-color: #fff;
  height: 100vh;
}
.dnavbar {
  position: relative;
  z-index: 99;
}
.detail-content {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}
</style>
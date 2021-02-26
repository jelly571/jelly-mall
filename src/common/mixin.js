import {debounce} from "common/utils";

export const itemListenerMixin = {
  data () {
    return {
      //首页监听
      itemImagListener: null,
      refresh: null
    }
  },
  mounted() {
    //防抖动操作debounce
    this.refresh = debounce(this.$refs.scroll.refresh, 50)

    //对监听事件进行保存
    this.itemImagListener = () => {
      //当每一张图片加载完成后，刷新，重新计算可滚动区域
      //scroll在created阶段可能未挂载，$refs在created阶段也可能为空，因为组件还未挂载，因为是在mounted阶段初始化的scroll
      //路由切换，需要增加this.$refs.scroll存在的判断
      //或者使用keep-alive缓存，防止重新加载
      //this.$refs.scroll && this.$refs.scroll.refresh();
      this.refresh();
    }
    this.$bus.$on('itemImageLoad', this.itemImagListener)

  }
}
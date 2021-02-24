<template>
  <!-- better-scroll需要有一个外部容器指定高度，内容一个容器可以滚动，
  内容容器只能有一个，但是 内容容器里可以有多个容器 -->
  <div class='wrapper' ref='wrapper'>
    <div class='content'>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll' 
export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },
  },
  mounted() {
    //1.创建BScroll对象
    //内部需要有一个对象引用这个对象，确保可以调用这个对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      //新版本需要添加这个
      observeDOM: true,
      //无论是否设置click: true，sacroll下的button都能点击
      //必须设置click: true，sacroll下的div才能点击
      click: true,
      /* probeType=0,不监听
      probeType=1 滚动时会派发scroll事件，会截流。
      probeType=2 滚动时实时派发scroll事件，不会截流。 
      probeType=3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件*/
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })

    //2.监听滚动的位置
    //监听滚动'scroll'
    if(this.probeType === 2 || this.probeType === 3) {
      this.scroll && this.scroll.on('scroll', (position) => {
        this.$emit('scrollpos', position)
      })
    }

    //3.监听下拉事件
    if (this.pullUpLoad) {
      this.scroll && this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp');

      })
    }
  },
  methods:{
    //回到顶部封装
    scrollTo(x, y, time) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    //完成监听下拉，否则只会监听一次
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    //刷新,重新计算可滚动区域
    refresh() {
      //监听图片加载时scroll在created阶段可能未挂载，因为是在mounted阶段初始化的scroll
      
      this.scroll && this.scroll.refresh();
    },

    getScrollY() {
     return this.scroll ? this.scroll.y : 0
    }
  }
}
</script>

<style scoped>


</style>
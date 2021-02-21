<template>
  <!-- touchstart触摸开始，多点触控，后面的手指同样会触发
  touchmove	接触点改变，滑动时
  touchend	触摸结束，手指离开屏幕时 -->
  <div id='wrap-swiper'>
    <!-- 存放图片的容器 -->
    <div class='swiper' @touchstart='touchStart' @touchmove='touchMove' @touchend='touchEnd'>
      <slot name='swiper'></slot>
    </div>

    <!-- 存放底部圆点的容器 -->
    <div class='indicator'>
      <slot name='indicator' v-if="showIndicator && slideCount>1">
        <div v-for='(item, index) in slideCount' :key='index' class='indi-item' :class='{active: currentIndex - 1 === index}'></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  props: {
    //循环滚动的时间间隔
    interval: {
      type: Number,
      default:  3000
    },
    //动画切换的时间,平移这个动画的速度
    animDuration: {
      type: Number,
      default: 500
    },
    //拖动的比例 判断是否切换下一个swiperItem
    moveRatio: {
        type: Number,
        default: 0.25
    },
    //是否显示下方小圆点
    showIndicator: {
        type: Boolean,
        default: true
    }
  },
  data() {
    return {
      slideCount: 0,//圆的个数，初始为0，挂载完成后获取dom更新数目
      totalWidth: 0,// swiper的宽度
      swiperStyle: {},// swiper样式
      currentIndex: 1,//当前的index
      scrolling: false, // 是否正在滚动
    }
    
  },
  mounted() {
    // 挂载完成后开启定时，多少秒后执行
    //setTimeoutsetTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式。
    setTimeout(() => {
      //1.操作Dom 在前后各添加一张slide
      this.handleDom();
      //2.开启轮播
      this.startTimer();
    }, 500)

  },
 
  methods:{
    /**
       * 1.操作DOM, 在DOM前后添加Slide
       */
    handleDom() {
      // 1.获取要操作的元素
      //swiperEl：class为swiper的元素 有n个swiperItem class是swiper
      //slidesELs：class为slide的元素 轮播中图在的那个div swiperItem
      let swiperEl = document.querySelector('.swiper');
     // let slidesEls = document.getElementsByClassName('slide');
      let slidesEls = swiperEl.getElementsByClassName('slide');
      
      //2.保存图片数/圆点个数
      this.slideCount = slidesEls.length;

      //3.如果图片数大于一个 则在前后分别添加一个slide [1,2,3,4]--[4',1,2,3,4,1']
      if (this.slideCount > 1) {
        //cloneNode方法将复制并返回调用它的节点的副本。
        //如果传递参数是 true，将递归复制当前节点的所有子孙节点,否则只复制当前节点。
        let cloneFirst = slidesEls[0].cloneNode(true);
        let cloneLast = slidesEls[this.slideCount - 1].cloneNode(true);
        //insertBefore()在指定的已有子节点之前插入新的子节点
        //appendChild() 方法向节点添加最后一个子节点
        swiperEl.insertBefore(cloneLast, slidesEls[0]);
        swiperEl.appendChild(cloneFirst);
        //offsetWidth返回元素的宽度（包括元素宽度、内边距和边框，不包括外边距）
        this.totalWidth = swiperEl.offsetWidth;
        this.swiperStyle = swiperEl.style;
      }

       // 4.让swiper元素, 显示第一个(目前是显示前面添加的最后一个元素)
        this.setTransform(-this.totalWidth)
    },
    
    /*设置滚动的位置*/
    setTransform(position) {
      //transform 属性向元素应用2D或3D转换,对元素进行旋转、缩放、移动或倾斜。
      // -webkit 是表示针对 safari 浏览器支持，-ms表示针对 IE 浏览器支持。
      this.swiperStyle.transform = `translateX(${position}px)`;
      this.swiperStyle['-webkit-transform'] = `translateX(${position}px)`;
      this.swiperStyle['-ms-transform'] = `translateX(${position}px)`;

    },

     /**
       * 定时器操作
       */
    startTimer() {
      // window.setInterval按照指定的周期（以毫秒计）来调用函数或计算表达式
      this.playTimer = window.setInterval(() => {
        this.currentIndex++;
        this.scrollContent(-this.currentIndex * this.totalWidth);
      },this.interval)
    },

    stopTimer() {
        window.clearInterval(this.playTimer);
    },

    /**
       * 滚动到正确的位置
       */
    scrollContent(currentPosition) {
        // 1.设置正在滚动
        this.scrolling = true;

        // 2.开始滚动动画
        //transition用于在一定的时间内平滑的过度
        this.swiperStyle.transition = 'transform ' + this.animDuration + 'ms';
        this.setTransform(currentPosition)

        // 3.判断滚动到的位置
        this.checkPosition();
        // 4.滚动完成
        this.scrolling = false
    },

   /**
       * 校验正确的位置
  */
    checkPosition() {
      //延时等动画
      window.setTimeout(() => {
        // 1.校验正确的位置
        //[1,2,3,4]--[4',1,2,3,4,1']当到达由1'变为1和4'变为4时需要瞬间变换
        this.swiperStyle.transition = '0ms';
        if (this.currentIndex > this.slideCount) {
          this.currentIndex = 1;
          this.setTransform(-this.currentIndex * this.totalWidth)
        } else if (this.currentIndex == 0) {
          this.currentIndex = this.slideCount;
          this.setTransform(-this.currentIndex * this.totalWidth);
        }
        
      }, this.animDuration)
    },
    /**
       * 鼠标拖动事件的处理
    */
    touchStart(e) {
      // 1.如果正在滚动, 不可以拖动
      if (this.scrolling) return;

      // 2.停止定时器
      this.stopTimer();
      // 3.保存开始滚动的位置
      this.startX = e.touches[0].pageX;

    },

    touchMove(e) {
      // 1.计算出用户拖动的距离
      this.currentX = e.touches[0].pageX;
      this.distance = this.currentX - this.startX;
      let currentPosition = -this.currentIndex * this.totalWidth;
      let moveDistance = this.distance + currentPosition;

      // 2.设置当前的位置
      this.setTransform(moveDistance);

    },

    touchEnd(e) {
      // 1.获取移动的距离
      let currentMove = Math.abs(this.distance);

      // 2.判断最终的距离
      if(this.distance == 0) {
        return
      } else {
        if (currentMove > this.totalWidth * this.moveRatio){
          this.distance > 0 ? this.currentIndex-- : this.currentIndex++;
        }
      }

      // 3.移动到正确的位置
        this.scrollContent(-this.currentIndex * this.totalWidth);

      // 4.移动完成后重新开启定时器
        this.startTimer();
    },
    


  }

}
</script>

<style scoped>
  #wrap-swiper {
    overflow: hidden;
    position: relative;
  }
  .swiper{
    display: flex;
  
  }
 .indicator {
   display: flex;
   position: absolute;
   bottom: 8px;
   /* 使宽度撑满屏幕,可用width:100%代替 */
   left: 0;
   right: 0;
   /* 用于设置弹性盒子内元素在主轴（横轴）方向上的对齐方式。 */
   justify-content: center;
 }
 .indi-item {
   width: 8px;
   height: 8px;
   /* 画圆 */
   border-radius: 4px;
   background-color: #fff;
   margin: 0 5px;
 }

 /*同一个元素的class之间不要加空格*/
 .indi-item.active{
        background-color: rgba(117, 171, 252, 0.8);
    }
</style>
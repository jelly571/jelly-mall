<template>
  <swiper>
      <swiper-item slot='swiper' v-for="(item, index) in banners" :key="index">
          <a :href="item.link"> 
            <img :src="item.image" alt="" @load='imgLoad'/>
          </a>
         
      </swiper-item>
    </swiper>
</template>

<script>
import Swiper from "components/common/swiper/Swiper";
import SwiperItem from "components/common/swiper/SwiperItem";
export default {
  name: 'HomeSwiper',
  props: {
    banners: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      //图片是否加载
      isLoad: false
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    imgLoad() {
      //只需要发射一次
      if(!this.isLoad) {
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }

    }
  }
}
</script>

<style scoped>

</style>
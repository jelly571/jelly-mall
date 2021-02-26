<template>
    <swiper class='detail-swiper'>
      <swiper-item slot='swiper' 
          v-for='(item, index) in topImages' 
          :key='index'
          class='item-swiper'>
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
</template>

<script>
import Swiper from "components/common/swiper/Swiper";
import SwiperItem from "components/common/swiper/SwiperItem";

export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style scoped>
.detail-swiper {
  height: 260px;
  overflow: hidden;
}
</style>
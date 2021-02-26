<template>
  <div class='detail-navbar'>
    <nav-bar navColor='#fff' class='navbar'>
      <div slot="left" class='back' @click='backClick'>
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class='titile'>
        <div v-for='(item, index) in titles' 
        :key='index'
        class='titile-item'
        @click='detailItemClick(index)'
        :class='{active: currentIndex == index}'>
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar,
    
  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    detailItemClick(index) {
      this.currentIndex = index;
      this.$emit('titleClick', index)
    },

    backClick() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.titile {
  display: flex;
  font-size: 14px;
}

.titile-item {
  flex: 1;
 
}

.titile-item.active {
  color: var(--color-high-text)
}

.back img{
  margin-top: 11px;
}
</style>
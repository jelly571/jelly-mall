<template>
  <div class='detail-info' v-if='Object.keys(detailInfo).length !== 0'>
    <div class="info-desc">
      <div class="start"/>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"/>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-List" >
      <img v-for='(item, index) in detailInfo.detailImage[0].list' 
          :key='index'
          @load='detailImgLoad' 
          :src="item" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    detailInfo: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0,
    }
  },
  methods: {
    detailImgLoad() {
      if (++this.counter === this.imagesLength) {
        this.$emit('detailImgLoad')
      }
    }
  },
  watch:{
    detailInfo(){
      this.imagesLength = this.detailInfo.detailImage[0].list.length;
    }
  }
}
</script>

<style scoped>
.detail-info {
  border-bottom:5px solid #f2f5f8;
}
.info-desc {
  padding: 30px 10px 0;
  position: relative;
  font-size: 13px;
}
.info-desc .desc {
  margin-bottom: 20px;
}
.info-desc .start {
  position: absolute;
  width: 80px;
  height: 1px;
  background-color: #666;
  top: 15px;
 
}
.info-desc .end {
  position: absolute;
  width: 80px;
  height: 1px;
  background-color: #666;
  bottom: -15px;
  right: 10px;
}

.info-key {
  color: #333;
  font-size: 13px;
  padding: 10px;
}
.info-List img {
  width: 100%;
}
</style>
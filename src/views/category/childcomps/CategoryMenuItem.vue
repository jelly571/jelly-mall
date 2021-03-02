<template>
  <scroll class="scroll menu-content" ref="scroll">
    <div>
      <div class="menu-item" v-if='categoryData'>
        <div class="subitem" v-for="(item, index) in categoryData" :key="index">
          <a :href="item.link">
            <img @load='imgLoad' :src="item.image" alt="" />
            <div>{{ item.title }}</div>
          </a>
        </div>
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import {debounce} from "common/utils";
export default {
  name: "CategoryMenuItem",
  props: {
    categoryData: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      refresh: {}
    }
  },
  mounted() {
    this.refresh  = debounce(this.$refs.scroll.refresh, 50)
  },
  
  components: {
    Scroll,
  },
  methods: {
    imgLoad() {
      this.refresh()
    }
  }
};
</script>

<style scoped>
.scroll {
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}
.menu-content {
  flex: 1;
}
.menu-item {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15px;
}
.subitem {
  padding: 10px;
  font-size: 13px;
  width: 80px;
}
.subitem img {
  width: 50px;
}
</style>
<template>
  <div id="category">
    <category-nav-bar class="navbar">
      <div slot="center">商品分类</div>
    </category-nav-bar>
    <div class="content">
      <scroll class="scroll">
        <category-menu
          :menuList="categories"
          @menuItemClick="menuItemClick"
        ></category-menu>
      </scroll>
      <category-menu-item ref='item' :categoryData="categoryData"></category-menu-item>

    </div>
  </div>
</template>

<script>
import { getCategory, getSubCategory } from "network/category.js";
import Scroll from "components/common/scroll/Scroll";
import CategoryNavBar from "components/common/navbar/NavBar";
import CategoryMenu from "./childcomps/CategoryMenu";
import CategoryMenuItem from "./childcomps/CategoryMenuItem";
export default {
  name: "Category",
  components: {
    CategoryNavBar,
    CategoryMenu,
    CategoryMenuItem,
    Scroll,
  },
  data() {
    return {
      categories: [],
      categoryData: [],
      currentIndex: -1,
    };
  },
  created() {
    this.getData();
    
  },


  methods: {
    getData() {
      getCategory().then((res) => {
        this.categories = res.data.category.list;
        this.getSubData(0); 
       
        
      });  
    },
    getSubData(index) {
      this.currentIndex = index
      const maitKey = this.categories[index].maitKey;
        getSubCategory(maitKey).then((res) => {
          this.categoryData = res.data.list;   

        });
    },
    menuItemClick(index) {
      this.getSubData(index);
       
    },

  },
};
</script>

<style scoped>
.navbar {
  color: #fff;
  font-weight: bold;
  letter-spacing: 2px;
}
.scroll {
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}
.content {
  display: flex;
}

</style>
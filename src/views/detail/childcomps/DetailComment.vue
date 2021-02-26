<template>
  <div class="comment" v-if="Object.keys(commentInfo).length !== 0">
    <div class="comment-header">
      <span class="header-title">用户评价</span>
      <div class="header-more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>

    <div class="user-info">
      <img :src="commentInfo.user.avatar" alt="" />
      <span>{{ commentInfo.user.uname }}</span>
    </div>

    <div class="content">
      <p>{{ commentInfo.content }}</p>
      <div class="info-other">
        <span class="date">{{ commentInfo.created | showDate }}</span>
        <span>{{ commentInfo.style }}</span>
      </div>
      <div class="comment-img">
        <img v-for="(item, index) in commentInfo.images" :key="index" :src="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils";
export default {
  name: "DetailComment",
  props: {
    commentInfo: {
      type: Object,
      default: {},
    },
  },
  filters: {
    showDate(value) {
      //先将时间戳转成Date
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd");
    },
  },
};
</script>

<style scoped>
.comment {
  padding: 20px 10px;
  border-bottom:5px solid #f2f5f8;
  
}
.comment-header {
  display: flex;
  justify-content: space-between;
  color: #333;
  font-size: 14px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.user-info {
  display: flex;
  align-items: center;
  margin: 10px 0;
  font-size: 14px;
  color: #333;
}
.user-info img{
  width: 36px;
  border-radius: 50%;
  margin-right: 10px;
}
.content {
  font-size: 13px;
  line-height: 1.5;
  padding: 0 8px;
}
.info-other {
  margin: 10px 0;
  font-size: 12px;
  color: #999;
}
.info-other .date {
  margin-right: 8px;
}
.comment-img {
  display: flex;
  
}
.comment-img img {
  width: 50px;
  height: 60px;
  margin-right: 5px;
}

.arrow-right{
  display: inline-block;
  width: 9px;
  height: 9px;
  border-top: 1px solid #999;
  border-right: 1px solid #999;
  transform: rotate(45deg);
  margin-right: 5px;
}
</style>
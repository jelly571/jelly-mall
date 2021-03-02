<template>
  <div class="profile-tools">
    <div class="title">常用工具</div>
    <div class="tools">
      <div class="tools-item">
        <img src="~assets/img/profile/vip.png" alt="" />
        <div>我的会员</div>
      </div>
      <div class="tools-item">
        <img src="~assets/img/profile/custom.png" alt="" />
        <div>官方客服</div>
      </div>
      <div class="tools-item">
        <img src="~assets/img/profile/money.png" alt="" />
        <div>红包卡卷</div>
      </div>
      <div class="tools-item">
        <img src="~assets/img/profile/address.png" alt="" />
        <div>收货地址</div>
      </div>
      <div class="tools-item">
        <img src="~assets/img/profile/mall.png" alt="" />
        <div>店铺关注</div>
      </div>
       <div class="tools-item">
        <img src="~assets/img/profile/collect.png" alt="" />
        <div>商品收藏</div>
      </div>
       <div class="tools-item">
        <img src="~assets/img/profile/history.png" alt="" />
        <div>历史浏览</div>
      </div>
       <div class="tools-item">
        <img src="~assets/img/profile/more.png" alt="" />
        <div>更多</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileTools",
};
</script>

<style scoped>
.title {
  font-size: 16px;
  color:#333;
  border-bottom: 1px solid rgba(100, 100, 100, .1);
  padding: 8px;
}
.tools {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border-bottom: 5px solid rgba(100, 100, 100, .1);
  padding-bottom: 10px;

}
.tools-item {
  padding: 10px;
  font-size: 13px;
  color:#333;
  width: 24%;
  text-align: center;
}
.tools-item img {
  width: 28px;
  margin-bottom: 3px;
}
</style>
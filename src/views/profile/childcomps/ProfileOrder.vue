<template>
  <div class="profile-order">
    <div class='title'>我的订单</div>
    <div class='order'>
      <div class="order-item">
        <img src="~assets/img/profile/wait-pay.png" alt="" />
        <span>待付款</span>
      </div>
      <div class="order-item">
        <img src="~assets/img/profile/wait-send.png" alt="" />
        <span>待发货</span>
      </div>
      <div class="order-item">
        <img src="~assets/img/profile/wait-take.png" alt="" />
        <span>待收货</span>
      </div>
      <div class="order-item">
        <img src="~assets/img/profile/wait-evaluate.png" alt="" />
        <span>待评价</span>
      </div>
      <div class="order-item">
        <img src="~assets/img/profile/service.png" alt="" />
        <span>退款/售后</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileOrder",
};
</script>

<style scoped>
.title {
  font-size: 16px;
  color:#333;
  border-bottom: 1px solid rgba(100, 100, 100, .1);
  padding: 8px;
}
.order {
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  border-bottom: 5px solid rgba(100, 100, 100, .1)
}
.order-item {
  text-align: center;
}
.order-item img {
  width: 28px;
  margin-bottom: 3px;
}
.order-item span {
  display: block;
  font-size: 13px;
  color: #333;
}
</style>
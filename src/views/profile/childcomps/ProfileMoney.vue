<template>
  <div class='profile-money'>
    <div class='info balance'>
      <div><span>0.00</span>元</div>
      <span>我的余额</span>
    </div>

    <div class='info cheap'>
      <div><span>0</span>个</div>
      <span>我的优惠</span>
    </div>

    <div class='info integral'>
      <div><span>0</span>分</div>
      <span>我的积分</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileMoney'
}
</script>

<style scoped>
  .profile-money {
    display: flex;
    border-bottom: 5px solid rgba(100, 100, 100, .1)
  }
  .profile-money .info {
    flex: 1;
    text-align: center;
    padding: 15px 0;
    font-size: 14px;
    color: #333;
  }
  .profile-money .cheap {
    border-right: 1px solid rgba(100, 100, 100, .1);
    border-left: 1px solid rgba(100, 100, 100, .1);
  }
  .info div span {
    color:  rgba(250, 131, 51, 0.842);
    font-weight: bold;
    font-size: 20px;
  }
  .info div {
    margin-bottom: 6px;
  }
</style>
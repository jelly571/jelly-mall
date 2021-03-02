<template>
  <div class='profile-info'>
    <div class='user'>
      <div class='user-img'>
        <img src="~assets/img/profile/avatar.svg" alt="">
      </div>
      <div class='user-info'>
        <span>登录/注册</span>
        <div class='phone'>
          <img src="~assets/img/profile/phone.svg" alt="">
          <span>暂无绑定手机号</span>
        </div>
      </div>
    </div>
    <div class='arrow-right'></div>
  </div>
</template>

<script>
export default {
  name: 'ProfileInfo'
}
</script>

<style scoped>
.profile-info {
  display: flex;
  background-color: var(--color-tint);
  color: #fff;
  font-size: 13px;
  justify-content: space-between;
}
.user {
  display: flex;
  align-items: center;
  padding: 10px 0 15px 15px;
}
.user-img img {
  width: 60px;
  margin-right: 5px;
}
.user-info .phone {
  margin-top: 5px;
}
.user-info .phone img {
  width: 20px;
  vertical-align: middle;
}
.arrow-right {
  border-top: 3px solid #fff;
  border-right: 3px solid #fff;
  width: 12px;
  height: 12px;
  transform: rotate(45deg);
  margin-right: 15px;
  margin-top: 28px;
}
</style>
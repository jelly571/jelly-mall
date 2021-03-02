<template>
  <div id='profile'>
    <profile-nav-bar class='nav-bar'>
      <div slot='center'>我的商城</div>
    </profile-nav-bar>
    <profile-info></profile-info>
    <profile-money></profile-money>
    <profile-order></profile-order>
    <profile-tools></profile-tools>


  </div>
</template>

<script>
import ProfileNavBar from 'components/common/navbar/NavBar'
import ProfileInfo from './childcomps/ProfileInfo'
import ProfileMoney from './childcomps/ProfileMoney'
import ProfileOrder from './childcomps/ProfileOrder'
import ProfileTools from './childcomps/ProfileTools'
export default {
  name: 'Profile',
  components: {
    ProfileNavBar,
    ProfileInfo,
    ProfileMoney,
    ProfileOrder,
    ProfileTools
  }
}
</script>

<style>
  .nav-bar {
    color:#fff;
    font-weight: bold;
    letter-spacing: 2px;
  }
</style>
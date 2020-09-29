<template>
  <div>
    <router-view></router-view>
    <van-tabbar
      v-model="active"
      :route="true"
      active-color="orange"
      :placeholder="true"
    >
      <van-tabbar-item icon="wap-home-o" to="/index">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/classify">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/shopping"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item icon="contact" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template> 

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="less" scoped>
</style>
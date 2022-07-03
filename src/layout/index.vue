<template>

  <router-view />
  <van-tabbar safe-area-inset-bottom placeholder v-model="active">
    <van-tabbar-item to="/home" icon="home-o">标签</van-tabbar-item>
    <van-tabbar-item replace to="/books" icon="hot-o">书架</van-tabbar-item>
    <van-tabbar-item to="/friends" icon="friends-o">联系人</van-tabbar-item>
    <van-tabbar-item icon="setting-o">设置</van-tabbar-item>
  </van-tabbar>

</template>
 

<script setup lang="ts">
import { ref } from 'vue';

const active = ref(0);
</script>
<style lang="less">
</style>

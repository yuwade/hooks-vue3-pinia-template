<template>
  <van-config-provider style="height: 100%;" :theme-vars="themeVars">
    <router-view />
  </van-config-provider>
</template>
<script setup lang="ts">
const themeVars = {
  // "nav-bar-text-color": "#fff",

}
</script>
<style lang="less">
</style>
<style src="./assets/bootstrap-utilities.min.css">
</style>
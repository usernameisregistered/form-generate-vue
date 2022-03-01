<template>
  <div>
    <common-header></common-header>
    <router-view></router-view>
  </div>
</template>
<script>
import CommonHeader from "./components/commonHeader.vue";
export default {
  name: "app",
  components: {
    CommonHeader,
  },
};
</script>
<style lang="less">
</style>

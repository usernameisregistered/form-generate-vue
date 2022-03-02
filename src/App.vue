<template>
  <div>
    <common-header v-if="showHeader"></common-header>
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
  data() {
    return {
      showHeader: true,
    };
  },
  beforeMount() {
    if (this.$route.path === "/previewPage") {
      this.showHeader = false;
    }
  },
  watch: {
    $route(val) {
      if (val.path === "/previewPage") {
        this.showHeader = false;
      } else {
        this.showHeader = true;
      }
    },
  },
};
</script>
<style lang="less">
</style>

<template>
  <div class="layoutContainer">
    <div class="leftContainer">
      <left-widget></left-widget>
    </div>
    <div class="centerContainer">
      <center-view></center-view>
    </div>
    <div class="rightContainer">
      <right-prop></right-prop>
    </div>
  </div>
</template>
<script>
import LeftWidget from "./leftWidget.vue";
import CenterView from "./centerView.vue";
import RightProp from "./rightProp.vue";
export default {
  name: "layoutPage",
  components: {
    LeftWidget,
    CenterView,
    RightProp,
  },
};
</script>
<style lang="scss" scoped>
.layoutContainer {
  display: flex;
  flex-direction: row;
  min-height: calc(100vh - 60px);
  margin-top: 10px;
  .leftContainer {
    flex: 2;
  }
  .centerContainer {
    flex: 10;
    border-right: 1px solid #ddd;
    border-left: 1px solid #ddd;
  }
  .rightContainer {
    flex: 3;
  }
}
</style>
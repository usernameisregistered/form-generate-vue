<template>
  <div class="propContainer">
    <div class="title">属性区</div>
    <render-attr></render-attr>
  </div>
</template>
<script>
import renderAttr from "../../components/renderAttr.vue";
export default {
  components: { renderAttr },
  name: "rightProp",
};
</script>
<style lang="scss" scoped>
.propContainer {
  .title {
    border-bottom: 1px solid #ddd;
    line-height: 30px;
    text-indent: 10px;
    font-weight: bold;
    font-size: 15px;
  }
}
</style>
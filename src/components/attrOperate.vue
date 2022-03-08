<template>
  <div class="attrOperateContainer" v-if="operateAttr"></div>
</template>
<script>
export default {
  name: "AttrOperate",
  props: {
    operateAttr: {
      type: Object,
      default: null,
    },
  },
};
</script>
<style lang="scss" scoped>
.attrOperateContainer {
}
</style>
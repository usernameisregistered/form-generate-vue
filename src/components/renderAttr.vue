<template>
  <div class="AttrContainer" v-if="selectedWidget && selectedWidget.props">
    <div class="item" v-for="item in selectedWidget.props" :key="item.name">
      <div class="label" :title="item.desc">{{ item.name }}</div>
      <div class="value">
        <attr-operate :operateAttr="item"></attr-operate>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import AttrOperate from "./attrOperate.vue";
export default {
  components: { AttrOperate },
  name: "RenderAttr",
  computed: {
    ...mapGetters(["selectedWidget"]),
  },
};
</script>
<style lang="scss" scoped>
.AttrContainer {
  .item {
    display: flex;
    margin: 5px 15px;
    .label {
      flex-basis: 80px;
      text-align: right;
      cursor: help;
    }
    .value {
      flex: 1;
      position: relative;
    }
  }
}
</style>
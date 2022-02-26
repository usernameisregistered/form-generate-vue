<template>
  <div class="widgetContainer">
    <div class="title">控件区</div>
    <div class="classify" v-for="item in widgetsList" :key="item.value">
      <div class="header">{{item.label}}</div>
      <draggable
        tag="div"
        :value="item.widgets[item.value]"
        :options="{
          group: { name: 'form-draggable', pull: 'clone', put: false },
          sort: false,
          animation: 180,
        }"
        class="content draggable-box"
      >
        <div
          class="item"
          v-for="item in widgetsList.from"
          :data-drag-id="'from_' + item.name"
          :key="item.label"
        >
          {{ item.name }}
        </div>
      </draggable>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import { mapGetters } from "vuex";
export default {
  name: "left-widget",
  components: { draggable },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["widgetsList"]),
  },
};
</script>
<style lang="scss" scoped>
.widgetContainer {
  .title {
    border-bottom: 1px solid #ddd;
    line-height: 30px;
    text-indent: 10px;
    font-weight: bold;
    font-size: 15px;
  }
  .classify {
    .header {
      padding: 8px 12px;
      font-size: 14px;
      border-bottom: 1px solid #dddddd4d;
      font-weight: 600;
    }
    .content {
      display: flex;
      flex-wrap: wrap;
      .item {
        font-size: 12px;
        width: 46%;
        line-height: 35px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 1%;
        color: #333;
        border: 1px solid #f4f6fc;
        text-align: center;
        background: #f4f6fc;
        &:hover {
          cursor: move;
          color: #409eff;
          border: 1px dashed #409eff;
        }
      }
    }
  }
}
</style>
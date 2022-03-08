<template>
  <div class="viewontainer">
    <div class="title">视图区</div>
    <draggable
      tag="div"
      :options="{
        group: 'form-draggable',
        animation: 180,
        handle: '.drag-move',
      }"
      v-model="list"
      @add="deepClone"
    >
      <div class="drag-move">
        <div v-for="item in list" :key="item.key">
          <render-components
            :tagName="item.tagName"
            :attrs="item"
          ></render-components>
        </div>
      </div>
    </draggable>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import { mapGetters, mapMutations } from "vuex";
import RenderComponents from "../../components/renderComponents.vue";
export default {
  name: "CenterView",
  components: { draggable, RenderComponents },
  data() {
    return {
      list: [],
      selectWidget: null,
    };
  },
  mounted() {},
  methods: {
    ...mapMutations(["changeWidget"]),
    deepClone(e) {
      this.changeWidget(this.list.slice(-1)[0]);
    },
    createVueComponent(componentName) {
      const componentCtr = this.$root.$options.components[componentName];
      const tempComponent = new componentCtr({
        propsData: {
          type: "primary",
        },
      });
      tempComponent.$slots.default =
        "默认按钮" + Math.random().toString().slice(2, 4);
      tempComponent.$mount();
      return tempComponent.$el.outerHTML;
    },
  },
  computed: {
    ...mapGetters(["widgetsList"]),
  },
};
</script>
<style lang="scss" scoped>
.viewontainer {
  .title {
    border-bottom: 1px solid #ddd;
    line-height: 30px;
    text-indent: 10px;
    font-weight: bold;
    font-size: 15px;
  }
  .drag-move {
    min-height: calc(100vh - 100px);
  }
}
</style>
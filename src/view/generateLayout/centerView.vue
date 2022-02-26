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
        <div v-for="item,index in list" :key="index" >{{item}}</div>
      </div>
    </draggable>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import { mapGetters } from "vuex";
export default {
  name: "left-widget",
  components: { draggable },
  data() {
    return {
      list: [],
    };
  },
  mounted() {
  },
  methods: {
    deepClone(e) {
      const dragId = e.item.dataset.dragId.split("_");
      const dragItem = this.widgetsList[dragId[0]].filter(
        (el) => el.name === dragId.slice(1).join("_")
      )[0];
      this.list.push(dragItem.componentName.toString())
      this.list = this.list.filter(el => typeof el === 'string')
      console.log(this.list)
    },
    createVueComponent(componentName) {
      const componentCtr =
        this.$root.$options.components[componentName];
      const tempComponent = new componentCtr({
        propsData: {
          type: "primary",
        },
      });
      tempComponent.$slots.default =
        "默认按钮" + Math.random().toString().slice(2, 4);
      tempComponent.$mount()
      return tempComponent.$el.outerHTML
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
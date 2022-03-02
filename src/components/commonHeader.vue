<template>
  <div class="headerContainer">
    <span class="title">Form Generate</span>
    <div class="btnGroup">
      <span class="fg-link" @click="addUI">导入主题</span>
      <span class="fg-link" @click="generate">生成</span>
      <span class="fg-link fg-link-warning" @click="clearWidgets">清空组件</span>
      <span class="fg-link" @click="preview">预览</span>
    </div>
    <generate-page
      v-if="generateStatus"
      @close="generateStatus = false"
    ></generate-page>
    <add-u-i v-if="addUIStatus" @close="addUIStatus = false"></add-u-i>
  </div>
</template>
<script>
import CommonDialog from "./commonDialog.vue";
import GeneratePage from "../view/generatePage/index.vue";
import AddUI from "../view/addUI/index.vue";
export default {
  name: "common-header",
  components: { CommonDialog, GeneratePage, AddUI },
  data() {
    return {
      visible: true,
      generateStatus: false,
      addUIStatus: false,
    };
  },
  methods: {
    preview() {
      this.$router.push({ path: "/previewPage" });
    },
    generate() {
      this.generateStatus = true;
    },
    clearWidgets() {},
    addUI() {
      this.addUIStatus = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.headerContainer {
  height: 50px;
  -webkit-box-shadow: 0 2px 10px rgb(70 160 252 / 60%);
  box-shadow: 0 2px 10px rgb(70 160 252 / 60%);
  padding: 0 10px;
  background-image: linear-gradient(90deg, #1278f6, #00b4aa);
  position: relative;
  clear: both;
  .title {
    display: inline-block;
    line-height: 50px;
    vertical-align: middle;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    opacity: 0.8;
    margin-left: 6px;
    cursor: pointer;
  }
  .btnGroup {
    float: right;
  }
}
</style>
<template>
  <div class="headerContainer">
    <span class="title">Form Generate</span>
    <div class="btnGroup">
      <span class="btn primary" @click="addUI">导入主题</span>
      <span class="btn primary" @click="preview">预览</span>
      <span class="btn primary" @click="generate">生成</span>
      <span class="btn primary" @click="view">查看</span>
      <span class="btn warn" @click="clearWidgets">清空组件</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "common-header",
  methods: {
    preview() {
       this.$router.push({path: "/previewPage"})
    },
    generate() {
      this.$router.push({path: "/generatePage"})
    },
    clearWidgets() {},
    addUI() {},
    view() {},
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
    .btn {
      display: inline-block;
      line-height: 25px;
      white-space: nowrap;
      cursor: pointer;
      text-align: center;
      box-sizing: border-box;
      outline: 0;
      margin: 0;
      font-weight: 500;
      padding: 12px 10px;
      font-size: 14px;
      &.primary {
        color: #fff;
      }
      &.warn {
        color: #f56c6c;
      }
    }
  }
}
</style>
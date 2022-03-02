<template>
  <div class="common-dialog" v-show="visible">
    <div class="common-dialog-bg"></div>
    <div
      class="common-dialog-container animate-scale"
      :class="`common-dialog-${size}`"
    >
      <div class="common-dialog-title">
        <span> {{ title }}</span>
      </div>
      <div class="common-dialog-content" v-if="rendered"><slot></slot></div>
      <div class="common-dialog-footer" v-if="$slots.footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "rule_alert",
  props: {
    visible: {
      typeof: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: "提示",
    },
    size: {
      type: String,
      default: "small",
    },
    appendToBody: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      content: "",
      btn: "确定",
      rendered: false,
    };
  },
  methods: {
    close() {
      this.visible = false;
    },
  },
  mounted() {
    if (this.visible) {
      this.rendered = true;
      if (this.appendToBody) {
        document.body.appendChild(this.$el);
      }
    }
  },
  destroyed() {
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  },
  watch: {
    visible(val) {
      if (val) {
        if (this.appendToBody) {
          document.body.appendChild(this.$el);
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.common-dialog-container {
  top: 30%;
  left: 50%;
  opacity: 1;
  position: fixed;

  font-size: 14px;
  font-family: "Microsoft Yahei";
  background: #ffffff;
  border-radius: 8px;
  z-index: 999999999;
  box-sizing: content-box;
  &.common-dialog-tiny {
    width: 30%;
    margin-left: -15%;
  }
  &.common-dialog-small {
    width: 40%;
    margin-left: -20%;
  }
  &.common-dialog-medium {
    width: 50%;
    margin-left: -25%;
  }
  &.common-dialog-layer {
    width: 80%;
    margin-left: -40%;
  }
}

.common-dialog-bg {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  display: block;
  position: fixed;
  z-index: 999999998;
  background-color: #000000;
}

.common-dialog-title {
  line-height: 24px;
  font-size: 18px;
  color: #303133;
  padding: 15px;
  border-bottom: 1px solid #e8e8e8;
  border-radius: 4px 4px 0 0;
}

.common-dialog-content {
  padding: 15px;
}

.common-dialog-footer {
  padding: 15px;
  border-top: 1px solid #e8e8e8;
  border-radius: 0 0 4px 4px;
  text-align: right;
}

.animate-scale {
  animation-name: scale;
  animation-duration: 0.375s;
}

@keyframes scale {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
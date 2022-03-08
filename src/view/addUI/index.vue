<template>
  <div class="addUIContainer">
    <common-dialog size="medium" title="导入UI" :visible="true">
      <div class="fg-form">
        <div class="fg-form-item">
          <label class="fg-form-item__label">主题名称</label>
          <div class="fg-form-item__content">
            <input type="text" class="fg-input" v-model="form.name" />
          </div>
        </div>
        <div class="fg-form-item">
          <label class="fg-form-item__label">主题地址</label>
          <div class="fg-form-item__content">
            <input type="text" class="fg-input" v-model="form.url" />
          </div>
        </div>
        <div class="fg-form-item">
          <label class="fg-form-item__label">选择文件</label>
          <div class="fg-form-item__content">
            <vue-file-upload class="fg-upload">
              <span slot="label" class="fg-upload-label">上传文件</span>
            </vue-file-upload>
          </div>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <span class="fg-btn fg-btn-primary" @click="submit">确定</span>
        <span class="fg-btn fg-btn-danger" @click="cancel">取消</span>
      </div>
    </common-dialog>
  </div>
</template>
<script>
import commonDialog from "../../components/commonDialog.vue";
import VueFileUpload from "vue-file-upload";
export default {
  components: { commonDialog, VueFileUpload },
  name: "AddUi",
  data() {
    return {
      form: {
        name: "",
        url: ""
      },
    };
  },
  methods: {
    submit() {
      this.$emit("close");
    },
    cancel() {
      this.$emit("close");
    },
  },
};
</script>
<style lang="scss" scoped>
.addUIContainer {
  .dialog-footer {
    span {
      margin-right: 10px;
    }
  }
}
</style>
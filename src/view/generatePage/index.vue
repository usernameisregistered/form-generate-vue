<template>
  <div class="generatePageContainer">
    <common-dialog size="medium" title="生成文件" :visible="true">
      <div class="fg-form">
        <div class="fg-form-item">
          <label class="fg-form-item__label">是否单路由</label>
          <div class="fg-form-item__content">
            <span class="fg-radio-item">
              <label for="yes">是 </label>
              <input type="radio" name="single" value="yes" />
            </span>
            <span class="fg-radio-item">
              <label for="no">否 </label>
              <input type="radio" name="single" value="no" />
            </span>
          </div>
        </div>
        <div class="fg-form-item">
          <label class="fg-form-item__label">父页名称</label>
          <div class="fg-form-item__content">
            <input type="text" class="fg-input" v-model="form.name" />
          </div>
        </div>
        <div class="fg-form-item">
          <label class="fg-form-item__label">当前页名称</label>
          <div class="fg-form-item__content">
            <input type="text" class="fg-input" v-model="form.name" />
          </div>
        </div>
        <div class="fg-form-item">
          <label class="fg-form-item__label">路由</label>
          <div class="fg-form-item__content">
            <input type="text" class="fg-input" v-model="form.id" />
          </div>
        </div>
        <div class="fg-form-item">
          <label class="fg-form-item__label">页面code</label>
          <div class="fg-form-item__content">
            <input type="text" class="fg-input" v-model="form.id" />
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
export default {
  components: { commonDialog },
  name: "GeneratePage",
  data() {
    return {
      form: {
        name: "",
        id: "",
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
.generatePageContainer {
  .dialog-footer {
    span {
      margin-right: 10px;
    }
  }
}
</style>
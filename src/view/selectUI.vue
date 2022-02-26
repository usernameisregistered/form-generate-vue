<template>
  <div class="configContainer">
    <common-header></common-header>
    <div class="content">
      <div class="item">
        <div class="label">选择UI主题</div>
        <div class="detail">
          <select name="UITheme" @change="changeUI">
            <option
              v-for="item in UIList"
              :key="item"
              :value="item"
              :selected="item === UITheme"
            >
              {{ item }}
            </option>
          </select>
        </div>
      </div>
      <div class="item">
        <div class="label">选择CSS预编译</div>
        <div class="detail">
          <select name="UITheme" @change="changeCSSLang">
            <option
              v-for="item in cssModuleList"
              :key="item"
              :value="item"
              :selected="item === cssModule"
            >
              {{ item }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="footer">
        <span class="btn" @click="jumpto">确定</span>
    </div>
  </div>
</template>
<script>
import CommonHeader from "../components/commonHeader.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "config",
  components: {
    CommonHeader,
  },
  computed: {
    ...mapGetters(["cssModule", "UITheme"]),
  },
  data() {
    return {
      UIList: ["antAesign"],
      cssModuleList: ["less", "scss", "stylus"],
    };
  },
  methods: {
    ...mapMutations(["changeTheme", "changeCSSModule"]),
    changeCSSLang(e) {
      this.changeCSSModule(e.target.value);
    },
    changeUI(e) {
      this.changeTheme(e.target.value);
    },
    jumpto(){
    }
  },
};
</script>
<style lang="scss" scoped>
.configContainer {
  .content {
    width: 800px;
    margin: 10px auto;
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 400px;
      margin: 0 auto 5px;
      display: flex;
      .label {
        flex-basis: 100px;
      }
      .detail {
        flex: 1;
        select {
          width: 200px;
        }
      }
    }
  }
  .footer {
    width: 800px;
    margin: 10px auto;
    text-align: center;
    .btn{
        display: inline-block;
        width: 60px;
        text-align: center;
        line-height: 25px;
        font-size: 14px;
        border: 1px solid #ddd;
        cursor: pointer;
    }
  }
}
</style>
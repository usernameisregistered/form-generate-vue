import Vue from "vue"
import router from "./router/index"
import store from "./vuex/index"
import App from "./App.vue"
import './assets/style/reset.css'

import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
Vue.use(Antd);

Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
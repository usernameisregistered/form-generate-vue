import Vue from 'vue'
import Vuex from 'vuex'
import state from "./common/state.js"
import mutations from "./common/mutations.js"
import getters from "./common/getter.js"
Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    strict: process.env.NODE_ENV === 'development'
})

export default store;
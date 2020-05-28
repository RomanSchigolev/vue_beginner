import Vue from "vue";
import App from "./App.vue";

import "vue-select/src/scss/vue-select.scss";

import store from "./store";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app');
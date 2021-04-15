import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAgile from "vue-agile";

Vue.use(VueAgile);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
}).$mount("#app");

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueSignature from "vue-signature-pad";
import App from "./App";

Vue.use(VueSignature);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");

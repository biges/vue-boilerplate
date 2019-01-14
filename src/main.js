import Vue from "vue";
import Axios from "axios";
import VueTheMask from "vue-the-mask";
import VueWait from "vue-wait";
import Buefy from "buefy";
import App from "./App";
import store from "@/store";
import router from "@/router";
import i18n from "@/i18n";
import validator from "@/validator";
import "buefy/dist/buefy.css";

import "./registerServiceWorker";

// To reach axios as this.$http in every component
Vue.prototype.$http = Axios;
Vue.config.productionTip = false;
Vue.use(VueTheMask);
Vue.use(VueWait);
Vue.use(Buefy);

new Vue({
  router,
  store,
  i18n,
  validator,
  wait: new VueWait({
    // Defaults values are following:
    useVuex: true, // Uses Vuex to manage wait state
    vuexModuleName: "wait", // Vuex module name

    registerComponent: true, // Registers `v-wait` component
    componentName: "v-wait", // <v-wait> component name, you can set `my-loader` etc.

    registerDirective: true, // Registers `v-wait` directive
    directiveName: "wait" // <span v-wait /> directive name, you can set `my-loader` etc.
  }),
  render: h => h(App)
}).$mount("#app");

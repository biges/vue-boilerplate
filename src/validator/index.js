import Vue from "vue";
import VeeValidate, { Validator } from "vee-validate";
import tr from "vee-validate/dist/locale/tr";

Validator.localize("tr", tr);
Vue.use(VeeValidate, {
  events: "input"
});

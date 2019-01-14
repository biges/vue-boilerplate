import Vue from "vue";
import Vuex from "vuex";

import i18n from "@/i18n/store";
import auth from "@/auth";
import Home from "@/views/Home";
import About from "@/views/About";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    i18n,
    auth,
    Home,
    About
  },
  strict: process.env.NODE_ENV !== "production"
});

export default store;

import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home/route";
import About from "@/views/About/route";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [Home, About]
});

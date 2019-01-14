<i18n>
{
  "en": {
    "home": "Home",
    "about": "About"
  },
  "tr": {
    "home": "Ana Sayfa",
    "about": "Hakkımızda"
  }
}
</i18n>

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">{{ $t("home") }}</router-link> |
      <router-link to="/about">{{ $t("about") }}</router-link>
    </div>
    <router-view />
    <div id="footer">
      <select v-model="siteLang">
        <option v-for="(lang, index) in langSupport" :val="lang" :key="index">{{
          lang
        }}</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "app",
  data() {
    return {
      siteLang: ""
    };
  },
  watch: {
    siteLang() {
      const payload = {
        lang: this.siteLang,
        app: this
      };
      this.$store.commit("i18n/LANG_CHANGE", payload, { root: true });
    }
  },
  computed: {
    ...mapGetters("i18n", ["langDefault", "langSupport"])
  },
  mounted() {
    this.siteLang = this.langDefault;
    const payload = {
      lang: this.langDefault,
      app: this
    };
    this.$store.commit("i18n/LANG_CHANGE", payload, { root: true });
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#footer {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;
}
</style>

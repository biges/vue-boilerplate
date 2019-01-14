<i18n src="./i18n/index.json"></i18n>

<template>
  <div class="about">{{ $t("title") }}</div>
</template>

<script>
export default {
  name: "about",
  data() {
    return { locale: "tr" };
  },
  watch: {
    locale(val) {
      this.$i18n.locale = val;
    }
  }
};
</script>

<style lang="scss">
.about {
  padding: 50px;
}
</style>

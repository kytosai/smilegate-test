<template>
  <div id="app">
    <main-navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MainNavbar from "./components/MainNavbar.vue";

export default Vue.extend({
  components: {
    MainNavbar,
  },
});
</script>

<style lang="scss">
@use "@/assets/styles/nomalize.scss";
@use "@/assets/styles/global.scss";
</style>

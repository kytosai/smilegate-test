<template>
  <nav class="main-navbar">
    <div class="container">
      <div class="navbar-inner">
        <router-link class="logo-field" to="/"
          ><img alt="logo" src="@/assets/images/logo.png"
        /></router-link>

        <div class="menu-bar-desk">
          <template v-for="menuItem in MENU_LIST">
            <router-link :key="menuItem.id" class="menu-item" :to="menuItem.url">{{
              menuItem.title
            }}</router-link>
          </template>
        </div>

        <div class="menu-bar-mobi"></div>
      </div>
    </div>

    <div class="collapse-menu"></div>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import { MENU_LIST } from "@/constants/menu";

export default Vue.extend({
  name: "MainNavbar",
  data() {
    return {
      MENU_LIST,
    };
  },
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/vars" as vars;

.main-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  box-shadow: 0 0 12px rgba(#000, 0.1);
  background: #fff;
}

.navbar-inner {
  display: flex;
  align-items: center;
  height: 50px;
}

.logo-field {
  display: inline-flex;
  align-items: center;
}

.menu-bar-desk {
  display: none;
  margin-left: auto;

  @media screen and (min-width: vars.$breakpoint-lg-min) {
    display: flex;
    align-items: center;
  }

  .menu-item {
    display: inline-flex;
    border: 1px solid vars.$orange-500;
    padding: 8px 16px;
    border-radius: 4px;
    margin-left: 12px;
    color: vars.$orange-500;

    &:hover {
      border-color: lighten(vars.$orange-500, 10%);
      color: lighten(vars.$orange-500, 10%);
    }
  } // .menu-item
} // .menu-bar-desk
</style>

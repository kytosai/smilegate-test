<template>
  <div class="page home-page">
    <div class="container">
      <h1 class="page-title">Home</h1>

      <div class="product-list">
        <template v-for="productItem in PRODUCT_LIST">
          <div :key="productItem.id" class="product-item">
            <product-card
              :id="productItem.id"
              :name="productItem.name"
              :imageUrl="productItem.imageUrl"
            />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ProductCard from "@/components/ProductCard.vue";
import { PRODUCT_LIST } from "@/constants/products";
import Vue from "vue";

export default Vue.extend({
  name: "HomeView",
  components: {
    ProductCard,
  },
  data() {
    return {
      PRODUCT_LIST,
    };
  },
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/vars" as vars;

.product-list {
  display: grid;
  gap: 24px;

  @media screen and (min-width: vars.$breakpoint-sm-min) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media screen and (min-width: vars.$breakpoint-md-min) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media screen and (min-width: vars.$breakpoint-lg-min) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}
</style>

<template>
  <router-link class="product-card" to="/">
    <div class="image-field">
      <div class="field-inner">
        <img class="product-img" :src="imageUrl" :alt="name" />
      </div>
    </div>

    <div class="name-field">
      {{ name }}
    </div>
  </router-link>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ProductCard",
  props: {
    id: Number,
    name: String,
    imageUrl: String,
  },
});
</script>

<style lang="scss" scoped>
.product-card {
  display: block;
  box-shadow: 0 0 8px rgba(#000, 0.1);
  background: #fff;
}

.image-field {
  align-items: center;
  display: block;
  justify-content: center;
  position: relative;
  width: 100%;

  &::before {
    content: "";
    display: block;
    padding-bottom: 66.66%;
  }

  .field-inner {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .product-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.name-field {
  padding: 8px 12px;
  font-weight: 500;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>

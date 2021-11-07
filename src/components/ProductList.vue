<template>
  <div class="d-flex flex-wrap">
    <product-cart
      v-for="product in products"
      :key="product.id"
      :product="product"
    ></product-cart>
  </div>
</template>

<script>
import ProductCart from "./ProductCart.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: { ProductCart },
  methods: {
    ...mapActions('product',["getProducts"]),
  },
  mounted(){
    this.getProducts();
  },
  computed: {
    ...mapState({
      products: (state) => state.product.products,
    }),
  },
};
</script>

<style>
</style>
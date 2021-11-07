<template>
  <div>
    <div class="row mt-5" v-if="product">
      <div class="col-md-4">
        <img :src="product.image" alt="image" class="w-100" />
      </div>
      <div class="col-md-8">
        <h2>{{ product.title }}</h2>
        <h4>${{ product.price }}</h4>
        <input type="number" v-model.number="quantity" class="p-1 mr-2 col-1" />
        <button class="btn btn-dark" @click="addProductToCart()">Add To Cart</button>
        <p class="mt-5">{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {
    ...mapState({
      product: (state) => state.product.product,
    }),
  },
  mounted() {
    this.getProduct(this.id);
  },
  methods: {
    ...mapActions('product',["getProduct"]),
     ...mapActions('cart',["addToCart"]),
    addProductToCart() {
      this.addToCart({
        product: this.product,
        quantity: this.quantity,
      });
    },
  },
};
</script>

<style>
</style>
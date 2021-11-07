<template>
  <div>
    <div class="col-md-3 mt-3">
      <div class="card" style="width: 14rem">
        <img :src="product.image" class="card-img-top" alt="image" />
        <div class="card-body">
          <h5 class="card-title">
            <router-link :to="{ name: 'product', params: { id: product.id } }"
              >{{ product.title }}
            </router-link>
          </h5>
          <p class="card-text">
            {{ product.category }}
          </p>
          <button @click="addProductToCart()" class="btn btn-dark">Add To Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["product"],
  methods: {
    ...mapActions('cart',["addToCart","addNotification"]),
    addProductToCart() {
      this.addToCart({
        product: this.product,
        quantity: 1,
      });
    },
  },
  
};
</script>

<style>
</style>
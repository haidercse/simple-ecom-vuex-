<template>
  <div>
    <div
      class="dropdown-menu"
      aria-labelledby="navbarDropdown"
      style="min-width: 320px; right: 0; left: auto"
    >
      <div class="p-2">
        <div v-for="item in cart" :key="item.product.id">
          <div class="d-flex justify-content-between">
            <div>
              <strong>{{ item.product.title }}</strong>
              <br />
              {{ item.quantity }} X ${{ item.product.price }}
            </div>
            <div>
              <a href="#" class="badge badge-dark" @click.prevent="removeCart(item.product)">Remove</a>
            </div>
            
          </div>
          <hr />
        </div>
        <div class="d-flex justify-content-between">
          <div><strong>Total Price</strong> : ${{ totalPrice }} </div>
          <div v-if="cartLength > 0">
            <a href="#" class="badge badge-dark" @click.prevent="clearCart()">Clear</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  methods: {
    ...mapActions('cart',['remove','clearCart']),
    removeCart(product){
      this.remove(product);
    }
  },
  computed: {
    ...mapState({
      cart: (state) => state.cart.cart,
    }),
    ...mapGetters('cart',['totalPrice','cartLength'])
  },
 
};
</script>

<style>
</style>
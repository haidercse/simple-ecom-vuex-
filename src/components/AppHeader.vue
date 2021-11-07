<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <router-link  class="nav-item nav-link active" to="/">Home</router-link>
            <router-link class="nav-item nav-link " to="/category">Category</router-link>
            <li class="nav-item">
              <a class="nav-link" href="#">Product</a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {{ cartLength }} Cart
              </a>
              <div @click="$event.stopPropagation()">
                <app-mini-cart></app-mini-cart>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppMiniCart from './AppMiniCart.vue';

export default {
  components: { AppMiniCart },
  computed: {
    ...mapGetters('cart',['cartLength'])
  }
};
</script>

<style>
</style>
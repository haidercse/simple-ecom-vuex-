import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

// modules start 
import product from "./modules/product";
import cart from "./modules/cart";
import notification from "./modules/notification";
import category from "./modules/category";


export default new Vuex.Store({
    modules: {
        product,
        cart,
        notification,
        category
    }
})
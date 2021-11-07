import home from "./pages/Home.vue";
import product from "./pages/Product.vue";
// import category from "./pages/categoryShow.vue"

export default [{
        path: '/',
        component: home,
        name: 'home'
    },

    {
        path: '/product/:id',
        component: product,
        props: true,
        name: 'product'
    },

]
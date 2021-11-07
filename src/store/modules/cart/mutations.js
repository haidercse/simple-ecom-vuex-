export const ADD_TO_CART = (state, { product, quantity }) => {
    let productIn = state.cart.find((item) => {
        return item.product.id === product.id;
    })
    if (productIn) {
        return productIn.quantity += quantity;
    }
    state.cart.push({
        product,
        quantity
    })
}

export const REMOVE_CART = (state, product) => {
    state.cart = state.cart.filter((item) => {
        return item.product.id != product.id;
    })
}

export const CLEAR = (state) => {
    state.cart = [];
}
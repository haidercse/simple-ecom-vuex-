export const cartLength = (state) => {
    return state.cart.length;
};

export const totalPrice = (state) => {
    let total = 0;
    state.cart.forEach(element => {
        total += element.product.price;
    });

    return total.toFixed(2);
};
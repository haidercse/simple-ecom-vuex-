export const addToCart = ({ commit, dispatch }, { product, quantity }) => {
    commit("ADD_TO_CART", { product, quantity });
    dispatch('addNotification', {
        type: 'success',
        message: 'Cart has been added'
    }, { root: true })
};

export const remove = ({ commit, dispatch }, product) => {
    commit("REMOVE_CART", product);
    dispatch('addNotification', {
        type: 'success',
        message: 'Cart has been removed!'
    }, { root: true })
};

export const clearCart = ({ commit, dispatch }) => {
    commit("CLEAR");
    dispatch('addNotification', {
        type: 'success',
        message: 'Cart fully cleared!'
    }, { root: true });
};
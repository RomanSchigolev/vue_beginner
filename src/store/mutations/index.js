export default {
  SET_PRODUCTS: (state, products) => state.products = products,
  SET_CART: (state, product) => {
    let isProductExist = false;
    if (state.cart.length) {
      state.cart.map(item => {
        if (item.article === product.article) {
          isProductExist = true;
          item.quantity++;
        }
      });
      if (!isProductExist) {
        state.cart.push(product);
      }
    } else {
      state.cart.push(product);
    }
  },
  DELETE_ITEM: (state, index) => state.cart.splice(index, 1),
  DECREMENT: (state, index) => --state.cart[index].quantity < 1 && state.cart.splice(index, 1),
  INCREMENT: (state, index) => state.cart[index].quantity++
}
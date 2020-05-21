export default {
  ADD_TO_CART({commit}, product) {
    commit("SET_CART", product);
  },
  DELETE_FROM_CART({commit}, index) {
    commit("DELETE_ITEM", index);
  },
  DECREMENT_QUANTITY({commit}, index) {
    commit("DECREMENT", index);
  },
  INCREMENT_QUANTITY({commit}, index) {
    commit("INCREMENT", index);
  }
}
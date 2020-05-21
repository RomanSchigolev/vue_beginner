import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { // состояния(хранятся все данные)
    products: [],
    cart: []
  },
  mutations: { // можно менять состояния в state. mutations - синхронны
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


  },
  actions: { // actions - ассинхронны
    GET_PRODUCTS({commit}) {
      return axios("http://localhost:3000/products", {
        method: "GET"
      }).then((products) => {
        commit("SET_PRODUCTS", products.data);
        return products;
      }).catch((err) => {
        console.log(err);
        return err;
      })
    },
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
  },
  getters: { // для получения данных из state
    PRODUCTS(state) {
      return state.products;
    },
    CART_LIST(state) {
      return state.cart;
    }
  }
})
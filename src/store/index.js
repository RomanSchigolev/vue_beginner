import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { // состояния(хранятся все данные)
    products: []
  },
  mutations: { // можно менять состояния в state. mutations - синхронны
    SET_PRODUCTS: (state, products) => {
      state.products = products;
    }
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
    }
  },
  getters: { // для получения данных из state
    PRODUCTS(state) {
      return state.products;
    }
  }
})
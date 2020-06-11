import Vue from "vue";
import Vuex from "vuex";

import commonActions from "./actions";
import apiRequests from "./actions/api_requests";
import getters from "./getters";
import mutations from "./mutations";

const actions = { ...commonActions, ...apiRequests };

Vue.use(Vuex);

export default new Vuex.Store({
  state: { // состояния(хранятся все данные)
    products: [],
    cart: [],
    images: []
  },
  mutations, // можно менять состояния в state. mutations - синхронны
  actions, // actions - ассинхронны
  getters // для получения данных из state
})
import axios from "axios";

export default {
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
}
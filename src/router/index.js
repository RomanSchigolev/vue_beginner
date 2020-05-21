import Vue from "vue";
import Router from "vue-router";

import Catalog from "../components/List/List";
import Cart from "../components/Cart/Cart";

Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "catalog",
      component: Catalog
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
      props: true
    }
  ]
});
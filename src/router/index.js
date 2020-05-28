import Vue from "vue"
import Router from "vue-router"

import Home from "@/views/Home/v-home-page"
import Shop from "@/views/Shop/v-shop-page"
import Test from "@/views/Testing/v-test-page"

import Cart from "@/components/Cart/v-cart"

Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/shop",
      name: "shop",
      component: Shop
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
      props: true
    },
    {
      path: "/testing",
      name: "testing",
      component: Test
    }
  ]
});
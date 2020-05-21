<template>
  <div class="cart">
    <router-link :to="{name: 'catalog'}">
      <button type="button" class="cart__toProductList">&times;</button>
    </router-link>
    <h2>Cart</h2>
    <div class="cart__warning" v-if="!cart_data_list.length">
      <span>Your products are not in the cart</span>
    </div>
    <ul class="cart__list">
      <card-item
        v-for="(cart_item, index) in cart_data_list"
        :key="cart_item.article"
        :cart_data_item="cart_item"
        @deleteItem="deleteFromCart(index)"
      />
    </ul>
  </div>
</template>

<script>
  import CardItem from "./CartItem";

  import {mapActions} from "vuex";

  export default {
    name: "Cart",
    components: {
      CardItem
    },
    props: {
      cart_data_list: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    methods: {
      ...mapActions([
        "DELETE_FROM_CART"
      ]),
      deleteFromCart(index) {
        this.DELETE_FROM_CART(index);
      }
    }
  }
</script>

<style lang="scss">
  .cart {

    &__list {
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
    }

    &__toProductList {
      position: fixed;
      top: 10px;
      right: 10px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 1px solid #eaeaea;
      background-color: transparent;
      cursor: pointer;
      font-family: Avenir, Helvetica, Arial, sans-serif;
      font-size: 20px;
    }

    &__warning {
      text-align: center;

      & span {
        font-size: 25px;
        font-weight: bold;
      }
    }
  }
</style>
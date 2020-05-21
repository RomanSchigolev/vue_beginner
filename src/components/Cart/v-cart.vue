<template>
  <div class="cart">
    <router-link :to="{name: 'catalog'}">
      <button
        type="button"
        class="cart__toProductList"
      >&times;
      </button>
    </router-link>
    <h2>Cart</h2>
    <div
      class="cart__warning"
      v-if="!cart_data_list.length">
      <span>Your products are not in the cart</span>
    </div>
    <ul class="cart__list">
      <v-cart-item
        v-for="(cart_item, index) in cart_data_list"
        :key="cart_item.article"
        :cart_data_item="cart_item"
        @deleteItem="deleteFromCart(index)"
        @decrement="decrementQuantity(index)"
        @increment="incrementQuantity(index)"
      />
    </ul>
    <div class="cart__total">
      <span class="total__title">Total: </span>
      <span>{{cartTotal}} руб.</span>
    </div>
  </div>
</template>

<script>
  import vCartItem from "./v-cart-item";

  import {mapActions} from "vuex";

  export default {
    name: "v-cart",
    components: {
      vCartItem
    },
    props: {
      cart_data_list: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    computed: {
      cartTotal() {
        return this.cart_data_list.reduce((res, item) => res + item.price * item.quantity, 0);
      }
    },
    methods: {
      ...mapActions([
        "DELETE_FROM_CART",
        "DECREMENT_QUANTITY",
        "INCREMENT_QUANTITY"
      ]),
      deleteFromCart(index) {
        this.DELETE_FROM_CART(index);
      },
      decrementQuantity(index) {
        return this.DECREMENT_QUANTITY(index);
      },
      incrementQuantity(index) {
        return this.INCREMENT_QUANTITY(index);
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
      border: 1px solid $forBackgroundAndBorder;
      background-color: transparent;
      cursor: pointer;
      font-family: $mainFont;
      font-size: 20px;
    }

    &__warning {
      text-align: center;

      & span {
        font-size: 25px;
        font-weight: bold;
      }
    }

    &__total {
      position: fixed;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #26ae68;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 30px;
    }

    .total__title {
      text-transform: uppercase;
      font-weight: bold;
      margin-right: 10px;
    }
  }
</style>
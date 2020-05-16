<template>
  <div class="cart">
    <h2>Cart</h2>
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
  }
</style>
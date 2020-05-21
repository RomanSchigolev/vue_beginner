<template>
  <div class="list">
    <router-link :to="{name: 'cart', params: {cart_data_list: CART_LIST}}">
      <button
        type="button"
        class="list__toCart"
      >Cart: {{CART_LIST.length}}
      </button>
    </router-link>
    <h2>Product List</h2>
    <ul class="list__shop">
      <v-list-item
        v-for="product in PRODUCTS"
        :key="product.article"
        v-bind:product_data="product"
        @addToCart="itemInToCart"
      />
    </ul>
  </div>
</template>

<script>
  import vListItem from "./v-list-item";
  import {mapActions, mapGetters} from "vuex";

  export default {
    name: "v-list",
    components: {
      vListItem
    },
    data() {
      return {}
    },
    computed: {
      ...mapGetters([
        "PRODUCTS",
        "CART_LIST"
      ])
    },
    methods: {
      ...mapActions([
        "GET_PRODUCTS",
        "ADD_TO_CART"
      ]),
      itemInToCart(item) {
        this.ADD_TO_CART(item);
      }
    },
    mounted() {
      this.GET_PRODUCTS()
    }
  }
</script>

<style lang="scss">
  .list {
    &__shop {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }

    &__toCart {
      position: fixed;
      top: 0;
      right: 0;
      padding: 15px;
      border: 1px solid $forBackgroundAndBorder;
      background-color: transparent;
      cursor: pointer;
      font-family: $mainFont;
      font-size: 16px;
    }
  }
</style>
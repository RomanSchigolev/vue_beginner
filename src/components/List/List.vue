<template>
  <div class="list">
    <h2>Product List</h2>
    <ul class="list__shop">
      <ListItem
        v-for="product in PRODUCTS"
        :key="product.article"
        v-bind:product_data="product"
        @addToCart="itemInToCart"
      />
    </ul>
  </div>
</template>

<script>
  import ListItem from "../ListItem/ListItem";
  import {mapActions, mapGetters} from "vuex";

  export default {
    name: "list",
    components: {
      ListItem
    },
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters([
        "PRODUCTS"
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
  .list__shop {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
</style>
<template>
  <ul class="list">
    <ListItem
      v-for="product in PRODUCTS"
      :key="product.article"
      v-bind:product_data="product"
      @sendArticle="showProductArticleToConsole"
    />
  </ul>
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
        "GET_PRODUCTS"
      ]),
      showProductArticleToConsole(data) {
        console.log(data);
      }
    },
    mounted() {
      this.GET_PRODUCTS()
    }
  }
</script>

<style lang="scss">
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
</style>
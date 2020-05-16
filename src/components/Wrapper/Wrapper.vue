<template>
  <div class="wrapper">
    <List/>
    <Cart
      v-if="CART_LIST.length"
      :cart_data_list="CART_LIST"
    />
  </div>
</template>

<script>
  import List from "../List/List";
  import Cart from "../Cart/Cart";

  import {mapGetters} from "vuex";

  export default {
    name: "wrapper",
    components: {   // Дети
      List,
      Cart
    },
    props: { // Не персональные данные компонента (то, что будет приходить из компонента-родителя)

    },
    data() {        // Персональные данные компонента
      return {}
    },
    computed: { // Вычислительные свойства компонента
      ...mapGetters([
        "CART_LIST"
      ])
    },
    methods: {

    }
  ,
    watch: {  // Позволяет следить за изменениями чего-либо, и в случае отлавливании этого изменения то-то делать

    }
  }
</script>

<style lang="scss">
  .wrapper {
    max-width: 86vw;
    width: 100%;
    padding: 20px;
    margin: 0 auto;
  }
</style>
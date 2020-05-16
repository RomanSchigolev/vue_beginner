<template>
  <div class="wrapper">
    <List/>
    <Cart/>
  </div>
</template>

<script>
  import List from "../List/List";
  import Cart from "../Cart/Cart";

  export default {
    name: "wrapper",
    components: {   // Дети
      List,
      Cart
    },
    props: {},      // Не персональные данные компонента (то, что будет приходить из компонента-родителя)
    data() {        // Персональные данные компонента
      return {}
    },
    computed: {},    // Вычислительные свойства компонента
    methods: {},
    watch: {}        // Позволяет следить за изменениями чего-либо, и в случае отлавливании этого изменения то-то делать
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
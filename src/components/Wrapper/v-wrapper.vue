<template>
  <div class="wrapper">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: "v-wrapper",
    components: {   // Дети
    },
    props: { // Не персональные данные компонента (то, что будет приходить из компонента-родителя)

    },
    data() {        // Персональные данные компонента
      return {}
    },
    computed: { // Вычислительные свойства компонента
    },
    methods: {},
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
<template>
  <div id="app">
    <v-wrapper/>
  </div>
</template>

<script>
  import vWrapper from "./components/Wrapper/v-wrapper";

  export default {
    name: "app",
    components: {
      vWrapper
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: $mainFont;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2c3e50;
  }
</style>




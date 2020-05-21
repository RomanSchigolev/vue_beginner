<template>
  <div id="app">
    <Wrapper/>
  </div>
</template>

<script>
  import Wrapper from "./components/Wrapper/Wrapper";

  export default {
    name: "app",
    components: {
      Wrapper
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




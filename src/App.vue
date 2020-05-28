<template>
  <div id="app">
    <v-header/>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  import vHeader from "@/components/Header/v-header";

  export default {
    name: "app",
    components: {
      vHeader
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: $mainFont;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>




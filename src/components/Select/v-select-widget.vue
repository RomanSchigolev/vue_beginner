<template>
  <section class="section section__select">
    <div class="container">
      <div class="section__title">
        <h1>Select widget</h1>
      </div>
      <div class="select">
        <v-select
          :options="options"
          label="name"
          :reduce="country => country.value"
          placeholder="Chosen country"
        >
        </v-select>
      </div>
    </div>
  </section>
</template>

<script>
  import vSelect from 'vue-select'

  export default {
    name: "v-select-widget",
    components: {
      vSelect
    },
    data() {
      return {
        options: [
          {name: "Canada", value: 1},
          {name: "USA", value: 2},
          {name: "Russia", value: 3},
          {name: "China", value: 4},
          {name: "Germany", value: 5},
          {name: "Spain", value: 6}
        ]
      }
    }
  }
</script>

<style lang="scss">
  .select {
    max-width: 400px;
    margin: 0 auto;
  }
  .vs__search{
    font-family: inherit;
    text-transform: uppercase;
  }
  .vs__open-indicator {
    fill: $accentColor;
  }
</style>
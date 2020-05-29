<template>
  <section class="section section__select">
    <div class="container">
      <div class="section__title">
        <h1>Select widget</h1>
      </div>
      <div class="section__content">
        <v-select
          :options="options"
          label="name"
          placeholder="Chosen country"
          @input="selectOption"
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
        ],
      }
    },
    methods: {
      selectOption(option) {
        if (option) {
          this.$emit("select", option);
        }
      }
    }
  }
</script>

<style lang="scss">
  .select {
    max-width: 400px;
    margin: 0 auto;
  }

  .vs__search {
    font-family: inherit;
    text-transform: uppercase;
  }

  .vs__open-indicator {
    fill: $accentColor;
  }
</style>
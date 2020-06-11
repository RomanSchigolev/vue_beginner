<template>
  <article class="section section__select">
    <div class="section__title">
      <h1>Select widget</h1>
    </div>
    <div class="section__content">
      <v-select
        :options="options"
        label="country"
        index="index"
        placeholder="Chosen country"
        @input="selectOption"
      ></v-select>
    </div>
  </article>
</template>

<script>
import vSelect from "vue-select";

export default {
  name: "v-select-widget",
  components: {
    vSelect
  },
  data() {
    return {};
  },
  props: {
    options: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    selectOption(option) {
      if (option) {
        this.$emit("select", option);
      }
    }
  }
};
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
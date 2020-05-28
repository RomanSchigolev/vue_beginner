<template>
  <div>
    <v-select-widget
      @select="optionSelected"
    >
    </v-select-widget>
    <p>{{selected}}</p>
  </div>
</template>

<script>
  import vSelectWidget from "@/components/Select/v-select-widget"

  export default {
    name: "v-test-page",
    components: {
      vSelectWidget
    },
    data() {
      return {
        selected: ""
      }
    },
    methods: {
      optionSelected(option) {
        this.selected = option.name;
      }
    }
  }
</script>

<style scoped>

</style>
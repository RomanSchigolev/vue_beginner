<template>
  <div>
    <v-select-widget
      @select="optionSelected"
    >
    </v-select-widget>
    <p>{{selected}}</p>
    <hr>
    <v-text-field
      v-model="val"
    />
    <p>{{val}}</p>
  </div>
</template>

<script>
  import vSelectWidget from "@/components/Widgets/Select/v-select-widget"
  import vTextField from "@/components/Widgets/Input/v-text-field"

  export default {
    name: "v-test-page",
    components: {
      vSelectWidget,
      vTextField
    },
    data() {
      return {
        selected: "",
        val: ""
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
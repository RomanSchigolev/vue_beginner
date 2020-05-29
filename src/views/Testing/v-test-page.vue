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
      label="Enter Something: "
    />
    <p>{{val}}</p>
    <hr>
    <v-button/>
  </div>
</template>

<script>
  import vSelectWidget from "@/components/Widgets/Select/v-select-widget"
  import vTextField from "@/components/Widgets/Input/v-text-field"
  import vButton from "@/components/Widgets/Button/v-button"

  export default {
    name: "v-test-page",
    components: {
      vSelectWidget,
      vTextField,
      vButton
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
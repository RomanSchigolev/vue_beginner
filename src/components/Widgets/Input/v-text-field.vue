<template>
  <section class="section section__select">
    <div class="container">
      <div class="section__title">
        <h1>Input widget</h1>
      </div>
      <div class="section__content">
        <label for="input">
          {{label}}
          <input type="text"
                 id="input"
                 :value="inputValue"
                 @input="inputText"
          >
        </label>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "v-text-field",
    props: {
      inputValue: {
        type: String,
        default: ""
      },
      label: {
        type: String,
        default: ""
      }
    },
    methods: {
      inputText(event) {
        let value = event.target.value;
        this.$emit("input", value);
      }
    }
  }
</script>

<style lang="scss">
  .input {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
  }
</style>
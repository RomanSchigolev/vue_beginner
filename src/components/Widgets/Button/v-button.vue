<template>
  <article class="section section__select">
    <div class="section__title">
      <h1>Button widget</h1>
    </div>
    <div class="section__content">
      <button class="btn" type="button" :class="className" @click="pressButton">
        <i class="material-icons material-icons--before" v-if="isIconSetBefore">{{isIconSetBefore}}</i>
        <span>{{title}}</span>
        <i class="material-icons material-icons--after" v-if="isIconSetAfter">{{isIconSetAfter}}</i>
      </button>
    </div>
  </article>
</template>

<script>
export default {
  name: "v-button",
  props: {
    title: {
      type: String,
      default: "Press me"
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    isError: {
      type: Boolean,
      default: false
    },
    isSuccess: {
      type: Boolean,
      default: false
    },
    isIconSetBefore: {
      type: String,
      default: ""
    },
    isIconSetAfter: {
      type: String,
      default: ""
    },
    counter: {
      type: Number,
      default: 0
    }
  },
  methods: {
    pressButton() {
      this.$emit("pressButton", this.counter);
    }
  },
  computed: {
    className() {
      return {
        "btn--disabled": this.isDisabled,
        "btn--error": this.isError,
        "btn--success": this.isSuccess
      };
    }
  }
};
</script>

<style lang="scss">
.btn {
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 1vmax 4vmax;
  font-size: 2vmax;
  font-family: "Ubuntu", sans-serif;
  background-color: $accentColor;
  outline: none;
  display: flex;
  align-items: center;
  position: relative;
  margin: 0 auto;

  &--disabled {
    pointer-events: none;
    background-color: #b3b3b3;
  }

  &--error {
    background-color: #b33950;
  }

  &--success {
    background-color: #55aa6f;
  }
}

.material-icons {
  font-size: 20px;
}

.material-icons--before {
  position: absolute;
  left: 10px;
}

.material-icons--after {
  position: absolute;
  right: 15px;
  color: red;
}
</style>
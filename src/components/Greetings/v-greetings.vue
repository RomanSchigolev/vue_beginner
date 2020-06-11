<template>
  <section class="hero">
    <div class="container">
      <div class="hero__background">
        <div class="hero__inner">
          <h1 class="hero__title">Test Application</h1>
          <h2 class="hero__subtitle">This is Vue.js app</h2>
          <div class="hero__img">
            <img src="@/assets/img/logo.png" alt="Vue.js Logo" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "v-greetings"
};
</script>

<style lang="scss">
.hero {
  &__background {
    padding: 11.96vmax 0 8.547vmax;
    box-shadow: 1px 1px 14px 0 #41b883;
    border-radius: 10px;
  }

  &__inner {
    max-width: 64.1vw;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    color: $accentColor;
  }

  &__title {
    font-size: 3.5vmax;
    font-weight: bold;
    text-transform: uppercase;
  }

  &__subtitle {
    margin-top: 3vmin;
    text-transform: uppercase;
    font-weight: lighter;
  }

  &__img {
    margin-top: 3vmax;
    display: flex;
    justify-content: center;

    & img {
      display: block;
      height: auto;
      max-width: 100%;
    }
  }
}
</style>
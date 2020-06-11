<template>
  <article class="section section__carousel">
    <div class="section__title">
      <h1>Carousel widget</h1>
    </div>
    <div class="section__content">
      <div class="carousel__container">
        <ul class="carousel__list">
          <v-carousel-item
            v-for="carouselItem in carouselList"
            :key="carouselItem.id"
            :image_data="carouselItem"
          />
        </ul>
        <div class="carousel__control">
          <button type="button">Prev</button>
          <button type="button">Next</button>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import vCarouselItem from "./v-carousel-item";
export default {
  name: "v-carousel-list",
  components: {
    vCarouselItem
  },
  props: {
    carouselList: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss">
.carousel__container {
  overflow: hidden;
  max-width: 300px;
  margin: 0 auto;
}

.carousel__list {
  display: flex;
}

.carousel__control {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.carousel__control button {
  border-radius: 5px;
  border: none;
  background-color: $accentColor;
  color: white;
  font-family: "Ubuntu", sans-serif;
  font-weight: bold;
  padding: 1vmax 3vmax;
  text-transform: uppercase;
}

.carousel__control button:first-child {
  margin-right: 10px;
}
</style>
<template>
  <article class="section section__carousel">
    <div class="section__title">
      <h1>Carousel widget</h1>
    </div>
    <div class="section__content">
      <div class="carousel__container">
        <ul class="carousel__list" :style="toMoveSlide">
          <v-carousel-item
            v-for="carouselItem in carouselList"
            :key="carouselItem.id"
            :image_data="carouselItem"
          />
        </ul>
        <div class="carousel__control">
          <button @click="prevSlide" type="button">Prev</button>
          <button class="carousel__btn--next" @click="nextSlide" type="button">Next</button>
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
  data() {
    return {
      currentSlideIndex: 0
    };
  },
  props: {
    carouselList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
      }
    },
    nextSlide() {
      const prevBtn = this.$el.querySelector(".carousel__btn--next");
      this.currentSlideIndex >= this.carouselList.length - 1
        ? (this.currentSlideIndex = 0)
        : this.currentSlideIndex++;
    }
  },
  computed: {
    toMoveSlide() {
      return {
        transform: "translateX(-" + this.currentSlideIndex * 100 + "%)"
      };
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
  transition: transform 0.4s ease;
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
<template>
  <li class="carousel__item">
    <div class="carousel__content">
      <div class="carousel__img">
        <img :src="require(`@/assets/img/carousel/${image_data.url}`)" :alt="`${image_data.name}`" />
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "v-carousel-item",
  props: {
    image_data: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss">
.carousel__img img {
  display: block;
}
</style>
<template>
  <li class="list__item">
    <div class="list__item__img">
      <img
        :src="require(`../../assets/img/${product_data.image}`)"
        :alt="`${product_data.name}`">
    </div>
    <div class="list__item__title">
      <span>{{product_data.name}}</span>
    </div>
    <div class="list__item__price">
      <span>{{product_data.price}} руб.</span>
    </div>
    <button
      class="list__item__btn"
      @click="sendDataToParent">Add to cart</button>
  </li>
</template>

<script>
  export default {
    name: "ListItem",
    props: {
      product_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      sendDataToParent() {
        this.$emit('sendArticle', this.product_data.article);
        // первый аргумент - то как будет называться метод у родителя, второй - что хотим передать
      }
    }
  }
</script>

<style lang="scss">
  .list__item {
    flex-basis: 32%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 20px;
    margin-bottom: 20px;
    text-align: center;

    &__img {
      margin-bottom: 10px;

      & img {
        display: block;
        max-width: 100%;
        height: auto;
      }
    }

    &__title, &__price {
      margin-bottom: 10px;
    }
  }
</style>
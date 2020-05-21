<template>
  <li class="cart__item">
    <div class="cart__item__img">
      <img
        :src="require(`../../assets/img/${cart_data_item.image}`)"
        :alt="`${cart_data_item.name}`">
    </div>
    <div class="cart__item__title">
      <span>{{cart_data_item.name}}</span>
    </div>
    <div class="cart__item__price">
      <span>{{cart_data_item.price}} руб.</span>
    </div>
    <div class="cart__item__quantity">
      <span>Quantity: {{cart_data_item.quantity}}</span>
    </div>
    <button @click="deleteItem">
      Delete
    </button>
  </li>
</template>

<script>
  export default {
    name: "CartItem",
    props: {
      cart_data_item: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    methods: {
      deleteItem() {
        this.$emit("deleteItem");
      }
    }
  }
</script>

<style lang="scss">
  .cart__item {
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 20px;
    margin-bottom: 20px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__img {
      margin-bottom: 10px;

      & img {
        display: block;
        width: 100px;
        height: auto;
      }
    }

    &__title, &__price {
      margin-bottom: 10px;
    }
  }
</style>
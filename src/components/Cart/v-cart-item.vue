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
      <button
        class="quantity--decrement quantity__button"
        type="button"
        @click="decrementQuantity"
      >-
      </button>
      <span>Quantity: {{cart_data_item.quantity}}</span>
      <button
        class="quantity--increment quantity__button"
        type="button"
        @click="incrementQuantity"
      >+
      </button>
    </div>
    <button @click="deleteItem">
      Delete
    </button>
  </li>
</template>

<script>
  export default {
    name: "v-cart-item",
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
      },
      decrementQuantity() {
        this.$emit("decrement");
      },
      incrementQuantity() {
        this.$emit("increment");
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

    &__quantity {
      display: flex;
      align-items: center;

      & > .quantity__button {
        background-color: transparent;
        border: none;
        font-size: 20px;
        cursor: pointer;
      }

      & > .quantity--decrement {
        margin-right: 10px;
      }

      & > .quantity--increment {
        margin-left: 10px;
      }
    }
  }
</style>
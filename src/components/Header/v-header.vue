<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo">
          <span>Vue.JS</span>
        </div>
        <nav class="menu">
          <ul class="menu__list">
            <li
              class="menu__item"
              v-for="menuItem in menuItems"
              :key="menuItem.title"
            >
              <router-link
                class="menu__link"
                :to="menuItem.url"
              >
                {{menuItem.title}}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "v-header",
    components: {},
    data() {
      return {
        menuItems: [
          {title: "Home", url: "/"},
          {title: "Shop", url: "/shop"},
          {title: "Testing", url: "/testing"}
        ]
      }
    }
  }
</script>

<style lang="scss">
  .header {
    padding: 3vmax 0;

    &__inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    &__logo span {
      font-size: 3vmax;
      text-transform: uppercase;
    }
  }

  .menu {
    &__list {
      display: flex;
      align-items: center;
    }

    &__item:not(:last-child) {
      margin-right: 2vmax;
    }

    &__link {
      color: $linkColor;
      font-weight: bold;
      letter-spacing: 1px;
      text-decoration: none;
      text-transform: uppercase;
      transition: color 0.3s linear;

      &:hover {
        color: $accentColor;
      }
    }

  }
</style>
<template>
  <section>
    <div class="container">
      <v-select-widget @select="optionSelected" :options="options" />
      <p>Выбранная страна: {{selectedOption}}</p>
      <hr />
      <v-text-field v-model="val" label="Enter Something: " />
      <p>Введённый текст: {{val}}</p>
      <hr />
      <v-button
        title="Like"
        @pressButton="clickBtn"
        :isDisabled="false"
        :isError="false"
        :isSuccess="false"
        isIconSetAfter="favorite"
      />
      <p>Кнопка выше была нажата {{counter}} раз</p>
      <hr />
      <v-carousel-list :carouselList="IMAGES" />
    </div>
  </section>
</template>

<script>
import vSelectWidget from "@/components/Widgets/Select/v-select-widget";
import vTextField from "@/components/Widgets/Input/v-text-field";
import vButton from "@/components/Widgets/Button/v-button";
import vCarouselList from "@/components/Widgets/Carousel/v-carousel-list";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-test-page",
  components: {
    vSelectWidget,
    vTextField,
    vButton,
    vCarouselList
  },
  data() {
    return {
      selectedOption: "",
      val: "",
      options: [
        { country: "Canada", index: 1 },
        { country: "USA", index: 2 },
        { country: "Russia", index: 3 },
        { country: "China", index: 4 },
        { country: "Germany", index: 5 },
        { country: "Spain", index: 6 }
      ],
      counter: 0
    };
  },
  methods: {
    ...mapActions(["GET_IMAGES"]),
    optionSelected(option) {
      this.selectedOption = option.country;
    },
    clickBtn() {
      this.counter++;
    }
  },
  computed: {
    ...mapGetters(["IMAGES"])
  },
  mounted() {
    this.GET_IMAGES();
  }
};
</script>

<style scoped>
</style>
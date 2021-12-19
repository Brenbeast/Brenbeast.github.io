<template>
  <mdb-carousel
    :interval="4000"
    slide
    :items="items"
    indicators
  />
</template>
<script>
import { mdbCarousel } from "mdbvue";
export default {
  name: "CarouselPage",
  components: {
    mdbCarousel,
  },
  /**
   * The data() function defines the initial state of the component.
   *
   * @returns {object}
   */
  data() {
    return {
      items: [
        {
          img: true,
          src: require("../assets/images/image1.png"),
          caption: {
            title: "Record Low Water Level at Great Salt Lake, Utah",
          },
        },
        {
          img: true,
          src: require("../assets/images/image2.png"),
          caption: {
            title: "Cape Cod's Ever-Changing Coast",
          },
        },
        {
          img: true,
          src: require("../assets/images/image3.png"),
          caption: {
            title: "China's Changing Yellow River Delta",
          },
        },
      ],
    };
  },
};
</script>
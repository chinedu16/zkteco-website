<template>
  <section class="h-42 mt-20 mb-10 px-4 py-5 lg:py-5 lg:px-10 ">
    <div
      data-aos="zoom-in"
      data-aos-duration="3000"
      class="customer-logos flex items-center justify-center"
    >
      <div
        id="logos_carousel"
        class="customer-logos__content w-full lg:w-3/12 flex"
      >
        <VueSlickCarousel class="w-full" :dots="true" v-bind="settings">
          <div v-for="logo in logoData" :key="logo.name">
            <g-image class="white--text align-end" :src="logo.image.url">
            </g-image>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: {
    VueSlickCarousel,
  },
  props: {
    logoData: {
      type: Array,
    },
  },

  data() {
    return {
      settings: {
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    };
  },
};
</script>

<style lang="scss" scoped>

#logos_carousel {
  .slick-slider {
    .slick-list {
      .slick-track {
        .slick-slide {
          img {
            width: unset !important;
          }
        }
      }
    }
  }
}
</style>

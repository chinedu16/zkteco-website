<template>
  <section id="customer__logo" class="breathing">
    <div
      data-aos="zoom-in"
      data-aos-duration="3000"
      class="customer-logos flex items-center justify-center"
    >
      <div
        id=""
        class="logos_carousel customer-logos__content w-full flex"
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
#customer__logo {
  margin-bottom: 6rem;
  margin-top: 6rem;
  .logos_carousel {
    width: 500px;
    .slick-slider {
      .slick-list {
        .slick-track {
          .slick-slide {
            img {
              width: unset !important;
              height: 84px;
              object-fit: cover;
            }
          }
        }
      }
    }
  }
}
</style>

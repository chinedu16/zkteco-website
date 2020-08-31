<template>
  <section id="customer__logo" class=" ">
    <div class="flex justify-center">
      <div class="breathing w-full">
        <h1 class="heading mb-10 flex justify-center" data-aos="fade-left">
          Our Clients
        </h1>
        <div
          data-aos="zoom-in"
          data-aos-duration="3000"
          class="customer-logos mt-10 flex items-center justify-center"
        >
          <div class="logos_carousel customer-logos__content w-full flex">
            <VueSlickCarousel class="w-full" :dots="true" v-bind="settings">
              <div v-for="logo in logoData" :key="logo.name">
                <div class="flex justify-center align-center">
                  <g-image
                    class="white--text align-end"
                    :src="logo.image.url"
                  ></g-image>
                </div>
              </div>
              <div v-for="logo in logoData" :key="logo.name">
                <div class="flex justify-center align-center">
                  <g-image
                    class="white--text align-end"
                    :src="logo.image.url"
                  ></g-image>
                </div>
              </div>
              <div v-for="logo in logoData" :key="logo.name">
                <div class="flex justify-center align-center">
                  <g-image
                    class="white--text align-end"
                    :src="logo.image.url"
                  ></g-image>
                </div>
              </div>
              <div v-for="logo in logoData" :key="logo.name">
                <div class="flex justify-center align-center">
                  <g-image
                    class="white--text align-end"
                    :src="logo.image.url"
                  ></g-image>
                </div>
              </div>
            </VueSlickCarousel>
          </div>
        </div>
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
        // autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
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
    width: 900px;
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

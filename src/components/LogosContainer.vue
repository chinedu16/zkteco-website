<template>
  <section class="h-32 mt-20 mb-10">
    <div data-aos="fade-up" data-aos-duration="3000" class="customer-logos flex items-center justify-center">
      <div class="customer-logos__content w-full lg:w-3/6   flex">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide
            ><g-image
              class="white--text align-end"
              src="../../src/assets/Logos/Toyota.png"
            >
            </g-image>
          </swiper-slide>
          <swiper-slide
            ><g-image
              class="white--text align-end"
              src="../../src/assets/Logos/kfc.png"
            >
            </g-image
          ></swiper-slide>
          <swiper-slide
            ><g-image
              class="white--text align-end"
              src="../../src/assets/Logos/Samsung.png"
            >
            </g-image
          ></swiper-slide>
          <swiper-slide
            ><g-image
              class="white--text align-end"
              src="../../src/assets/Logos/McDonald's.png"
            >
            </g-image
          ></swiper-slide>
          <swiper-slide
            ><g-image
              class="white--text align-end"
              src="../../src/assets/Logos/mercedes.png"
            >
            </g-image
          ></swiper-slide>
          <swiper-slide
            ><g-image
              class="white--text align-end"
              src="../../src/assets/Logos/Adidas Logo.png"
            >
            </g-image
          ></swiper-slide>

          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    swiper,
    swiperSlide,
  },

  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 50,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
};
</script>

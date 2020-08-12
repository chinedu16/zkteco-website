<template>
  <section class="h-32 mt-20 mb-10 px-4 py-5 lg:py-5 lg:px-10 ">
    <div data-aos="zoom-in" data-aos-duration="3000" class="customer-logos flex items-center justify-center">
      <div class="customer-logos__content w-full lg:w-3/6   flex">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide v-for="logo in logoData" :key="logo.name"
            ><g-image
              class="white--text align-end"
              :src="logo.image.url"
            >
            </g-image>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  components: {
  },
  props: {
    logoData: {
      type: Array,
    },
  },

  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 4000,
          
        },
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

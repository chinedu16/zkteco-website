<template>
  <SemiLayout>
    <div
      class="container px-12 py-5 lg:py-5 lg:px-10"
      
    >
      <section class="md:mb-20 flex justify-center">
        <div class="md:flex justify-between w-full max-w-screen-xxl">
          <div class="breadcrumb" @click="goBack">
            &lt; <g-link to="">Back</g-link>
          </div>
        </div>
      </section>

      <section class="mt-6 mb-16  flex justify-center">
        <div class="md:flex justify-between w-full max-w-screen-xxl">
          <div class="md:w-6/12 mb-10 md:m-0">
            <div class="thumb-example">
              <!-- swiper1 -->
              <ClientOnly>
                <swiper
                  class="swiper gallery-top"
                  :options="swiperOptionTop"
                  ref="swiperTop"
                >
                  <swiper-slide v-for="image in product.images" :key="image.id">
                    <img :src="image.url" :alt="image.name" />
                  </swiper-slide>

                  <div
                    class="swiper-button-next swiper-button-black"
                    slot="button-next"
                  ></div>
                  <div
                    class="swiper-button-prev swiper-button-black"
                    slot="button-prev"
                  ></div>
                </swiper>
              </ClientOnly>
              <!-- swiper2 Thumbs -->
              <ClientOnly>
                <swiper
                  class="swiper gallery-thumbs thumb-swiper"
                  :options="swiperOptionThumbs"
                  ref="swiperThumbs"
                >
                  <swiper-slide v-for="image in product.images" :key="image.id">
                    <img :src="image.url" :alt="image.name" />
                  </swiper-slide>
                </swiper>
              </ClientOnly>
            </div>
          </div>
          <div class=""  style="width: 40%;">
            <h1
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              {{ product.name }}
            </h1>
            <p
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              class="description"
            >
              {{ product.description }}
            </p>

            <div
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              class="share relative md:mt-10"
            >
              Share the Website to
            </div>
            <div
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              class="flex mt-5"
            >
              <g-link><Twitter color="#777" width="34" height="34"/></g-link>
              <g-link class="ml-8"
                ><Facebook color="#777" width="34" height="34"
              /></g-link>
              <g-link class="ml-8"
                ><Linkedin color="#777" width="34" height="34"
              /></g-link>
              <g-link class="ml-8 hover"
                ><GooglePlus color="#777" width="34" height="34"
              /></g-link>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-32 flex xxl:justify-center">
        <v-card class="max-w-screen-xxl w-full">
          <v-tabs background-color="white" color="#78bc27">
            <v-tab style="letter-spacing: 0px;" class="font-bold"
              >Product Details</v-tab
            >
            <v-tab style="letter-spacing: 0px;" class="font-bold"
              >Related Products</v-tab
            >
            <v-tab style="letter-spacing: 0px;" class="font-bold"
              >Download</v-tab
            >

            <v-tab-item :key="1" class="mt-10">
              <v-container fluid>
                <v-row>
                  <p v-html="product.product_details"></p>
                </v-row>
              </v-container>
            </v-tab-item>
            <v-tab-item :key="2" class="mt-10">
              <v-container fluid>
                <v-row>
                  <v-col cols="12" sm="6" md="3" v-for="n in 6" :key="n">
                    <g-image height="200px" src="../assets/Product/D2S 1.png">
                    </g-image>
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
            <v-tab-item :key="3" class="mt-10">
              <v-container fluid>
                <v-row
                  class="border-b mb-5"
                  v-for="download in product.downloads"
                  :key="download.id"
                >
                  <div class="flex w-5/12 justify-between">
                    <div class="flex">
                      <Pdf />
                      <h4 class="ml-4">{{ download.name }}</h4>
                    </div>
                    <div class="flex ml-5">
                      <span class="mr-5">{{ download.file[0].size }}MB</span>
                      <Download />
                    </div>
                  </div>
                </v-row>
              </v-container>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </section>
    </div>
  </SemiLayout>
</template>

<page-query>
query Products($path: String!) {
  strapiProducts (path: $path) {
    id
    name
    slug
    description
    product_details
    downloads {
      id
      name
      file {
        url
        size
        alternativeText
        caption
      }
    }
    images {
      id
      name
      url
    }
  }
}
</page-query>

<script>
import SemiLayout from "../layouts/SemiDefault";

import Office from "../components/Vectors/Office";
import Message from "../components/Vectors/Message";
import Call from "../components/Vectors/Call";
import Download from "../components/Vectors/Download";
import Pdf from "../components/Vectors/Pdf";
import Facebook from "../components/Vectors/Facebook";
import Twitter from "../components/Vectors/Twitter";
import Linkedin from "../components/Vectors/Linkedin";
import GooglePlus from "../components/Vectors/GooglePlus";

export default {
  components: {
    Office,
    Message,
    Call,
    Download,
    Pdf,
    Facebook,
    Twitter,
    Linkedin,
    GooglePlus,
    SemiLayout,
    swiper: () =>
      import("vue-awesome-swiper")
        .then((m) => m.swiper)
        .catch(),
    swiperSlide: () =>
      import("vue-awesome-swiper")
        .then((m) => m.swiperSlide)
        .catch(),
  },

  data() {
    return {
      swiperOption: {
        slidesPerView: 4,

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      swiperOptionTop: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 30,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
      page: 1,
      features: [
        {
          id: 1,
          title: "TIme Management",
          src: require("../assets/Product/D2S 1.png"),
        },
        {
          id: 2,
          title: "Control Solution",
          src: require("../assets/Product/D2S 1.png"),
        },
        {
          id: 3,
          title: "Time Solution",
          src: require("../assets/Product/D2S 1.png"),
        },
      ],
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper;
      const swiperThumbs = this.$refs.swiperThumbs.swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
  computed: {
    product() {
      return this.$page.strapiProducts;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-tab {
  :not(:first-child) {
    padding: 0px !important;
  }
}

a {
  &:hover {
    svg {
      path {
        fill: yellow !important;
      }
    }
  }
}

.description {
  height: 200px;
  overflow-y: scroll;
}

.share {
  &::after {
    content: "";
    margin-left: 20px;
    display: inline-block;
    width: 70%;
    border-top: 1px solid #ccc;
    position: absolute;
    top: 50%;
  }
}

// .swiper-button-next,
// .swiper-container-rtl .swiper-button-prev,
// .swiper-button-prev,
// .swiper-container-rtl .swiper-button-next {
//   background-image: none;
// }

.swiper-button-next,
.swiper-button-prev,
.swiper-container-rtl .swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  fill: green;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #78bc27;
}
</style>

<style lang="scss" scoped>
.thumb-example {
  height: 361px;
  background-color: transparent;
}

.swiper {
  .swiper-slide {
    background-size: cover;
    background-position: center;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  &.gallery-top {
    height: 80%;
    width: 100%;
  }
  &.gallery-thumbs {
    height: 47%;
    box-sizing: border-box;
    padding: 40px 0;
  }
  &.gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  &.gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
}
</style>

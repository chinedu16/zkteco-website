<template>
  <SemiLayout>
    <div class="container px-12 py-5 mt-32 lg:py-5 lg:px-10">
      <section class="mt-6 mb-16">
        <div class="md:flex justify-between">
          <div class="md:w-6/12 mb-10 md:m-0">
            <div class="thumb-example">
              <!-- swiper1 -->
              <swiper
                class="swiper gallery-top"
                :options="swiperOptionTop"
                ref="swiperTop"
              >
                <swiper-slide class="slide-1"></swiper-slide>
                <swiper-slide class="slide-2"></swiper-slide>
                <swiper-slide class="slide-3"></swiper-slide>
                <swiper-slide class="slide-4"></swiper-slide>
                <swiper-slide class="slide-5"></swiper-slide>
                <div
                  class="swiper-button-next swiper-button-white"
                  slot="button-next"
                ></div>
                <div
                  class="swiper-button-prev swiper-button-white"
                  slot="button-prev"
                ></div>
              </swiper>
              <!-- swiper2 Thumbs -->
              <swiper
                class="swiper gallery-thumbs"
                :options="swiperOptionThumbs"
                ref="swiperThumbs"
              >
                <swiper-slide class="slide-1"></swiper-slide>
                <swiper-slide class="slide-2"></swiper-slide>
                <swiper-slide class="slide-3"></swiper-slide>
                <swiper-slide class="slide-4"></swiper-slide>
                <swiper-slide class="slide-5"></swiper-slide>
              </swiper>
            </div>
          </div>
          <div class="" style="width: 40%;">
            <h1 data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">{{ product.name }}</h1>
            <p data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="3000" class="description">
              {{ product.description }}
            </p>

            <div data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="share relative md:mt-10">Share the Website to</div>
            <div data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="flex mt-5">
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

      <section class="mt-32">
        <v-card>
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
                      <h4 class="ml-4">{{download.name}}</h4>
                    </div>
                    <div class="flex ml-5">
                      <span class="mr-5">{{download.file[0].size}}MB</span>
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

import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    Office,
    Message,
    Call,
    swiper,
    swiperSlide,
    Download,
    Pdf,
    Facebook,
    Twitter,
    Linkedin,
    GooglePlus,
    SemiLayout,
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
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper;
      const swiperThumbs = this.$refs.swiperThumbs.swiper;
      console.log(this.$refs);
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

    &.slide-1 {
      background-image: url("../assets/D2S 1.png");
    }
    &.slide-2 {
      background-image: url("../assets/D2S 1.png");
    }
    &.slide-3 {
      background-image: url("../assets/D2S 1.png");
    }
    &.slide-4 {
      background-image: url("../assets/D2S 1.png");
    }
    &.slide-5 {
      background-image: url("../assets/D2S 1.png");
    }
  }

  &.gallery-top {
    height: 80%;
    width: 100%;
  }
  &.gallery-thumbs {
    height: 40%;
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

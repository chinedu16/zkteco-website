<template>
  <SemiLayout>
    <div class="flex justify-center align-center">
      <div class="breathing" id="product-details">
        <section class="">
          <div class="">
            <div class="breadcrumb flex" @click="goBack">
              <LeftCaret /> <a to>Back</a>
            </div>
          </div>
        </section>

        <section class="flex justify-center">
          <div class="product-carousel-container justify-between w-full">
            <div class="product-images left-product">
              <div class="thumb-example" id="products_carousel">
                <!-- <div id="navFor1">
                  <VueSlickCarousel
                    ref="c1"
                    :asNavFor="$refs.c2"
                    v-bind="settings"
                  >
                    <div v-for="image in product.images" :key="image.id">
                      <div class="w-full carousel-image-container">
                        <g-image :src="image.url" :alt="image.name"> </g-image>
                      </div>
                    </div>
                  </VueSlickCarousel>
                </div>

                <div id="navFor2">
                  <VueSlickCarousel
                    ref="c2"
                    :asNavFor="$refs.c1"
                    :slidesToShow="3"
                    :focusOnSelect="true"
                  >
                    <div v-for="image in product.images" :key="image.id">
                      <g-image :src="image.url" :alt="image.name"> </g-image>
                    </div>
                  </VueSlickCarousel>
                </div> -->

                <div
                  class="picture w3-display-container"
                  style="display:none"
                  v-for="image in product.images"
                  :key="image.id"
                  :id="image.name"
                >
                  <g-image :src="image.url" :alt="image.name"> </g-image>
                </div>
                <div class="w3-row-padding">
                  <div
                    class="w3-col s3 w3-container "
                    v-for="image in product.images"
                    :key="image.id"
                  >
                    <a
                      href="javascript:void(0)"
                      class="w3-hover-opacity"
                      @click="openImg(image.name)"
                    >
                      <g-image :src="image.url" :alt="image.name"> </g-image>
                    </a>
                  </div>
                </div>
              </div>

              <!-- <div id="navFor3">
                <div
                  v-for="image in product.images"
                  :key="image.id"
                  class="mobile-product-image"
                  :id="image.name"
                >
                  <g-image :src="image.url" :alt="image.name"> </g-image>
                </div>
              </div> -->
            </div>
            <div class="right-product">
              <h1
                data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                style="color: #7cbd27; font-size: 47px; font-weight: bolder;"
              >
                {{ product.name }}
              </h1>
              <p
                data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000"
                class="description"
                v-html="product.description"
              ></p>

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
                <g-link
                  :to="
                    `https://twitter.com/intent/tweet?text=Click%20to%20View%20Our%20%20ZkTeco%20Products%20-${
                      product.name
                    }%20${url}`
                  "
                  ><Twitter color="#777" width="34" height="34"
                /></g-link>
                <g-link
                  :to="`https://www.facebook.com/sharer/sharer.php?u=${url}`"
                  class="ml-8"
                  ><Facebook color="#777" width="34" height="34"
                /></g-link>
                <g-link to="https://www.instagram.com/zkteco_wa/" class="ml-8"
                  ><Instagram color="#777" width="34" height="34"
                /></g-link>
                <g-link
                  :to="
                    `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${
                      product.name
                    }&summary=${product.description}`
                  "
                  class="ml-8"
                  ><Linkedin color="#777" width="34" height="34"
                /></g-link>
                <g-link
                  :to="
                    `https://api.whatsapp.com/send?url=${url}?title=${
                      product.name
                    }?description=${product.description}`
                  "
                  class="ml-8"
                  ><Whatsapp color="#777" width="34" height="34"
                /></g-link>
              </div>
            </div>
          </div>
        </section>

        <section class="mt-10 flex">
          <!-- <v-card class="max-w-screen-xxl w-full">
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
                      <div
                        class="flex ml-5"
                        v-for="item in download.file"
                        :key="item.id"
                      >
                        <g-link :to="item.url" download>
                          <span class="mr-5">{{ item.size }}MB</span>
                          <Download />
                        </g-link>
                      </div>
                    </div>
                  </v-row>
                </v-container>
              </v-tab-item>
            </v-tabs>
          </v-card> -->
          <div class="w3-container max-w-screen-xxl w-full">
            <div class="w3-bar w3-black">
              <button
                class="w3-bar-item w3-button tablink w3-red"
                @click="openCity($event, 'London')"
              >
                Product Details
              </button>
              <button
                class="w3-bar-item w3-button tablink"
                @click="openCity($event, 'Paris')"
              >
                Related Products
              </button>
              <button
                class="w3-bar-item w3-button tablink"
                @click="openCity($event, 'Tokyo')"
              >
                Download
              </button>
            </div>

            <div id="London" class="w3-container w3-border city">
              <p v-html="product.product_details"></p>
            </div>

            <div
              id="Paris"
              class="w3-container w3-border city"
              style="display:none"
            >
              <v-container fluid>
                <!-- <v-row>
                  <v-col cols="12" sm="6" md="3" v-for="n in 6" :key="n">
                    <g-image height="200px" src="../assets/Product/D2S 1.png">
                    </g-image>
                  </v-col>
                </v-row> -->
              </v-container>
            </div>

            <div
              id="Tokyo"
              class="w3-container w3-border city"
              style="display:none"
            >
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
                    <div
                      class="flex ml-5"
                      v-for="item in download.file"
                      :key="item.id"
                    >
                      <g-link :to="item.url" download>
                        <span class="mr-5">{{ item.size }}MB</span>
                        <Download />
                      </g-link>
                    </div>
                  </div>
                </v-row>
              </v-container>
            </div>
          </div>
        </section>
      </div>
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
import LeftCaret from "../components/Vectors/LeftCaret";
import Facebook from "../components/Vectors/Facebook";
import Twitter from "../components/Vectors/Twitter";
import Linkedin from "../components/Vectors/Linkedin";
import Instagram from "../components/Vectors/Instagram";
import GooglePlus from "../components/Vectors/GooglePlus";
import Whatsapp from "../components/Vectors/Whatsapp";

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: {
    Office,
    Message,
    Call,
    Download,
    Pdf,
    LeftCaret,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Whatsapp,
    SemiLayout,
    VueSlickCarousel,
  },

  data() {
    return {
      page: 1,
      url: "",
      mountedProduct: "",
      settings: {
        speed: 2000,
        autoplaySpeed: 1000,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    syncSliders(currentPosition, nextPosition) {
      this.$refs.c1.next();
      this.$refs.c2.next();
    },
    openCity(evt, cityName) {
      var i, x, tablinks;
      x = document.getElementsByClassName("city");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablink");
      for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " w3-red";
    },
    openImg(imgName) {
      var i, x;
      x = document.getElementsByClassName("picture");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      document.getElementById(imgName).style.display = "block";
    },
  },
  mounted() {
    this.url = window.location.href;
    // this.openCity();
    this.openImg(this.$page.strapiProducts.images[0].name);
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

.s3 {
  width: 100% !important;
    border: 1px solid #ccc !important;
    padding: 10px;
  img {
    object-fit: contain;
    width: 100%;
  }
}
.w3-row-padding {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  height: 8rem;
  margin-top: 2rem;
}

.description {
  height: 200px;
  overflow-y: scroll;
}

.picture {
  height: 300px;
  width: 560px;
  img {
    width: 100%;
    object-fit: contain;
    height: 100%;
  }
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

.w3-red,
.w3-hover-red:hover {
  color: #fff !important;
  background-color: #484748 !important;
}

.w3-container {
  width: 100%;
}

.w3-bar {
  width: 100%;
  overflow: hidden;
}
.w3-center .w3-bar {
  display: inline-block;
  width: auto;
}
.w3-bar .w3-bar-item {
  padding: 8px 16px;
  float: left;
  width: auto;
  border: none;
  display: block;
  outline: 0;
}

.w3-border {
  border: 1px solid #ccc !important;
  padding: 20px;
}

.w3-black,
.w3-hover-black:hover {
  color: #fff !important;
  background-color: rgb(124, 189, 39) !important;
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

.thumb-example {
  height: 471px;
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

#products_carousel {
  .slick-slider {
    height: inherit;
    .slick-list {
      .slick-track {
        .slick-slide {
          .carousel-image-container {
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: unset !important;
            }
          }
        }
      }
    }
  }
}

#product-details {
  margin-top: 9rem;
}
</style>

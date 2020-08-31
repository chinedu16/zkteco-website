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
                <div id="navFor1">
                  <VueSlickCarousel
                    ref="c1"
                    :asNavFor="$refs.c2"
                    :slidesToShow="1"
                    :autoplay="true"
                    :speed="2000"
                    :autoplaySpeed="1000"
                    :infinite="true"
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
                </div>
              </div>
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
                <g-link to="https://www.instagram.com" class="ml-8"
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
          </v-card>
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
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    syncSliders(currentPosition, nextPosition) {
      // console.log(this.$refs.c1)
      this.$refs.c1.next();
      this.$refs.c2.next();
    },
  },
  mounted() {
    this.url = window.location.href;
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

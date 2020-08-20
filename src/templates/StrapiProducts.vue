<template>
  <SemiLayout>
    <div class="flex justify-center align-center">
      <div class="breathing" id="product-details">
        <section class="">
          <div class="">
            <div class="breadcrumb" @click="goBack">
              &lt; <a to>Back</a>
            </div>
          </div> 
        </section>

        <section class="flex justify-center">
          <div class="product-carousel-container justify-between w-full">
            <div class="product-images left-product" >
              <div class="thumb-example" id="products_carousel">
                <div id="navFor1">
                  <VueSlickCarousel
                    ref="c1"
                    :asNavFor="$refs.c2"
                    :focusOnSelect="true"
                  >
                    <div v-for="image in product.images" :key="image.id">
                      <g-image :src="image.url" :alt="image.name"> </g-image>
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
                  ><Instagram color="#777" width="34" height="34"
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
import Instagram from "../components/Vectors/Instagram";
import Linkedin from "../components/Vectors/Linkedin";
import GooglePlus from "../components/Vectors/GooglePlus";

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
    Facebook,
    Twitter,
    Instagram,
    SemiLayout,
    VueSlickCarousel,
  },

  data() {
    return {
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
          img {
            width: unset !important;
          }
        }
      }
    }
  }
}

#navFor1 {
  .slick-slider {
    height: inherit;
    .slick-list {
      .slick-track {
        .slick-slide {
          img {
            width: 100% !important;
            height: 326px;
            object-fit: cover;
          }
        }
      }
    }
  }
}

#navFor2 {
  .slick-slider {
    height: inherit;
    .slick-list {
      .slick-track {
        .slick-slide {
          img {
            width: unset !important;
            height: 100px;
            object-fit: cover;
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

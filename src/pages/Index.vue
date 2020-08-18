<template>
  <Layout>
    <div>
      <!-- <div id="slide-container" class="mt-24 mb-12 lg:-mt-1">
        <VueSlickCarousel v-bind="settings_hero">
          <div v-for="(item, i) in sliders" :key="i">
            <g-image :src="item.image.url"> </g-image>
          </div>
        </VueSlickCarousel>
      </div> -->

      <div class="container mt-6 md:block">
        <h1
          class="text-center text-3xl"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          ZKTeco Insight into the Market
        </h1>
        <div class="index-ms text-center my-10">
          <span
            style="font-size:18px;"
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            >Hybrid Biometric. Smart Security</span
          >
        </div>
        <div class="features flex items-center justify-center">
          <!-- <div
            class="customer-logos__content w-full md:w-10/12"
            id="menu_feature_carousel"
          >
            <VueSlickCarousel v-bind="settings">
              <div v-for="feature in features" :key="feature.id">
                <div class="feature-text">
                  <div class="icons"><Search /></div>
                  <h1>{{ feature.title }}</h1>
                </div>
                <g-image
                  class="white--text align-end"
                  height="200px"
                  style="border-bottom: 10px solid #82bb31;"
                  :src="feature.src"
                >
                </g-image>
              </div>
            </VueSlickCarousel>
          </div> -->
        </div>
      </div>

      <section class="px-4 py-5 lg:py-5 lg:px-10 mt-8 w-full">
        <div class="flex justify-center ">
          <div class="w-full max-w-screen-xxl">
            <h1 class="md:px-12 lg:px-10" data-aos="fade-left">News Center</h1>

            <div class="grid col-gap-4 grid-cols-none md:grid-cols-4">
              <div
                style="height: 400px; margin-top: 40px;"
                class=""
                v-for="article in articles"
                :key="article.id"
              >
                <v-card class="pa-2  img-hover-zoom--brightness" outlined tile>
                  <div class="image-hover-zoom">
                    <g-image
                      class="white--text align-end hover g-image-grow"
                      height="200px"
                      :src="article.node.image[0].formats.thumbnail.url"
                    >
                    </g-image>
                  </div>

                  <div class="flex items-center justify-center relative">
                    <div
                      class="w-10/12 h-40 cursor-pointer shadow absolute bg-white"
                    >
                      <div class="h-full relative">
                        <g-link
                          class="hover-box"
                          :to="`/blog/${article.node.slug}`"
                        >
                          <v-card-text class="text--primary">
                            <div class="text-xl font-semibold">
                              {{ article.node.title }}
                            </div>
                          </v-card-text>

                          <v-card-actions class="absolute bottom-0">
                            <v-btn
                              class="tracking-normal hover capitalize"
                              style="color: #333!important;"
                              text
                            >
                              Learn More >
                            </v-btn>
                          </v-card-actions>
                        </g-link>
                      </div>
                    </div>
                  </div>
                </v-card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- <LogoContainer :logoData="partners" /> -->
    </div>
  </Layout>
</template>

<page-query>
query {
  allStrapiArticles {
    edges {
      node {
        id
        title
        slug
        categories {
          name
        }
        image {
          url
          name
          formats {
            thumbnail  {
              url
            }
          }
        }
      }
    } 
  }
  allStrapiHomePages {
    edges {
      node{
        sliders {
          name
          image {
            url
            formats {
              large {
                height
                width
                url
              }
            }
        	} 
        }
        partners {
          name
          image {
            url
          }
        }
      }
    }
  }
}
</page-query>

<script>
import Logo from "@/components/Logo";
import Search from "../components/Vectors/Call";
import LogoContainer from "../components/LogosContainer";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

import {
  ArrowRightCircleIcon,
  ZapIcon,
  CodeIcon,
  MoonIcon,
  SearchIcon,
} from "vue-feather-icons";

export default {
  components: {
    Logo,
    ArrowRightCircleIcon,
    ZapIcon,
    CodeIcon,
    MoonIcon,
    SearchIcon,
    LogoContainer,
    Search,
    VueSlickCarousel,
  },
  metaInfo: {
    title:
      "ZKTeco is a globally-renowned provider of security, access control and time management solutions",
  },

  data() {
    return {
      settings_hero: {
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      },
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
      },

      features: [
        {
          id: 1,
          title: "TIme Management",
          src: require("../assets/Feature/time management 1.png"),
        },
        {
          id: 2,
          title: "Control Solution",
          src: require("../assets/Feature/elevator control 1.png"),
        },
        {
          id: 3,
          title: "Time Solution",
          src: require("../assets/Feature/High availability 1.png"),
        },
        {
          id: 4,
          title: "TIme Management",
          src: require("../assets/Feature/time management 1.png"),
        },
        {
          id: 5,
          title: "Control Solution",
          src: require("../assets/Feature/elevator control 1.png"),
        },
        {
          id: 6,
          title: "Time Solution",
          src: require("../assets/Feature/High availability 1.png"),
        },
      ],
    };
  },
  metaInfo() {
    const title = "ZkTeco";
    const description =
      "ZKTeco is a globally-renowned provider of security, access control and time management solutions";

    return {
      title: title,
      meta: [
        {
          name: "description",
          content: description,
        },
        {
          key: "og:title",
          name: "og:title",
          content: title,
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: title,
        },
        {
          key: "og:description",
          name: "og:description",
          content: description,
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: description,
        },
      ],
    };
  },
  computed: {
    articles() {
      return this.$page.allStrapiArticles.edges;
    },
    sliders() {
      return this.$page.allStrapiHomePages.edges[0].node.sliders;
    },
    partners() {
      return this.$page.allStrapiHomePages.edges[0].node.partners;
    },
  },
};
</script>

<style lang="scss">
.home-links a {
  margin-right: 1rem;
}
.hover-box {
  &:hover {
    .text-xl,
    span {
      color: #82bb31;
    }
  }
}

.feature-text {
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: white;
    font-weight: 600;
    font-size: 26px !important;
  }

  .icons {
    border-radius: 50%;
    background: white;
    height: 71px;
    width: 71px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
}

#slide-container {
  .slick-slider {
    .slick-list {
      .slick-track {
        .slick-slide {
          position: relative !important;
          img {
            object-fit: cover;
            width: inherit !important;
            height: inherit;
          }
        }
      }
    }
    .slick-next {
      right: 6rem;
      @media only screen and (max-width: 600px) {
        right: 0rem;
      }
      &::before {
        color: #82bb31;
        font-size: 5rem;
        @media only screen and (max-width: 600px) {
          font-size: 2rem;
        }
      }
    }

    .slick-prev {
      left: 3rem;
      z-index: 1000000;
      @media only screen and (max-width: 600px) {
        left: 0rem;
      }
      &::before {
        color: #82bb31;
        font-size: 5rem;
        @media only screen and (max-width: 600px) {
          font-size: 2rem;
        }
      }
    }
  }
}

#menu_feature_carousel {
  .slick-slider {
    .slick-dots {
      li {
        button {
          &::before {
            font-size: 26px;
          }
        }
      }
      .slick-active {
        button {
          &::before {
            color: #82bb31;
          }
        }
      }
    }
    .slick-list {
      .slick-track {
        .slick-slide {
          position: relative !important;
          img {
            object-fit: cover;
            width: inherit !important;
            height: inherit;
            border-bottom: 10px solid #82bb31;
          }
        }
      }
    }
  }
}
</style>

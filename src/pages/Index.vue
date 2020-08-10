<template>
  <Layout>
    <div class="">
      <v-carousel cycle interval="4000" hide-delimiters>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>

      <div class="container mt-6">
        <h2 class="text-center" data-aos="fade-down">ZKTeco Insight into the Market</h2>
        <div class="index-ms text-center my-10" >
          <span style="font-size:18px;" data-aos="fade-up">Hybrid Biometric. Smart Security</span>
        </div>
        <div class="features flex items-center justify-center">
          <div  data-aos="zoom-in-down" class="customer-logos__content w-full md:w-10/12">
            <swiper class="swiper" :options="swiperOption">
              <swiper-slide v-for="feature in features" :key="feature.id">
                <div class="feature-text">
                  <div class="icons"><Search /></div>
                  <h1>{{ feature.title }}</h1>
                </div>
                <g-image
                  class="white--text align-end"
                  height="200px"
                  :src="feature.src"
                >
                </g-image>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
        </div>
      </div>

      <section class="px-0 md:px-10 mt-8">
        <div class="flex justify-center">
          <div class="w-full max-w-screen-xxl">
            <h1 class="md:px-12 lg:px-10" data-aos="fade-left" >News Center</h1>
            <v-row class="mb-0 md:px-12 lg:px-10">
              <v-col
                cols="12"
                style="height: 400px; margin-top: 40px;"
                sm="6"
                md="3"
                v-for="article in articles"
                :key="article.id"
              >
                <v-card
                  class="pa-2 mx-auto img-hover-zoom--brightness"
                  outlined
                  tile
                >
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
              </v-col>
            </v-row>
          </div>
        </div>
      </section>

      <LogoContainer />
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
}
</page-query>

<script>
import Logo from "@/components/Logo";
import Search from "../components/Vectors/Call";
import LogoContainer from "../components/LogosContainer";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

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
    swiper,
    swiperSlide,
    Search,
  },

  data() {
    return {
      swiperOption: {
        slidesPerView: 3,

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      items: [
        {
          src: require("../assets/Hero/Bio time 1.png"),
        },
        {
          src: require("../assets/Hero/Blade 100100 1.png"),
        },
        {
          src: require("../assets/Hero/Horus 1.png"),
        },
        {
          src: require("../assets/Hero/ProFace X 1.png"),
        },
        {
          src: require("../assets/Hero/Visible light 1.png"),
        },
      ],
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
      news: [
        {
          id: 1,
          title: "BioTime 8.0",
          src: require("../assets/News/Bio time 1.png"),
        },
        {
          id: 2,
          title: "ZKTeco North Africa amazing show-up at ICT Cairo",
          src: require("../assets/News/North Africa 1.png"),
        },
        {
          id: 3,
          title: "John Che Chairman ZKTeco visits Indian Research Institute",
          src: require("../assets/News/Chairman 1.png"),
        },
        {
          id: 4,
          title: "Blade 100100",
          src: require("../assets/News/Bio time 1.png"),
        },
      ],
    };
  },
  metaInfo() {
    const title = "Great Documentation starts here";
    const description =
      "DOCC is a starter theme with instant search and dark mode for writing great technical documentation. Based on Gridsome!";

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
</style>

<template>
  <Layout>
    <div>
      <div id="slide-container">
        <VueSlickCarousel
          :edgeFriction="0.35"
          :slidesToShow="1"
          :slidesToScroll="1"
          :autoplay="true"
          :cssEase="linear"
          :speed="2000"
          :autoplaySpeed="4000"
          :infinite="true"
          :adaptiveHeight="false"
        >
          <div class="container-hero" v-for="(item, i) in sliders" :key="i">
            <g-image :src="item.image.url"> </g-image>
          </div>
        </VueSlickCarousel>
      </div>

      <div id="feature_container" class="">
        <div class="flex justify-center align-center">
          <div class="breathing w-full ">
            <h2
              class="text-center heading"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              ZKTeco Insight into the Market
            </h2>
            <div class="index-ms text-center my-5">
              <span
                style="font-size:18px;"
                data-aos="fade-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                >Hybrid Biometric. Smart Security</span
              >
            </div>
            <div class="features flex items-center justify-center">
              <div
                class="customer-logos__content w-full md:w-10/12"
                id="menu_feature_carousel"
              >
                <VueSlickCarousel v-bind="settings">
                  <div v-for="feature in features" :key="feature.id">
                    <g-link :to="feature.url">
                      <div class="feature-text">
                        <div class="icons-container">
                          <g-image :src="feature.icon">

                          </g-image>
                        </div>
                        <h1>{{ feature.title }}</h1>
                        </div>
                    </g-link>
                    <g-link :to="feature.url">
                      <g-image
                      class="white--text align-end"
                      height="100px"
                      style="border-bottom: 10px solid #82bb31; object-fit: contain;"
                      :src="feature.src"
                    >
                    </g-image>
                    </g-link>
                  </div>
                </VueSlickCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="w-full" id="news-container__section">
        <div class="flex justify-center ">
          <div class="w-full breathing">
            <h1 class="heading flex justify-center" data-aos="fade-left">
              News Center
            </h1>
            <div class="news-container">
              <div
                style="height: 400px; margin-top: 40px;"
                v-for="article in articles"
                :key="article.id"
              >
                <v-card class=" img-hover-zoom--brightness">
                  <div class="image-hover-zoom">
                    <g-image
                      class="white--text align-end hover g-image-grow"
                      height="200px"
                      :src="article.node.image[0].formats.thumbnail.url"
                    >
                    </g-image>
                  </div>

                  <div class="relative">
                    <div class="news-card__">
                      <div class="news-card__tile">
                        <g-link
                          class="hover-box"
                          :to="`/blog/${article.node.slug}`"
                        >
                          <v-card-text class="text--primary">
                            <div class="" style="font-weight: bold;">
                              {{ article.node.title }}
                            </div>
                          </v-card-text>

                          <v-card-actions class="absolute bottom-0">
                            <v-btn
                              class="tracking-normal hover capitalize"
                              style="color: #333!important;"
                              text
                            >
                              Learn More <RightCaret />
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

      <section>
        <LogoContainer :logoData="partners" />
      </section>

      <div id="newletter-modal">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <v-card sytle="background: white;!important;">
            <div class="flex">
              <div id="leftside-newsletter" style="">
                <g-image src="../assets/Logo-2.png"></g-image>
              </div>
              <div style="rightside-newsletter">
                <v-card-title class="headline"
                  >Subscribe for Email Updates</v-card-title
                >

                <v-card-text>
                  Get the latest updates on Time Attendance, Access Control,
                  Security Inspection and Other Biometric Solutions Newsletter.
                </v-card-text>

                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-col cols="12">
                    <v-text-field
                      label="Name*"
                      hint="Enter your full name"
                      required
                      v-model="name"
                      :rules="nameRules"
                      color="#82bb31"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Email"
                      hint="none@none.com"
                      color="#82bb31"
                      :rules="emailRules"
                      v-model="email"
                    ></v-text-field>
                  </v-col>
                  <div class="my-2">
                    <v-btn @click="sendEmail" style="width: 100%;" color="green"
                      >Subscribe</v-btn
                    >
                  </div>

                  <p style="color: red;" v-if="showError">
                    Something went wrong
                  </p>
                </v-form>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <span
                    style="cursor: pointer;"
                    color="green darken-1"
                    text
                    @click="dialog = false"
                  >
                    Close
                  </span>
                </v-card-actions>
              </div>
            </div>
          </v-card>
        </v-dialog>
      </div>
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
import RightCaret from "../components/Vectors/RightCaret";
import LogoContainer from "../components/LogosContainer";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import moment from "moment";
import axios from "axios";

import api from "../api";

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
    RightCaret,
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
      name: "",
      showError: false,
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 30) || "Name must be less than 10 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      dialog: false,
      timer: "",
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
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
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
        ],
      },

      features: [
        {
          id: 1,
          icon: require("../assets/Feature/time attendance icon.png"),
          title: "Time Attendance",
          url: "/product-categories/time-attendance",
          src: require("../assets/Feature/time attendance background.jpg"),
        },
        {
          id: 2,
          icon: require("../assets/Feature/access control icon.png"),
          title: "Access Control",
          url: "/product-categories/access-control",
          src: require("../assets/Feature/access control background.jpg"),
        },
        {
          id: 3,
          icon: require("../assets/Feature/smart lock icon.png"),
          title: "Smart Lock",
          url: '/product-categories/smart-lock',
          src: require("../assets/Feature/smart lock back.jpg"),
        },
        {
          id: 4,
          icon: require("../assets/Feature/entrance control icon.png"),
          title: "Entrance Control",
          url: "/product-categories/entrance-control",
          src: require("../assets/Feature/entrance control back.jpg"),
        },
        {
          id: 5,
          icon: require("../assets/Feature/security inspection icon.png"),
          title: "Security Inspection",
          url: "/product-categories/security-inspection",
          src: require("../assets/Feature/security inspection icon back.jpg"),
        },
        {
          id: 6,
          title: "CCTV",
          url: '/product-categories/cctv',
          icon: require("../assets/Feature/cctv icon.png"),
          src: require("../assets/Feature/cctv background.jpg"),
        },
      ],
    };
  },
  metaInfo() {
    const title = "ZKTeco";
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
  created() {
    const areYouSubscribed = this.hasInStorage();
    const hoursCreated = areYouSubscribed
      ? moment().diff(moment(areYouSubscribed.timeSaved), "hours")
      : null;

    if (areYouSubscribed) {
      if (hoursCreated < 5) {
        return;
      } else {
        this.clearInStorage();
      }
    } else {
      this.timer = setInterval(this.fetchEventsList, 1000);
    }
  },
  methods: {
    fetchEventsList() {
      this.dialog = true;
      clearInterval(this.timer);
      this.writeToStorage(true);
    },

    hasInStorage() {
      if (process.isClient) {
        const check = localStorage.getItem("SUBSCRIBER");
        return JSON.parse(check);
      }
    },

    clearInStorage() {
      if (process.isClient) {
        localStorage.clear();
        location.reload();
      }
    },

    writeToStorage(preferNotification) {
      if (process.isClient) {
        let timeFrame = moment().format();
        let subcriberData = {
          timeSaved: timeFrame,
          dataSaved: preferNotification,
        };
        localStorage.setItem("SUBSCRIBER", JSON.stringify(subcriberData));
      }
    },

    async sendEmail() {
      const validate = this.$refs.form.validate();
      const payload = {
        name: this.name,
        email: this.email,
      };
      try {
        const response = await api.subscriberEmail(payload);
        if (response) {
          this.dialog = false;
        }
      } catch (error) {
        this.showError = true;
      }
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
  cursor: pointer;
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

#menu_feature_carousel {
  .slick-slider {
    cursor: pointer;
    .slick-dots {
      li {
        button {
          &::before {
            font-size: 26px;
          }
        }
      }
      .slick-active {
        outline: none;
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
            object-fit: contain;
            width: 100%;
            height: 100%;
            border-bottom: 10px solid #82bb31;
          }
        }
      }
    }
    .icons-container {
      background: white;
      height: 71px;
      width: 71px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      img {
        height: 31px !important;
        width: 31px !important;
        border-bottom: none !important;
        object-fit: contain !important;
      }
    }
  }
}

// #slide-container {
//   .slick-slider {
//     .slick-list {
//       .slick-track {
//         display: flex !important;
//         .slick-slide {
//           height: inherit;
//           img {
//             object-fit: cover;
//             width: inherit !important;
//             height: inherit;
//           }
//         }
//       }
//     }
//   }
// }

.slick-track {
  display: flex !important;
}

.slick-slide {
  height: auto;
}

.news-card__ {
  display: flex;
  justify-content: center;
  align-items: center;
}

.news-card__tile {
  width: 74%;
  height: 141px;
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  position: absolute;

  a {
    position: relative;

    .v-card__actions {
      position: absolute;
      top: 6rem;
    }
  }
}

#leftside-newsletter {
  background: radial-gradient(
        1.5em 6.28571em at 1.95em,
        rgba(255, 255, 255, 0) 50%,
        rgba(255, 255, 255, 0.25) 50%,
        rgba(255, 255, 255, 0.25) 55%,
        rgba(255, 255, 255, 0) 55%
      )
      0 0,
    radial-gradient(
        1.5em 6.28571em at -0.45em,
        rgba(255, 255, 255, 0) 50%,
        rgba(255, 255, 255, 0.25) 50%,
        rgba(255, 255, 255, 0.25) 55%,
        rgba(255, 255, 255, 0) 55%
      )
      1.5em 5.5em,
    radial-gradient(
        2.3em 4.57143em at 2.99em,
        rgba(255, 255, 255, 0) 50%,
        rgba(255, 255, 255, 0.3) 50%,
        rgba(255, 255, 255, 0.3) 55%,
        rgba(255, 255, 255, 0) 55%
      )
      0 0,
    radial-gradient(
        2.3em 4.57143em at -0.69em,
        rgba(255, 255, 255, 0) 50%,
        rgba(255, 255, 255, 0.3) 50%,
        rgba(255, 255, 255, 0.3) 55%,
        rgba(255, 255, 255, 0) 55%
      )
      2.3em 4em,
    radial-gradient(
        3.5em 6.28571em at 4.55em,
        rgba(255, 255, 255, 0) 50%,
        rgba(255, 255, 255, 0.25) 50%,
        rgba(255, 255, 255, 0.25) 55%,
        rgba(255, 255, 255, 0) 55%
      )
      0 0,
    radial-gradient(
        3.5em 6.28571em at -1.05em,
        rgba(255, 255, 255, 0) 50%,
        rgba(255, 255, 255, 0.25) 50%,
        rgba(255, 255, 255, 0.25) 55%,
        rgba(255, 255, 255, 0) 55%
      )
      3.5em 5.5em,
    radial-gradient(#15ffa5, #00ced1);
  background-color: mediumspringgreen;
  background-size: 1.5em 11em, 1.5em 11em, 2.3em 8em, 2.3em 8em, 3.5em 11em,
    3.5em 11em, 100% 100%;
  background-repeat: repeat;
  width: 40%;
  display: flex;
  padding: 2px 10px;
  justify-content: center;
  align-items: center;
}
</style>

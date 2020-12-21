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
          <a
            class="container-hero"
            v-for="(item, i) in sliders"
            :key="i"
            to
            @click="openSlider(item.url)"
          >
            <g-image :src="item.image.url" :alt="item.image.name"> </g-image>
          </a>
        </VueSlickCarousel>
      </div>

      <div id="feature_container" class="">
        <div class="flex justify-center align-center">
          <div class="breathing w-full">
            <h1
              class="text-center heading"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              ZKTeco Insight into the Market
            </h1>
            <div class="index-ms text-center my-5">
              <span
                style="font-size: 18px"
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
                          <g-image :src="feature.icon" :alt="feature.title">
                          </g-image>
                        </div>
                        <h2>{{ feature.title }}</h2>
                      </div>
                    </g-link>
                    <g-link :to="feature.url">
                      <g-image
                        class="white--text align-end"
                        height="100px"
                        style="
                          border-bottom: 10px solid #82bb31;
                          object-fit: contain;
                        "
                        :src="feature.src"
                        :alt="feature.title"
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

      <section class="w-full breathing" id="news-container__section">
        <div class="flex justify-center">
          <div class="w-full">
            <h2
              class="heading flex justify-center"
              style="text-align: center"
              data-aos="fade-left"
            >
              News Center
            </h2>
            <div class="news-container">
              <div
                style="height: 400px; margin-top: 40px"
                v-for="article in articles.slice(0, 4)"
                :key="article.id"
              >
                <v-card class="img-hover-zoom--brightness">
                  <div class="image-hover-zoom">
                    <g-image
                      class="white--text align-end hover g-image-grow"
                      height="200px"
                      :src="article.node.image[0].formats.thumbnail.url"
                      :alt="article.node.image[0].name"
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
                            <div
                              class=""
                              style="font-size: 18px; font-weight: 600"
                            >
                              {{ article.node.title }}
                            </div>
                          </v-card-text>

                          <v-card-actions class="absolute bottom-0">
                            <v-btn
                              class="tracking-normal hover capitalize"
                              style="
                                color: #333 !important;
                                font-weight: 400;
                                background-color: transparent !important;
                              "
                              text
                            >
                              Read Article <RightCaret />
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
                <g-image
                  src="../assets/Logo-2.png"
                  alt="Zkteco Logo-2"
                ></g-image>
              </div>
              <div class="rightside-newsletter">
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
                    <v-btn @click="sendEmail" style="width: 100%" color="green"
                      >Subscribe</v-btn
                    >
                  </div>

                  <p style="color: red" v-if="showError">
                    Something went wrong
                  </p>
                </v-form>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <span
                    style="cursor: pointer"
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
          id
          name
          url
          image {
            url
            name
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
import Search from "../components/Vectors/Call";
import RightCaret from "../components/Vectors/RightCaret";
import LogoContainer from "../components/LogosContainer";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import api from "../api";

export default {
  components: {
    LogoContainer,
    Search,
    VueSlickCarousel,
    RightCaret,
  },
  metaInfo: {
    title: "Home",
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
          url: "/product-categories/smart-lock",
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
          url: "/product-categories/cctv",
          icon: require("../assets/Feature/cctv icon.png"),
          src: require("../assets/Feature/cctv background.jpg"),
        },
      ],
    };
  },
  // access control panel,access control,access control and security,access control and security providers in Nigeria,access control barriers,access control board,access control card reader,access control cards,access control companies,access control companies in lagos,access control companies in nigeria,Access Control Devices,access control door,access control door hardware,access control door lock,access control door system,access control equipment,access control equipments,access control exit button,access control facial recognition,access control fingerprint,access control for doors,access control for glass door,access control for glass doors,access control gates,access control glass door,access control hardware,access control hardware in Nigeria,access control in nigeria,access control keypad,access control kit,access control management software,access control non touch,access control non touch solutions,Access Control Panel,ACCESS CONTROL READER,access control security,access control system,access control technology,Access Control Terminal,access control terminal,access control training,access control training in nigeria,access control turnstiles,ALL-IN 1 ACCESS CONTROL,automatic turnstile,biometric access control,biometric access control system,biometric capture software,biometric data capture,biometric device cost,biometric Devices,biometric door lock,biometric door lock biometric,biometric fingerpint scanner price,biometric fingerprint device,biometric id card machine,biometric identification,biometric identification system,Biometric Scanner,Biometric System,Biometric Technology in Nigeria,door locks in lagos,door locks in nigeria,Drop Arm Tripod Standard,Drop Arm Tripod Turnstile,Dual-lane Full Height Turnstile Standard,entry access control gates,Exit Button,Exit Button No Touch,Exit Button push,face recognition access,facial recognition access control,facial recognition biometrics,facial recognition prices,facial recognition system,Fingerprint Access Control,FINGERPRINT ACCESS CONTROL,Fingerprint Access Control Terminal with ADMS,ID,fingerprint reader,fingerprint scanner,Flap Barrier,Full Height Turnstile,Full Height Turnstile Four Arms,gate control,gate turnstile,gate turnstile cost,Hand Held Metal Detector,hardware access control,METAL DETECTOR,Motorized tripod turnstile,Parking Control,Security solutions,Security solutions in nigeria,Security solutions training,security turnstiles prices,Speedgate,Standalone device Parking barrier,Swing Barrier,Time Attendance and Access Control Device,tripod turnstile,turnstile access control,turnstile door,turnstile entrance,turnstile entry system,turnstile for sale,turnstile gate atomated ,turnstile gate,turnstile gate barrier,turnstile gate price,turnstile gate with card reader,turnstile system,turnstiles prices in Nigeria,Walk Through Metal Detector,ZKteco in nigeria,ZKteco product in nigeria,ZKteco products in nigeria,,Touchless devices,Touchless biometrics,FACE RECOGNITION ATTENDANCE KIOSK,FACIAL ATTENDANCE DEVICE,FACIAL RECOGNITION,facial recognition algorithm,facial recognition app,facial recognition attendance system,facial recognition search,facial recognition software,facial recognition technology,palm action recognition,PALM ATTENDANCE DEVICE,palm print recognition advantages and disadvantages,PALM RECOGNITION,palm recognition biometrics,palm recognition devices in Nigeria,palm recognition system,palm recognition using image processing,palm vein recognition algorithm,palm vein recognition biometrics,palm vein recognition system abstract,secure palm vein recognition system,Touchless devices in Nigeria,non-touch door opener,no-touch door opener,no-touch devices,non-touch exit button,non touch machine,no touch machine,smart temperature measurement,fever alarm,fever detection,Indoor Human Disinfection Systems,Sterilizer Disinfection Equipment,Ultrasonic Sterilization Equipments,Mobile Temperature Measurement,,American Deadbolt Bluetooth Lock,American Deadbolt Bluetooth Lock price,American Standard Mortise Hotel Lock,Best smart locks,Bluetooth Lock,Bluetooth Lock in nigeria,door locks in nigeria,door locks prices,Electric Lock,Electric Lock Bracket,Electric Lock Bracket,Electric Lock in Nigeria,Electronic hotel lock,ELOCK KEY,European Standard Mortise Hotel Lock with 5 latches,Fingerprint Lock,Fingerprint Lock in nigeria,Glass door lock,Glass door lock in nigeria,Hotel lock,Hotel lock provider in nigeria,MAGNETIC LOCK,Secure Smart Lock providers in nigeria,Smart lock jiji,smart lock jumia,smart locks brands,smart locks compatible with ,smart locks deadbolt,smart locks digital keys,smart locks door locks,smart locks for doors,smart locks for hotels,smart locks for office,smart locks ghana,Smart locks nigeria,what is a smart locks,,Analog Camera,cctv,cctv camera,cctv camera accessories,cctv camera app,cctv camera bulb,cctv camera cable,cctv camera cable price,cctv camera circuit diagram,cctv camera companies in lagos,cctv camera company in nigeria,cctv camera components,cctv camera connection,cctv camera connection diagram,cctv camera cost,cctv camera images,cctv camera installation,cctv camera jumia,cctv camera meaning,cctv camera pictures,cctv camera price,cctv camera types,cctv connector,cctv control,cctv dealer,cctv dome camera,cctv jiji,CCTV konga,CCTV providers in Nigeria,CCTV Surveillance,Digital Camera,dvr recorder,HD Camera,hidden cctv camera,home security cameras,ip camera,Office security camera,outdoor security camera,security camera,Security Cameras for Banks,wireless cctv,wireless security camera,Zoom IP Camera,,best time and attendance system ,biometric attendance,biometric attendance machine,biometric attendance machine,biometric attendance software,Biometric Attendance system,biometric attendance system,biometric capture device,biometric fingerprint machine,facial recognition attendance system,fingerprint time attendance machine biometric,time & attendance management,time & attendance software,time & attendance solutions,time & attendance system,time and attendance in nigeria,time and attendance biometric system,time and attendance capture system,time and attendance collection system,time and attendance login,time and attendance policy,time and attendance software,time and attendance ghana,time and attendance system benefits,time and attendance system for small business,time and attendance system hardware,time and attendance systems for small businesses,TIME ATTENDANCE DEVICE,TIME ATTENDANCE,time attendance face machine,time attendance face recognition,time attendance form,time attendance free,time attendance free download,time attendance free software,time attendance machine battery,time attendance machine brands,time attendance system ,time attendance system face recognition,time attendance system free,TIME ATTENDANCE TERMINAL,,x ray machine price,x ray machine parts,x ray machine baggage scanner,x ray machine parts and functions,x ray machine for sale,x ray machine price in ghana,x ray machine price in nigeria,x ray machine definition,x ray machine airport,x ray machine function,x ray machine benefits,x ray machine brands,x ray machine buy,x ray machine buy online,x ray machine cost,x ray machine digital,x ray machine digital price,x ray machine for security,x ray machine healthcare,x ray machine components,x ray machine in airport,x ray machine dimensions,x ray machine description,x ray machine equipment,x ray machine in hospital,x ray machine how it works,x ray machine hospital,x ray machine repair jobs,x ray machine installation,x ray machine how to use,baggage scanner,Scanner,boom barrier";
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
  mounted() {
    var dayjs = require("dayjs");
    const areYouSubscribed = this.hasInStorage();
    const hoursCreated = areYouSubscribed
      ? dayjs().diff(dayjs(areYouSubscribed.timeSaved), "hours")
      : null;

    if (areYouSubscribed) {
      if (hoursCreated < 7) {
        return;
      } else {
        this.clearInStorage();
      }
    } else {
      this.timer = setInterval(this.fetchEventsList, 5000);
    }
  },
  methods: {
    openSlider(url) {
      if (process.isClient) {
        window.open(url, "_blank");
      }
    },
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
        var dayjs = require("dayjs");
        let timeFrame = dayjs().format();
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

  h2 {
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
  width: 90%;
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

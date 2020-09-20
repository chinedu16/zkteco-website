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
                </div>
              </div>
              <div id="navFor3">
                <div
                  v-for="image in product.images"
                  :key="image.id"
                  class="mobile-product-image"
                >
                  <g-image :src="image.url" :alt="image.name"> </g-image>
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

  metaInfo: {
    title:
      "access control panel,access control,access control and security,access control and security providers in Nigeria,access control barriers,access control board,access control card reader,access control cards,access control companies,access control companies in lagos,access control companies in nigeria,Access Control Devices,access control door,access control door hardware,access control door lock,access control door system,access control equipment,access control equipments,access control exit button,access control facial recognition,access control fingerprint,access control for doors,access control for glass door,access control for glass doors,access control gates,access control glass door,access control hardware,access control hardware in Nigeria,access control in nigeria,access control keypad,access control kit,access control management software,access control non touch,access control non touch solutions,Access Control Panel,ACCESS CONTROL READER,access control security,access control system,access control technology,Access Control Terminal,access control terminal,access control training,access control training in nigeria,access control turnstiles,ALL-IN 1 ACCESS CONTROL,automatic turnstile,biometric access control,biometric access control system,biometric capture software,biometric data capture,biometric device cost,biometric Devices,biometric door lock,biometric door lock biometric,biometric fingerpint scanner price,biometric fingerprint device,biometric id card machine,biometric identification,biometric identification system,Biometric Scanner,Biometric System,Biometric Technology in Nigeria,door locks in lagos,door locks in nigeria,Drop Arm Tripod Standard,Drop Arm Tripod Turnstile,Dual-lane Full Height Turnstile Standard,entry access control gates,Exit Button,Exit Button No Touch,Exit Button push,face recognition access,facial recognition access control,facial recognition biometrics,facial recognition prices,facial recognition system,Fingerprint Access Control,FINGERPRINT ACCESS CONTROL,Fingerprint Access Control Terminal with ADMS,ID,fingerprint reader,fingerprint scanner,Flap Barrier,Full Height Turnstile,Full Height Turnstile Four Arms,gate control,gate turnstile,gate turnstile cost,Hand Held Metal Detector,hardware access control,METAL DETECTOR,Motorized tripod turnstile,Parking Control,Security solutions,Security solutions in nigeria,Security solutions training,security turnstiles prices,Speedgate,Standalone device Parking barrier,Swing Barrier,Time Attendance and Access Control Device,tripod turnstile,turnstile access control,turnstile door,turnstile entrance,turnstile entry system,turnstile for sale,turnstile gate atomated ,turnstile gate,turnstile gate barrier,turnstile gate price,turnstile gate with card reader,turnstile system,turnstiles prices in Nigeria,Walk Through Metal Detector,ZKteco in nigeria,ZKteco product in nigeria,ZKteco products in nigeria,,Touchless devices,Touchless biometrics,FACE RECOGNITION ATTENDANCE KIOSK,FACIAL ATTENDANCE DEVICE,FACIAL RECOGNITION,facial recognition algorithm,facial recognition app,facial recognition attendance system,facial recognition search,facial recognition software,facial recognition technology,palm action recognition,PALM ATTENDANCE DEVICE,palm print recognition advantages and disadvantages,PALM RECOGNITION,palm recognition biometrics,palm recognition devices in Nigeria,palm recognition system,palm recognition using image processing,palm vein recognition algorithm,palm vein recognition biometrics,palm vein recognition system abstract,secure palm vein recognition system,Touchless devices in Nigeria,non-touch door opener,no-touch door opener,no-touch devices,non-touch exit button,non touch machine,no touch machine,smart temperature measurement,fever alarm,fever detection,Indoor Human Disinfection Systems,Sterilizer Disinfection Equipment,Ultrasonic Sterilization Equipments,Mobile Temperature Measurement,,American Deadbolt Bluetooth Lock,American Deadbolt Bluetooth Lock price,American Standard Mortise Hotel Lock,Best smart locks,Bluetooth Lock,Bluetooth Lock in nigeria,door locks in nigeria,door locks prices,Electric Lock,Electric Lock Bracket,Electric Lock Bracket,Electric Lock in Nigeria,Electronic hotel lock,ELOCK KEY,European Standard Mortise Hotel Lock with 5 latches,Fingerprint Lock,Fingerprint Lock in nigeria,Glass door lock,Glass door lock in nigeria,Hotel lock,Hotel lock provider in nigeria,MAGNETIC LOCK,Secure Smart Lock providers in nigeria,Smart lock jiji,smart lock jumia,smart locks brands,smart locks compatible with ,smart locks deadbolt,smart locks digital keys,smart locks door locks,smart locks for doors,smart locks for hotels,smart locks for office,smart locks ghana,Smart locks nigeria,what is a smart locks,,Analog Camera,cctv,cctv camera,cctv camera accessories,cctv camera app,cctv camera bulb,cctv camera cable,cctv camera cable price,cctv camera circuit diagram,cctv camera companies in lagos,cctv camera company in nigeria,cctv camera components,cctv camera connection,cctv camera connection diagram,cctv camera cost,cctv camera images,cctv camera installation,cctv camera jumia,cctv camera meaning,cctv camera pictures,cctv camera price,cctv camera types,cctv connector,cctv control,cctv dealer,cctv dome camera,cctv jiji,CCTV konga,CCTV providers in Nigeria,CCTV Surveillance,Digital Camera,dvr recorder,HD Camera,hidden cctv camera,home security cameras,ip camera,Office security camera,outdoor security camera,security camera,Security Cameras for Banks,wireless cctv,wireless security camera,Zoom IP Camera,,best time and attendance system ,biometric attendance,biometric attendance machine,biometric attendance machine,biometric attendance software,Biometric Attendance system,biometric attendance system,biometric capture device,biometric fingerprint machine,facial recognition attendance system,fingerprint time attendance machine biometric,time & attendance management,time & attendance software,time & attendance solutions,time & attendance system,time and attendance in nigeria,time and attendance biometric system,time and attendance capture system,time and attendance collection system,time and attendance login,time and attendance policy,time and attendance software,time and attendance ghana,time and attendance system benefits,time and attendance system for small business,time and attendance system hardware,time and attendance systems for small businesses,TIME ATTENDANCE DEVICE,TIME ATTENDANCE,time attendance face machine,time attendance face recognition,time attendance form,time attendance free,time attendance free download,time attendance free software,time attendance machine battery,time attendance machine brands,time attendance system ,time attendance system face recognition,time attendance system free,TIME ATTENDANCE TERMINAL,,x ray machine price,x ray machine parts,x ray machine baggage scanner,x ray machine parts and functions,x ray machine for sale,x ray machine price in ghana,x ray machine price in nigeria,x ray machine definition,x ray machine airport,x ray machine function,x ray machine benefits,x ray machine brands,x ray machine buy,x ray machine buy online,x ray machine cost,x ray machine digital,x ray machine digital price,x ray machine for security,x ray machine healthcare,x ray machine components,x ray machine in airport,x ray machine dimensions,x ray machine description,x ray machine equipment,x ray machine in hospital,x ray machine how it works,x ray machine hospital,x ray machine repair jobs,x ray machine installation,x ray machine how to use,baggage scanner,Scanner,boom barrier",
  },
  
  data() {
    return {
      page: 1,
      url: "",
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

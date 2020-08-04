<template>
  <layout>
    <div class="container px-4 py-5 lg:py-5 lg:px-10">
      <section class="about-zk flex flex-col lg:flex-row justify-between">
        <div class=" lg:w-2/5">
          <div
            class="flex items-center mb-10 mt-10 justify-center w-64 h-16 border-page text-color-zkteco-green font-black text-xl"
          >
            DS5
          </div>
        </div>
      </section>

      <section class="mt-6 mb-16">
        <div class="md:flex justify-between">
          <div class="md:w-3/6 mb-10 md:m-0">
            <g-image
              src="../assets/D2S 1.png"
              width="504"
              height="288"
            ></g-image>
            <swiper class="swiper" :options="swiperOption">
              <swiper-slide v-for="feature in features" :key="feature.id">
                <g-image
                  class="white--text align-end"
                  height="128"
                  :src="feature.src"
                >
                </g-image>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
          <div class="md:w-6/12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              aliquam, enim at laoreet malesuada, arcu ligula hendrerit risus,
              sed iaculis quam justo eget enim. Etiam volutpat faucibus
              vestibulum. Proin semper iaculis felis vitae finibus. Pellentesque
              porttitor vitae erat et imperdiet. Etiam cursus enim tortor, eu
              viverra dolor dictum ut. In tincidunt lobortis lectus rutrum
              pulvinar. Morbi ullamcorper efficitur risus, quis faucibus velit
              mollis a. Sed viverra ac turpis quis cursus. Sed varius, nulla id
              tincidunt euismod, massa purus tempus libero, a posuere ex arcu
              nec diam. Nam tempor ac quam aliquet sollicitudin. Vivamus blandit
              mollis enim vitae ultricies. In hac habitasse platea dictumst.
              Vestibulum vitae ante at tellus imperdiet cursus.
            </p>

            <div class="flex mt-5">
              <g-link><Twitter /></g-link>
              <g-link class="ml-8"><Facebook /></g-link>
              <g-link class="ml-8"><Linkedin /></g-link>
              <g-link class="ml-8 hover"><GooglePlus /></g-link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <v-card>
          <v-tabs background-color="white" color="#82bb31">
            <v-tab>Product Details</v-tab>
            <v-tab>Related Products</v-tab>
            <v-tab>Download</v-tab>

            <v-tab-item :key="1" class="mt-10">
              <v-container fluid>
                <v-row>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    aliquam, enim at laoreet malesuada, arcu ligula hendrerit
                    risus, sed iaculis quam justo eget enim. Etiam volutpat
                    faucibus vestibulum. Proin semper iaculis felis vitae
                    finibus. Pellentesque porttitor vitae erat et imperdiet.
                    Etiam cursus enim tortor, eu viverra dolor dictum ut. In
                    tincidunt lobortis lectus rutrum pulvinar. Morbi ullamcorper
                    efficitur risus, quis faucibus velit mollis a. Sed viverra
                    ac turpis quis cursus. Sed varius, nulla id tincidunt
                    euismod, massa purus tempus libero, a posuere ex arcu nec
                    diam. Nam tempor ac quam aliquet sollicitudin. Vivamus
                    blandit mollis enim vitae ultricies. In hac habitasse platea
                    dictumst. Vestibulum vitae ante at tellus imperdiet cursus.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    aliquam, enim at laoreet malesuada, arcu ligula hendrerit
                    risus, sed iaculis quam justo eget enim. Etiam volutpat
                    faucibus vestibulum. Proin semper iaculis felis vitae
                    finibus. Pellentesque porttitor vitae erat et imperdiet.
                    Etiam cursus enim tortor, eu viverra dolor dictum ut. In
                    tincidunt lobortis lectus rutrum pulvinar. Morbi ullamcorper
                    efficitur risus, quis faucibus velit mollis a. Sed viverra
                    ac turpis quis cursus. Sed varius, nulla id tincidunt
                    euismod, massa purus tempus libero, a posuere ex arcu nec
                    diam. Nam tempor ac quam aliquet sollicitudin. Vivamus
                    blandit mollis enim vitae ultricies. In hac habitasse platea
                    dictumst. Vestibulum vitae ante at tellus imperdiet cursus.
                  </p>
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
                <v-row class="border-b mb-5">
                  <div class="flex w-5/12 justify-between">
										<div class="flex">
											<Pdf/>
											<h4 class="ml-4">DS5 User Manuel</h4>
										</div>
										<div class="flex ml-5">
											<span class="mr-5">1.45MB</span>
											<Download/>
										</div>
									</div>
                </v-row>
								<v-row class="border-b mb-5">
                  <div class="flex w-5/12 justify-between">
										<div class="flex">
											<Pdf/>
											<h4 class="ml-4">DS5 User Manuel</h4>
										</div>
										<div class="flex ml-5">
											<span class="mr-5">1.45MB</span>
											<Download/>
										</div>
									</div>
                </v-row>
								
              </v-container>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </section>
    </div>
  </layout>
</template>

<script>
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
    GooglePlus
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
        fill: yellow!important;
      }
    }
  }
}
</style>

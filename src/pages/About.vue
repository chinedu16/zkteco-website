<template>
  <layout>
    <div class="headline">
      <img
        class="w-full object-cover"
        style="height: 20rem"
        src="../assets/about.us.jpg"
        alt=""
      />
    </div>
    <div class="flex justify-center align-center">
      <div class="breathing ">
        <section class="about-zk flex justify-center " id="about-zk">
          <div class="w-full service justify-between">
            <div class="left-service">
              <div data-aos="fade-right" data-aos-duration="3000">
                <div class="header-title">{{ about.title }}</div>
                <p class="mt-5" v-html="about.description">
                </p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="4000"
              class="right-service"
            >
              <div class="mb-4 justify-end">
                <div class="flex items-end">
                  <span class="small-circle swing bg-zkteco-black mr-4">
                    <div class="flex align-center  flex-col text-center">
                      <span class="font-black text-xl ">3500+</span>
                      Global employees
                    </div>
                  </span>
                  <span class="big-circle swing  bg-zkteco-green"
                    ><div class="flex align-center flex-col text-center">
                      <span class="font-black text-xl ">48+</span>
                      Overseas Branches and Offices
                    </div></span
                  >
                </div>
              </div>
              <div>
                <div class="flex items-end">
                  <span class="big-circle swing bg-zkteco-green mr-4"
                    ><div class="flex align-center flex-col text-center">
                      <span class="font-black text-xl">80%+</span>
                      Employee Expartriates overseas
                    </div></span
                  >
                  <span class="small-circle swing  bg-zkteco-black "
                    ><div class="flex align-center flex-col text-center">
                      <span class="font-black text-xl">100+</span>
                      Global employees
                    </div></span
                  >
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="mission-zk py-10 flex justify-center">
          <div class="w-full max-w-screen-xxl">
            <div class="header-title">
              Our Mission
            </div>

            <div class="mission justify-between mt-10 ">
              <div
                data-aos="fade-right"
                data-aos-duration="3000"
                class="left-mission"
              >
                <g-image
                  class="h-full w-full object-cover"
                  :src="about.our_missioin.image.url"
                >
                </g-image>
              </div>

              <div
                data-aos="fade-left"
                data-aos-duration="3000"
                class="right-mission"
              >
                <p v-html="about.our_missioin.description"></p>
              </div>
            </div>
          </div>
        </section>

        <section class="team-zk pt-10 pb-30 flex">
          <div class="w-full max-w-screen-xxl">
            <div class="header-title mb-10">
              Our Team
            </div>

            <div id="team-carousel" class="logos_carousel-1">
              <VueSlickCarousel v-bind="settings">
                <div class="" v-for="team in about.the_team" :key="team.id">
                  <div
                    class="align-center flex justify-center flex-column team-container__item"
                  >
                    <g-image
                      class="rounded-full"
                      src="../assets/Biola 1.png"
                    ></g-image>
                    <h4 class="text-color-zkteco-green mt-2">
                      {{ team.name || "None" }}
                    </h4>
                    <span>{{ team.position || "None" }}</span>
                  </div>
                </div>
              </VueSlickCarousel>
            </div>
          </div>
        </section>
      </div>
    </div>
  </layout>
</template>

<page-query>
query {
  allStrapiAboutUses {
    edges {
      node {
        id
        title
        description
        infos {
          id
          name
          figure
        }
        our_missioin {
          id
          description
          image {
            url
          }
        }
        the_team {
          id
          name
          position
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
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  data() {
    return {
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        initialSlide: 0,
      },
      nnn: [
        {id: 1},
        {id: 24},
        {id: 566},
        {id: 44},
        {id: 12},
        {id: 1121},
        {id: 132},
        {id: 32},
      ]
    };
  },
  components: {
    VueSlickCarousel,
  },
  computed: {
    about() {
      return this.$page.allStrapiAboutUses.edges[0].node;
    },
  },
};
</script>

<style lang="scss" scoped>
.small-circle {
  color: white;
  width: 165px;
  height: 165px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.big-circle {
  width: 208px;
  height: 208px;
  left: 1162px;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logos_carousel-1 {
  .slick-slider {
    width: 100%;
    .slick-list {
      .slick-track {
        .slick-center {
          width: 200px;
        }
        .slick-slide {
          width: 200px !important;
          .flex {
            // flex-direction: column;
          }
          img {
            // width: unset !important;
            // height: 84px;
            object-fit: cover;
          }
        }
      }
    }
  }
}
</style>

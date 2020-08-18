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
    <div class="container breathing ">
      <section
        class="about-zk flex justify-center "
      >
        <div class="flex w-full max-w-screen-xxl flex-col lg:flex-row py-10 justify-between align-end">
          <div class="lg:w-7/12">
            <div data-aos="fade-right" data-aos-duration="3000">
              <div class="header-title">{{about.title}}</div>
              <p class="mt-5">
                {{about.description}}
              </p>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="4000"
            class=""
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

          <div class="flex justify-between mt-10 flex-col lg:flex-row">
            <div
              data-aos="fade-right"
              data-aos-duration="3000"
              class="lg:w-2/4"
            >
              <g-image
                class="h-full object-cover"
                :src="about.our_missioin.image.url"
              >
              </g-image>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="3000"
              class="mt-10 lg:w-2/4 lg:ml-5 lg:mt-0"
            >
             <p>{{about.our_missioin.description}}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="team-zk py-10 flex justify-center ">
        <div class="w-full max-w-screen-xxl">
          <div class="header-title mb-10">
            Our Team
          </div>
          <div
            class="team-container"
          >
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              class="flex"
              v-for="team in about.the_team"
              :key="team.id"
            >
              <div class="flex team-container__item">
                <g-image
                  class="rounded-full"
                  src="../assets/Biola 1.png"
                ></g-image>
                <h4 class="text-color-zkteco-green mt-2">{{team.name || "None"}}</h4>
                <span>{{team.position || "None"}}</span>
              </div>
            </div>

          </div>
        </div>
      </section>
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
export default {
  computed: {
    about () {
      return this.$page.allStrapiAboutUses.edges[0].node
    }
  }
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

.team-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  .team-container__item {
    flex-direction: column;
  }
  
}
</style>

<template>
  <layout>
    <div class="headline">
      <img
        class="w-full object-cover"
        style="height: 20rem"
        src="../assets/team-top-back.jpg"
        alt=""
      />
    </div>
    <div class="flex justify-center align-center">
      <div class="breathing ">
				<section class="breadcrumbs pt-4 flex">
          <div class="position clearfix caseList-nav">
            <div class="fl">
              <a href="/">Home Page</a> &gt; <a href="/">Team</a>
            </div>
          </div>
        </section>
        <section class="team-zk pt-10 pb-30 flex">
          <div class="w-full max-w-screen-xxl">
            <div id="team-carousel" class="logos_carousel-1">
              <div class="mobile-team" v-for="team in teams" :key="team.id">
                <div class="department-name">
                  <h2 class="">
                    {{ team.node.titlt }}
                  </h2>
                </div>
                <div class="align-center team-container__item">
                  <div
                    class="align-center flex justify-center flex-column"
                    v-for="team in team.node.teams"
                    :key="team.id"
                  >
                    <g-image
                      class="rounded-full"
                      :src="
                        team.image
                          ? team.image.url
                          : 'https://storage.googleapis.com/zkteco_website_bucket/Biola_1_5f84b3566c/Biola-1.png_Biola_1_5f84b3566c.png'
                      "
                    ></g-image>
                    <h2 class="text-color-zkteco-green mt-2">
                      {{ team.name || "None" }}
                    </h2>
                    <span>{{ team.position || "None" }}</span>
                  </div>
                </div>
              </div>
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
      }
    }
  }
	allStrapiTeams {
    edges {
      node {
        id
        titlt
        teams {
          id
          image {
            url
          }
          position
          name
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  data() {
    return {};
  },
  metaInfo: {
    title:
      "ZkTeco west africa team",
  },
  computed: {
    about() {
      return this.$page.allStrapiAboutUses.edges[0].node;
    },
    teams() {
      return this.$page.allStrapiTeams.edges;
    },
  },
};
</script>

<style lang="scss">
@import "../styles/base/_variable.scss";
@import "../styles/base/mixins";

#team-carousel {
  .mobile-team {
    margin: 4rem 0px;
    .department-name {
      margin-bottom: 3rem;
      h2 {
        font-weight: bolder;
      }
    }
    img {
      width: 200px;
      height: 200px;
			object-fit: cover;
			border-style: solid;
			border-width: 3px 3px 3px 3px;
			border-color: #7CBD27;
    }
  }
}

.team-container__item {
	display: grid;
	grid-gap: 40px;
  @include mq(md) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 40px;
    column-gap: 20px;
  }
}
</style>

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
              <a href="/">Home Page</a> &gt; <a href="/teams">Team</a>
            </div>
          </div>
        </section>
        <section class="team-zk pt-10 pb-30 flex">
          <div class="w-full max-w-screen-xxl">
            <div id="team-carousel" class="logos_carousel-1">
              <div class="mobile-team" v-for="item in teams" :key="item.id">
                <div class="department-name">
                  <h2>
                    {{ item.node.titlt }}
                  </h2>
                </div>
                <div class="align-center team-container__item">
                  <div
                    class="align-center flex justify-center flex-column"
                    v-for="singleTeam in item.node.teams"
                    :key="singleTeam.id"
                  >
                    <g-image
                      class="rounded-full"
                      :src="singleTeam.image.url"
                    ></g-image>
                    <h2 class="text-color-zkteco-green mt-2" style="font-size: 18px;">
                      {{ singleTeam.name || "None" }}
                    </h2>
                    <span style="font-size: 16px;" >{{ singleTeam.position || "None" }}</span>
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
    title: "ZkTeco west africa team",
  },
  computed: {
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
      border-color: #7cbd27;
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

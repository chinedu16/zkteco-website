<template>
  <layout>
    <div class="headline">
      <img
        class="w-full object-cover"
        style="height: 20rem"
        src="../assets/about-us-1.jpg"
        alt=""
      />
    </div>
    <div class="flex justify-center align-center">
      <div class="breathing ">
        <section class="breadcrumbs pt-4 flex">
          <div class="position clearfix caseList-nav">
            <div class="fl">
              <a href="/">Home Page</a> &gt; <a href="/">About Us</a>
            </div>
          </div>
        </section>

        <section
          class=" pt-10 pb-30 about-zk flex justify-center"
          id="about-zk"
        >
          <div class="culture w-full max-w-screen-xxl">
            <p class="culture-title">Enterprise Vision</p>
            <p class="culture-text">
              <span>
                We regard values as seeds, culture as trees and state of mind as
                soil, without mind there is no seed, without core value there is
                no culture.
              </span>
            </p>
            <div class="culture-box">
              <div class="culture-content">
                <g-image src="../assets/responsibility.jpg"></g-image>
                <div class="text">
                  <span
                    >Responsibility is a major indicator for ZKTeco to measure
                    individual spiritual quality, which penetrates our mutual
                    commitment to customers, partners, employees, shareholders
                    and other stakeholders in social relations.</span
                  >
                </div>
              </div>
              <div class="culture-content">
                <g-image src="../assets/integrity.jpg"></g-image>
                <div class="text">
                  <span
                    >As for culture and self-discipline of ZKTeco, integrity is
                    the most important guidance of common values and the
                    cornerstone of all virtues. Integrity reminds us to insist
                    on correct orientation, dare to</span
                  >
                </div>
              </div>
              <div class="culture-content">
                <g-image src="../assets/pragmatic.jpg"></g-image>
                <div class="text">
                  <span
                    >Being practical-minded means to be down-to-earth, practical
                    and realistic. Fundamentally, it is to proceed from reality,
                    boldly upholding truth and science and dauntlessly
                    correcting errors.</span
                  >
                </div>
              </div>
              <div class="culture-content">
                <g-image src="../assets/excellence.jpg"></g-image>
                <div class="text">
                  <span
                    >In ZKTeco, excellence means being a world-class enterprise
                    and providing top-standard innovated products and services.
                    The process of being a sustainable excellent enterprise with
                    unremitting efforts and</span
                  >
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          class=" pt-10 pb-30 about-zk flex justify-center"
          id="about-zk"
        >
          <div class="culture w-full max-w-screen-xxl">
            <p class="culture-title">Enterprise Mission</p>
            <p class="culture-text">
              <span>
                ZKTeco's goal is to share our highly developed, revolutionary
                biometric technology to benefit businesses and people.
              </span>
            </p>

            <div class="culture-top">
              <g-image src="../assets/office.jpg"></g-image>
            </div>
          </div>
        </section>

        <section
          class=" pt-10 pb-10 about-zk flex justify-center"
          id="about-zk"
        >
          <div class="culture w-full max-w-screen-xxl">
            <p class="culture-title">Enterprise Vision</p>
            <p class="culture-text-vision">
              <span>
                <div class="list">
                  <span>Brand</span> : To become the world's recognized leader
                  in outstanding innovation and pioneering technologies in
                  security and time management solutions.
                </div>
                <div class="list">
                  <span>Partners</span> : Cultivate a winning network of
                  partners, maximize profit margins for our partners, provide
                  richer solutions and create mutual enduring value.
                </div>

                <div class="list">
                  <span>Efficiency</span>: Be a highly effective, fast-moving
                  and nimble organization. Provide effective solutions that help
                  organizations improve management efficiencies.
                </div>
                <div class="list">
                  <span>Social Responsibility</span>: As a leading, worldwide
                  solutions provider in the industry, it is our duty to give
                  back to society. We will do our part to support worthy causes
                  that contribute to a peaceful, environmentally sound and a
                  sustainable planet.
                </div>
                <div class="list">
                  <span>Responsibility</span>: Be mindful of our commitment to
                  our customers and partners at all times. This means
                  consistently responding to the needs of our customers and
                  partners in a timely, courteous, professional and
                  understanding manner.
                </div>
              </span>
            </p>
            <div class="culture-active clearfix">
              <g-image src="../assets/podium.jpg"></g-image>
              <g-image src="../assets/bike.jpg"></g-image>
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
    title: "About ZKTeco west africa",
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

.culture {
  .culture-title {
    font-size: 30px;
    color: #484748;
    margin: 50px 0 30px 0;
    text-align: center;
  }
  .culture-text {
    text-align: center;
  }

  .culture-active {
    display: flex;
    margin-top: 3rem;
    img {
      width: 50%;
      object-fit: cover;
    }
  }

  .culture-top {
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .culture-text-vision {
    .list {
      margin-bottom: 1rem;
      span {
        color: #99bb00;
        font-size: 18px;
      }
    }
  }
}

.culture-box {
  @include mq(md) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }

  .culture-content {
    margin-bottom: 3rem;
    @include mq(md) {
      float: left;
      position: relative;
      max-width: 700px;
      max-height: 300px;
      margin: 3px;
      margin-bottom: unset;
    }
    img {
      // display: none;
      width: 100%;
    }
    .text {
      @include mq(md) {
        width: 90%;
        position: absolute;
        top: 44%;
        left: 5%;
        font-size: 18px;
        color: #fff;
        line-height: 20px;
        height: 100px;
        overflow: hidden;
        text-align: left;
      }

      span {
        @include mq(md) {
          text-align: justify;
          font-size: 18px;
          color: #ffffff;
          line-height: 2;
        }
      }
    }
  }
}

#team-carousel {
  .big-team {
    display: none;
    @include mq(md) {
      display: block;
    }
  }

  .mobile-team {
    display: block;
    @include mq(md) {
      display: none;
    }
    .team-container__item {
      margin-bottom: 40px;
      @include mq(md) {
        margin-bottom: unset;
      }
    }
    img {
      width: 200px;
      height: 200px;
      object-fit: cover;
    }
  }
  .slick-slider {
    width: 100%;
    .slick-list {
      .slick-track {
        width: unset !important;
        .slick-slide {
          margin-left: 2rem !important;
          img {
            object-fit: cover;
            width: 100%;
          }
        }
      }
    }
  }
}
</style>

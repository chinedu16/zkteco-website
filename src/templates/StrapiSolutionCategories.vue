<template>
  <layout>
    <div class="allproduct-headline-image headline" style="height: 300px;">
      <div class="footer-image-overlay"></div>
    </div>
    <div class="flex align-center" id="solutions">
      <div class="breathing w-full">
        <section class="breadcrumbs pt-4 flex">
          <div class="position clearfix caseList-nav">
            <div class="fl"><a href="/">Home Page</a> &gt; Solution</div>
          </div>
        </section>

        <div class="solution_title pt-10">
          <h2>ZKTeco Solutions</h2>
          <p v-if="allSolutionCategories.length > 0">
            <span
              >ZKTeco has developed professional industry solutions for
              different industries' properties and scale</span
            >
          </p>
          <p></p>
        </div>

        <div class="section_cards" v-if="allSolutionCategories">
          <div
            class="section_card"
            v-for="solution in allSolutionCategories"
            :key="solution.id"
          >
            <div class="container">
              <div class="overlay"></div>
              <g-image :src="solution.image[0].url" alt="" />
              <div class="text">
                <h3>{{ solution.title }}</h3>
                <div class="cases_content"></div>
                <g-link :to="`/solution-details/${solution.slug}`"
                  >Learn More</g-link
                >
              </div>
            </div>
          </div>
        </div>
        <div v-if="allSolutionCategories.length < 0">
            <h2>No Solution</h2>
        </div>
      </div>
    </div>
  </layout>
</template>

<page-query>
query Solutions($path: String!) {
  strapiSolutionCategories (path: $path) {
    id
    slug
    name
    solutions {
          id
          slug
          title
          image {
            url
          }
        }
  }
}
</page-query>

<script>
import Office from "../components/Vectors/Office";
import Message from "../components/Vectors/Message";
import Call from "../components/Vectors/Call";
import EmptyState from "../components/Vectors/EmptyState";
import ProductSidebar from "../components/ProductCategoriesSidebar";
import moment from "moment";
export default {
  components: {
    Office,
    Message,
    Call,
    ProductSidebar,
    EmptyState,
  },
  data() {
    return {};
  },
  computed: {
    allSolutionCategories() {
      return this.$page.strapiSolutionCategories.solutions;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/base/_variable.scss";
@import "../styles/base/mixins";
.allproduct-headline-image {
  background-image: url("../assets/solution-image.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
  z-index: 1;
}

.v-btn {
  color: #82bb31 !important;
}

.v-application .primary--text {
  color: #82bb31 !important;
}

#solutions {
  margin-bottom: 4rem;
  .solution_title {
    text-align: center;
    p {
      margin: 25px 0 40px;
    }
  }

  .section_cards {
    @include mq(md) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
    }
    @include mq(lg) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 20px;
    }

    .section_card {
      height: 389px;
      cursor: pointer;
      &:hover {
        .container {
          .overlay {
            opacity: 1;
          }
          .text {
            a {
              opacity: 1;
            }
          }
        }
      }
      .container {
        position: relative;
        height: 100%;
        color: white;

        .overlay {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100%;
          width: 100%;
          opacity: 0;
          transition: 0.5s ease;
          background: rgba(0, 0, 0, 0.5);
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .text {
          top: 0px;
          padding: 40px 20px;
          padding-top: 110px;
          position: absolute;
          z-index: 1;
          height: 100%;

          .cases_content {
            height: 88px;
            overflow: hidden;
            line-height: 22px !important;
            font-size: 18px !important;
            margin-top: 10px !important;
            text-align: left !important;
            font-weight: normal !important;
            font-style: normal !important;
            font-size: 16px !important;
          }

          a {
            font-size: 16px;
            display: inline-block;
            width: 120px;
            height: 40px;
            background: #78bc27;
            text-align: center;
            color: #fff;
            transition: 0.5s ease;
            opacity: 0;
            line-height: 40px;
            margin-top: 20px;
          }
        }
      }
    }
  }
}
</style>

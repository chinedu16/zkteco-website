<template>
  <layout>
    <div class="allproduct-headline-image headline" style="height: 300px;">
      <div class="footer-image-overlay"></div>
    </div>
    <div class="flex align-center" id="solutions">
      <div class="breathing w-full">
        <section class="breadcrumbs pt-4 flex">
          <div class="position clearfix caseList-nav">
            <div class="fl">
              <a href="/">Home Page</a> &gt; <a href="/">Solution</a> &gt;
              {{ solution.title }}
            </div>
          </div>
        </section>

        <div class="solution_title pt-10">
          <h2>{{ solution.title }}</h2>
          <p></p>
        </div>

        <div class="educational_details">
          <div class="description">
            <p class="desc" v-html="solution.description"></p>
            <g-image :src="solution.image[0].url" :alt="solution.title" />
          </div>
          <div id="content" v-html="solution.content"></div>
        </div>
      </div>
    </div>
  </layout>
</template>

<page-query>
query Solutions($path: String!) {
  strapiSolutions (path: $path) {
    id
    title
    slug
    description
    image {
      url
      name
    }
    content
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
    return {
      page: 1,
      todayDate: new Date(),
      theTime: false,
    };
  },
  computed: {
    solution() {
      return this.$page.strapiSolutions;
    },
  },
};
</script>

<style lang="scss">
@import "../styles/base/_variable.scss";
@import "../styles/base/mixins";
.allproduct-headline-image {
  background-image: url("../assets/server.jpg");
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

  .educational_details {
    width: 100%;
    height: auto;
    box-shadow: 0px 0px 7px 3px #f4f4f4;
    padding: 30px;
    .description {
      @include mq(md) {
        display: flex;
      }
      margin-bottom: 20px;
      align-items: flex-start;

      .desc {
        @include mq(md) {
          width: 50%;
        }
      }

      img {
        width: 100%;
        @include mq(md) {
          width: 50%;
        }
      }
    }
  }
}

#content {
  img {
    width: 100%;
  }
  
}
</style>

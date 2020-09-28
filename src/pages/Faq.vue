<template>
  <layout>
    <div class="allproduct-headline-image headline" style="height: 300px;">
      <div class="footer-image-overlay"></div>
    </div>
    <div class="flex align-center" id="faq">
      <div class="breathing w-full">
        <section class="breadcrumbs pt-4 flex">
          <div class="position clearfix caseList-nav">
            <div class="fl">
              <a href="/">Home Page</a> &gt;  <g-link to="/after-sale">After Sales Service</g-link> &gt; FAQs
            </div>
          </div>
        </section>

        <div class="download_search pt-10">
          <input
            type="text"
            v-model="search"
            placeholder="Please Input Keyword "
            class="search-input w-full"
          />
          <p></p>
        </div>
        <div class="">
          <div class="faq-item mt-10" v-for="faq in filteredList" :key="faq.id">
            <h2 style="text-transform: capitalize; color: #78bc27;" class="mb-4">{{faq.node.name}}</h2>
            <v-expansion-panels>
              <v-expansion-panel v-for="(item, i) in faq.node.content" :key="i">
                <v-expansion-panel-header style="font-weight: 500;font-size: 1.1rem;">{{item.title}}</v-expansion-panel-header>
                <v-expansion-panel-content style="padding: 16px 24px;background: #f8fcf5;" v-html="item.description">
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </div>
      </div>
    </div>
  </layout>
</template>

<static-query>
query {
    allStrapiFaqs {
    edges {
      node{
        id
        name
        content {
          id
          title
          description
        }
      }
    }
  }
}
</static-query>

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

  metaInfo: {
    title:
      "FAQs ZKTeco West Africa",
  },

  data() {
    return {
       search: '',
    };
  },
  computed: {
    faqs() {
      return this.$static.allStrapiFaqs.edges;
    },
    filteredList() {
      return this.$static.allStrapiFaqs.edges.filter(res => {
        return res.node.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/base/_variable.scss";
@import "../styles/base/mixins";
.allproduct-headline-image {
  background-image: url("../assets/faq.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
  z-index: 1;
}

#faq {
  margin-bottom: 4rem;
  .download_search {
    input {
      width: 100%;
      color: inherit;

      @include mq(md) {
        width: 30%;
      }
    }
  }
}
</style>

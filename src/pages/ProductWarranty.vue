<template>
  <layout>
    <div class="allproduct-headline-image headline" style="height: 300px;">
      <div class="footer-image-overlay"></div>
    </div>
    <div class="flex align-center" id="warranty">
      <div class="breathing w-full">
        <section class="breadcrumbs pt-4 flex">
          <div class="position clearfix caseList-nav">
            <div class="fl">
              <a href="/">Home Page</a> &gt;  <g-link to="/after-sale">After Sales Service</g-link> &gt;
              Product Warranty Policy
            </div>
          </div>
        </section>

        <div class="pt-10 pb-10">
          <div
            class="guarantee-box"
            v-for="warranty in warranties"
            :key="warranty.node.id"
          >
            <h2>{{ warranty.node.name }}</h2>

            <p class="text" v-html="warranty.node.content"></p>
          </div>
        </div>
      </div>
    </div>
  </layout>
</template>

<static-query>
query {
	allStrapiWarrantyPolicies {
    edges {
      node {
        id
        name
        content
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
      "Product Warranty",
  },

  data() {
    return {
      page: 1,
      todayDate: new Date(),
      theTime: false,
    };
  },
  computed: {
    warranties() {
      return this.$static.allStrapiWarrantyPolicies.edges;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/base/_variable.scss";
@import "../styles/base/mixins";
.allproduct-headline-image {
  background-image: url("../assets/aftersales.jpg");
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

#warranty {
  margin-bottom: 4rem;

  .guarantee-box {
    padding: 15px;
    border: 1px solid #e6e6e6;
    margin-top: 15px;
    @include mq(md) {
      padding: 50px;
    }
    h2 {
      text-align: center;
    }
    p {
      margin-top: 4rem;
    }
  }
}
</style>

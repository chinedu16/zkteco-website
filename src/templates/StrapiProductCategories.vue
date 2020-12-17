<template>
  <layout>
    <div class="allproduct-headline-image headline" style="height: 28rem;">
      <div class="footer-image-overlay"></div>
      <div class="overlay">
        <div class="page-header_wrap">
          <div class="page-heading">
            <h1>{{productCategory.name}}</h1>
          </div>
          <ul class="coustom-breadcrumb">
            <li><g-link to="/">Home</g-link></li> |
            <li>Products</li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="flex justify-center align-center w-full"
      style="background: #f5f5f5;"
    >
      <div class=" breathing" style="background: #f5f5f5;">
        <section class=" pt-4 flex justify-center">
          <div class="pro-search  w-full max-w-screen-xxl clearfix">
            <g-image class="w-full" src="../assets/roadmap.png" alt="" />
          </div>
        </section>

        <section class="flex pb-12 pt-10 justify-center">
          <div class="product-cat__container w-full ">
            <ProductSidebar
              :toggleComponent="productCategory.slug"
              :toggle="true"
            />
            <div class="rightside-product">
              <div
                v-if="productAmount < 1"
                class="h-full flex justify-center align-center"
              >
                <div>
                  <h3 class="mb-10">No Product for {{ productCategory.name }}</h3>
                  <EmptyState />
                </div>
              </div>
              <div>
                <div class="rightside-product__item">
                  <div
                    class="flex single__item"
                    v-for="product in allProduct"
                    :key="product.id"
                  >
                    <div class="flex product-container relative">
                      <div class="h-32 product-image-container">
                        <g-image
                          class="w-full h-full object-contain"
                          width="201"
                          height="105"
                          :src="
                            product.images[0]
                              ? product.images[0].url
                              : '../assets/Logo-2.png'
                          "
                          :alt="product.images[0]
                              ? product.images[0].url
                              : product.name
                          "
                        >
                        </g-image>
                      </div>
                      <span
                        v-if="dateWithinWeek(product.updated_at)"
                        class="label-new"
                        ><g-image src="../assets/new.png" alt="BioTime 8.0"
                      /></span>
                      <g-link :to="`/product/${product.slug}`" style="margin-bottom: 10px; font-size: 23px; font-weight: bolder;letter-spacing: 0px;color: #78bc27!important;">
                        {{ product.name }}
                      </g-link>
                      <g-link class="more" :to="`/product/${product.slug}`"
                        >Read Details</g-link
                      >
                    </div>
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
query ProductCategories($path: String!) {
  strapiProductCategories (path: $path) {
    id
    name
    slug
    products {
      id
      name
      created_at
      updated_at
      slug
      images {
        url
      }
    }
  }
  allStrapiProducts(sortBy: "created_at", order: DESC) {
    edges {
      node {
        id
        name
        slug
        updated_at
        created_at
        images {
          url
        }
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

export default {
  metaInfo() {
    return {
      title: 'Index',
      titleTemplate: this.$page.strapiProductCategories.name,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.strapiProductCategories.name + "ZKTeco product categories",
        }
      ]
    }
  },
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
    };
  },
  methods: {
    dateWithinWeek(date) {
      var dayjs = require('dayjs')
      const checkDateWithinWeek = dayjs(date).isSame(new Date(), "week");
      return checkDateWithinWeek;
    },
  },
  computed: {
    productCategory() {
      return this.$page.strapiProductCategories;
    },
    allProduct() {
      return this.$page.strapiProductCategories.products;
    },
    productAmount() {
      return this.$page.strapiProductCategories.products.length;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/base/_variable.scss";
@import "../styles/base/mixins";
.allproduct-headline-image {
  background-image: url("../assets/allProductImage.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
  z-index: 1;
}
.product-container {
  @include mq(md) {
    border: none;
  }
  width: 100%;
  border-radius: 5px;
  border: 1px solid #78bc27;
  height: 260px;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  transition: all 0.5s;
  padding: 20px;
  height: 309px;

  &:hover {
    box-shadow: 0 0 15px 0px #ddd;

    .more {
      transition: all 0.5s;
      color: #fff !important;
      background: #78bc27;
      border: 1px solid #78bc27;
    }
  }
}

.v-btn {
  color: #82bb31 !important;
}
.more {
  border: 1px solid #e6e6e6;
  line-height: 28px;
  padding: 0px 8px;
}
.v-list .v-list-item--active,
.v-list .v-list-item--active .v-icon {
  color: #82bb31 !important;
}

.v-application .primary--text {
  color: #82bb31 !important;
}

.label-new {
  position: absolute;
  top: 21px;
  left: 20px;
}

.rightside-product {
  background: white;
}

@media (min-width: 640px) {
  .rightside-product {
    width: 70%;
    background: white;
  }
}

.product-image-container {
  width: 211px;
  height: 151px;

  img {
    object-fit: contain;
  }
}

.product-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  a {
    border-radius: 5px;
    border: 1px solid #edeeed;
    h2 {
      text-align: center;
    }
  }
}
</style>

<template>
  <layout>
    <div class="product-headline-image headline" style="height: 28rem;">
      <div class="footer-image-overlay"></div>
    </div>
    <div
      class="flex justify-center align-center w-full"
      style="background: #f5f5f5;"
    >
      <div class=" breathing" id="" style="background: #f5f5f5;">
        <section class=" pt-4 flex justify-center">
          <div class="pro-search  w-full max-w-screen-xxl clearfix">
            <g-image class="w-full" src="../assets/roadmap.png" alt="" />
          </div>
        </section>
        <section class="flex pb-12 pt-10 justify-center">
          <div class="product-cat__container w-full ">
            <ProductSidebar :toggleComponent="productCategory.slug" />
            <div class="rightside-product">
              <div>
                <div class="rightside-product__item">
                  <div
                    class="flex"
                    v-for="product in productCategory.products"
                    :key="product.id"
                  >
                    <div class="flex product-container relative">
                      <div class="h-32 product-image-container">
                        <g-image
                          class="w-full h-full object-contain"
                          width="201"
                          height="105"
                          :src="product.images[0] ? product.images[0].url : '../assets/Logo-2.png'"
                          :alt="product.images[0] ? product.images[0].name : product.name"
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
                        >Details</g-link
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
query SubProductCategories($path: String!) {
  strapiSubProductCategories (path: $path) {
    id
    name
    slug
    products{
      id
      name
      slug
      images {
        url
        name
      }
    }
  }
}
</page-query>

<script>
import Office from "../components/Vectors/Office";
import Message from "../components/Vectors/Message";
import Call from "../components/Vectors/Call";
import ProductSidebar from "../components/ProductCategoriesSidebar";
export default {
  components: {
    Office,
    Message,
    Call,
    ProductSidebar,
  },

  data() {
    return {
      page: 1,
      todayDate: new Date(),
      products: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
      ],
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
      return this.$page.strapiSubProductCategories;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/base/_variable.scss";
@import "../styles/base/mixins";
.product-headline-image {
  background-image: url("../assets/productlist.jpg");
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
</style>

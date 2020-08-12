<template>
  <layout>
    <div class="product-headline-image headline" style="height: 28rem;">
      <div class="footer-image-overlay"></div>
    </div>
    <div
      class="container px-4 py-5 lg:py-5 lg:px-10"
      style="background: #f5f5f5;"
    >
      <section class="flex justify-center">
        <div class="pro-search  w-full max-w-screen-xxl clearfix">
          <img src="../assets/roadmap.png" alt="" />
        </div>
      </section>
      <section class="mt-6 flex justify-center">
        <div class="md:flex w-full max-w-screen-xxl justify-between">
          <ProductSidebar toggle="true" />
          <div class="bg-white rightside-product">
            <div>
              <div
                class="flex mb-10 flex-col md:grid md:grid-cols-3 lg:grid-cols-3"
              >
                <div
                  class="flex justify-center md:m-0"
                  v-for="product in productCategory.products"
                  :key="product.id"
                >
                  <div
                    class="flex product-container relative w-full flex-col text-center"
                  >
                    <div class="h-32">
                      <g-image
                        class="w-full h-full object-contain"
                        width="201"
                        
                        height="105"
                        :src="product.images[0].url"
                      >
                      </g-image>
                    </div>
                    <span class="label-new"
                      ><img src="../assets/new.png" alt="BioTime 8.0"
                    /></span>
                    <g-link :to="`/product/${product.slug}`">
                      <v-btn
                        class="mt-8"
                        style="margin-bottom: 10px; font-size: 23px; font-weight: bolder;letter-spacing: 0px;color: #78bc27!important;"
                        >{{ product.name }}</v-btn
                      >
                    </g-link>
                    <g-link class="more" :to="`/product/${product.slug}`"
                      >Learn more</g-link
                    >
                  </div>
                </div>
              </div>
              <!-- <div class="text-center">
                <v-pagination
                  color="#82BB31"
                  circle
                  v-model="page"
                  :length="5"
                ></v-pagination>
              </div> -->
            </div>
          </div>
        </div>
      </section>
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
        slug
        name
        description
        product_details
        slug
        images {
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
  computed: {
    productCategory() {
      return this.$page.strapiProductCategories;
    },
  },
};
</script>

<style lang="scss" scoped>
.product-headline-image {
  background-image: url("../assets/productlist.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
  z-index: 1;
}
.product-container {
  // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  height: 260px;
  display: flex !important;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  transition: all 0.5s;
  padding: 40px;
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
  }
}
</style>

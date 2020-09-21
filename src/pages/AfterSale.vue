<template>
  <layout>
    <div class="allproduct-headline-image headline" style="height: 300px;">
      <div class="footer-image-overlay"></div>
    </div>
    <div class="flex align-center" id="aftersales">
      <div class="breathing w-full">
        <section class="breadcrumbs pt-4 flex">
          <div class="position clearfix caseList-nav">
            <div class="fl">
              <a href="/">Home Page</a> &gt; <a href="/">Support</a> &gt; After
              Sales Service
            </div>
          </div>
        </section>

        <div class="solution_title pt-10 pb-10">
          <h2>After Sales Services</h2>
        </div>

        <div class="after_sales">
          <div class="after_sales_cat">
            <div class="after_card">
              <div class="after-sales-animate">
                <Policy />
              </div>
              <g-link class="txt textHidden" to="/product-warranty">
                Warranty Policy
              </g-link>
            </div>
            <div class="after_card">
              <div class="after-sales-animate">
                <Faq />
              </div>

              <g-link class="txt textHidden" to="/faq">
                FAQs
              </g-link>
            </div>
            <div class="after_card">
              <div class="after-sales-animate">
                <Counterfeit />
              </div>
              <g-link class="txt textHidden" to="/anti-counterfeiting">
                Anti-counterfeiting Enquiry
              </g-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import Policy from "../components/Vectors/Policy";
import Counterfeit from "../components/Vectors/Counterfeit";
import Faq from "../components/Vectors/Faq";
export default {
  components: {
    Policy,
    Counterfeit,
    Faq,
  },
  metaInfo: {
    title: "After Sales Service",
  },
  data() {
    return {};
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

#aftersales {
  margin-bottom: 4rem;

  .after_sales {
    .after_sales_cat {
      display: grid;
      grid-gap: 60px;

      @include mq(md) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;
      }
      .after_card {
        display: flex;
        flex-direction: column;
        border: 1px solid #eee;
        padding: 10px;
        cursor: pointer;
        &:hover {
          a {
            color: #78bc27 !important;
            transition: 0.5s ease;
          }
        }
        img {
          height: 350px;
          object-fit: cover;
          width: 100%;
        }
        a {
          font-size: 16px;
          width: 100%;
          text-align: center;
          line-height: 50px;
          transition: all 0.8s;
          font-weight: 600;
        }
      }
    }
  }
}
</style>

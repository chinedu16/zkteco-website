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
          <div class="txt">
            <p style="text-align:justify;">
              <span style="font-size:14px;font-family:Tahoma;"> </span>
            </p>
            <p class="MsoNormal">
              <span style="font-family:Tahoma;font-size:16px;line-height:2;"
                >Global learning service to enhance your skills and industry
                expertise.</span
              ><span style="font-family:宋体;font-size:10.5000pt;"></span>
            </p>
            <p class="MsoNormal">
              <span style="font-family:Tahoma;font-size:16px;line-height:2;"
                >Collect your course requirements to establish a complete
                training system.</span
              ><span style="font-family:宋体;font-size:10.5000pt;"></span>
            </p>
            <p class="MsoNormal">
              <span style="font-family:Tahoma;font-size:16px;line-height:2;"
                >Ready for more? Push the envelope to increase your knowledge,
                or be in the path to become a ZKTeco Certified
                Professional.</span
              ><span style="font-family:宋体;font-size:10.5000pt;"></span>
            </p>

            <p></p>
            <p style="text-align:justify;">
              <span
                style="line-height:2;font-size:14px;font-family:Tahoma;"
              ></span>
            </p>
          </div>
        </div>

        <div class="after_sales">
          <div class="after_sales_cat">
            <div class="after_card">
              <g-image src="../assets/policy-card.jpg"></g-image>
              <g-link class="txt textHidden" to="/product-warranty">
                Warranty Policy
              </g-link>
            </div>
            <div class="after_card">
              <g-image src="../assets/faqs-card.jpg"></g-image>
               <g-link class="txt textHidden" to="/faq">
                FAQs
              </g-link>
            </div>
            <div class="after_card">
              <g-image src="../assets/anticounterfiet.jpg"></g-image>
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
      "After Sales Service",
  },
  data() {
    return {
      page: 1,
      todayDate: new Date(),
      theTime: false,
    };
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
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 20px;
      .after_card {
        &:hover {
          a {
            color: #78bc27!important;
            transition: 0.5s ease;
          }
        }
        img {
          height: 350px;
          object-fit: cover;
          width: 100%;
        }
        a {
          font-size: 18px;
          width: 100%;
          text-align: center;
          line-height: 50px;
          transition: all 0.8s;
        }
      }
    }
  }
}
</style>

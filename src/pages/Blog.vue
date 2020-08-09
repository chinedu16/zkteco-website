<template>
  <layout>
    <!-- <div class="headline relative">
      <img
        class="w-full object-cover h-64"
        src="../assets/newsHeadline.jpg"
        alt=""
      />

      <h1 class="absolute">BLOG</h1>
    </div> -->
    <div class="footer-image headline h-64">
      <div class="footer-image-overlay">
        <div class="flex h-full w-full align-center">
          <div class="footer-icon-container w-full">
            <h2 class="mb-10">BLOG</h2>
          </div>
        </div>
      </div>
      
    </div>
    <div class="container px-4 py-5 lg:py-5 lg:px-10">
      <section class="about-zk flex flex-col lg:flex-row justify-between">
        <div class=" lg:w-2/5">
        </div>
      </section>
      <section>
        <div class="md:flex mt-6 justify-between">
          <CategoriesSidebar />
          <div class="w-full md:w-3/5">
            <div>
              <div
                class="md:flex border-solid card-blog w-full md:w-full lg:w-full xl:w-4/5 mb-10"
                v-for="cat in blogs"
                :key="cat.title"
              >
                <g-image
                  src="../assets/North Africa 1.png"
                  height="217"
                  width="250"
                  class="md:inherit"
                ></g-image>
                <div class="py-10 px-5">
                  <h4>BioTime 8.0</h4>
                  <p>
                    John Che Chairman ZKTeco visits Indian Research Institute
                  </p>
                  <g-link
                    to="/blog-detail/"
                    class="text-color-zkteco-green hover"
                    >Read More</g-link
                  >
                </div>
              </div>

              <div class="text-center">
                <v-pagination
                  color="#82BB31"
                  circle
                  v-model="page"
                  :length="5"
                ></v-pagination>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </layout>
</template>

<script>
import MailOpen from "../components/Vectors/MailOpen";
import CategoriesSidebar from "../components/CategoriesSidebar";
export default {
  components: {
    MailOpen,
    CategoriesSidebar,
  },

  data() {
    return {
      page: 1,
      categories: [
        { title: "News", total: "4" },
        { title: "Notice", total: "4" },
        { title: "Security Bulletins", total: "4" },
        { title: "Events", total: "4" },
        { title: "Newsletter", total: "4" },
        { title: "New Release", total: "4" },
      ],
      blogs: [
        { title: "News", total: "4" },
        { title: "Notice", total: "4" },
        { title: "Security Bulletins", total: "4" },
        { title: "New Release", total: "4" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.number-categories {
  background: gainsboro;
}

.card-blog {
  background: #ffffff;
  box-shadow: 0px 8px 24px rgba(112, 112, 92, 0.15);
  border-radius: 5px;
  height: 217px;
}

.headline {
  h2 {
    font-style: normal;
    font-weight: bolder;
    font-size: 41px;
    letter-spacing: 3px;
  }
}

.subscriber-box {
  padding: 28px;
  background: #1a130c;
  border-radius: 5px;
  color: white;
  h4 {
    color: white;
  }

  .v-input {
    .v-text-field__slot {
      input {
        background: white;
        padding: 10px;
      }
    }
  }
  .v-btn {
    background-color: green !important;
    width: 100%;
  }
}
</style>

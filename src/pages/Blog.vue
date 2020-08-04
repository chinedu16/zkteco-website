<template>
  <layout>
    <div class="container px-4 py-5 lg:py-5 lg:px-10">
      <section class="about-zk flex flex-col lg:flex-row justify-between">
        <div class=" lg:w-2/5">
          <div
            class="flex items-center mb-10 mt-10 justify-center w-64 h-16 border-page text-color-zkteco-green font-black text-xl"
          >
            BLOG
          </div>
        </div>
      </section>
      <section>
        <div class="md:flex justify-between">
          <div class=" my-10 md:m-0 w-full md:w-4/12 lg:w-4/12 xl:w-1/5">
            <div>
              <div class="header-title">
                Categories
              </div>
              <div class="my-10">
                <div
                  class="flex mb-7 pb-3 justify-between border-solid border-b"
                  v-for="cat in categories"
                  :key="cat.title"
                >
                  <h6>
                    <g-link class="hover">{{ cat.title }}</g-link>
                  </h6>
                  <span class="number-categories flex justify-center h-6 w-6">{{
                    cat.total
                  }}</span>
                </div>
              </div>
            </div>
            <div>
              <div class="header-title">
                Recent News
              </div>
              <div class="my-10">
                <div class="flex mb-7 justify-between align-center">
                  <g-image
                    src="../assets/North Africa 1.png"
                    class="rounded-full"
                    width="71"
                    height="71"
                  ></g-image>
                  <p class="ml-5">John Che Chairman ZKTeco visits Indian</p>
                </div>
              </div>
            </div>

            <div>
              <div class="subscriber-box">
                <div class="flex">
                  <MailOpen />
                  <h4 class="ml-3">Subscribe</h4>
                </div>
                <input
                  class="w-full my-4 text-black p-1 bg-white rounded-sm"
                  type="text"
                />
                <v-btn dark>Subscribe</v-btn>
              </div>
            </div>
          </div>
          <div class="w-full md:w-7/12">
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
                  class="w-full md:inherit"
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
export default {
  components: {
    MailOpen,
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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
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

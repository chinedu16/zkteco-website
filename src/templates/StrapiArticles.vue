<template>
  <SemiLayout>
    <div class="h-32"></div>
    <div class="container px-2 md:px-12 py-5 lg:py-5 lg:px-10">
      <section>
        <div class="md:flex justify-between">
          <CategoriesSidebar />
          <div class="" style="width: 71%;">
            <div class="border">
              <g-image
                data-aos="zoom-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
                class="w-full"
                :src="article.image[0].url"
                width="821"
                height="384px"
                style="height: 30rem; object-fit: cover;"
              ></g-image>
              <div class="p-10">
                <h3 data-aos="fade-left" data-aos-easing="ease-out-cubic">{{ article.title }}</h3>
                <p data-aos="fade-right" data-aos-easing="ease-out-cubic" v-html="article.body"></p>
              </div>
            </div>

            <div class="mt-10">
              <div class="header-title">
                2 Comments
              </div>

              <div class="mt-10">
                <div class="flex mb-7 justify-between align-center">
                  <g-image
                    src="../assets/North Africa 1.png"
                    class="rounded-full"
                    width="71"
                    height="71"
                  ></g-image>
                  <div class="border py-3 px-7 ml-10">
                    <h5 class="text-bold">Sarah Bright</h5>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed aliquam, enim at laoreet malesuada, arcu ligula
                      hendrerit risus, sed iaculis quam justo eget enim.
                    </span>
                  </div>
                </div>
                <div class="flex mb-7 justify-between align-center">
                  <g-image
                    src="../assets/North Africa 1.png"
                    class="rounded-full"
                    width="71"
                    height="71"
                  ></g-image>
                  <div class="border py-3 px-7 ml-10">
                    <h5 class="text-bold">Sarah Bright</h5>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed aliquam, enim at laoreet malesuada, arcu ligula
                      hendrerit risus, sed iaculis quam justo eget enim.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-10">
              <div class="header-title">
                Leave a Comment
              </div>
              <div>
                <div class="mt-10">
                  <v-row>
                    <v-col cols="12" md="12">
                      <v-textarea
                        outlined
                        name="input-7-4"
                        label="Comments"
                      ></v-textarea>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field
                        outlined
                        v-model="email"
                        :rules="emailRules"
                        label="Name"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field
                        outlined
                        v-model="name"
                        :rules="emailRules"
                        label="E-mail"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-btn class="w-full" dark>Post Comments</v-btn>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </SemiLayout>
</template>

<page-query>
query Articles($path: String!) {
  strapiArticles (path: $path) {
    id
    title
    body
    image {
      url
      name
    }
  }
}
</page-query>

<script>
import SemiLayout from "../layouts/SemiDefault";
import MailOpen from "../components/Vectors/MailOpen";
import CategoriesSidebar from "../components/CategoriesSidebar";
export default {
  components: {
    MailOpen,
    CategoriesSidebar,
    SemiLayout,
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

  computed: {
    article() {
      return this.$page.strapiArticles;
    },
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
}

.v-btn {
  background-color: green !important;
  width: 100%;
  color: white !important;
}
</style>

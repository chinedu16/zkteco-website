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
          <div class=" md:w-3/5">
            <div class="border">
              <g-image
                src="../assets/zkteco_headquarter_r 1.png"
                width="821"
                height="384px"
              ></g-image>
              <div class="p-10">
                <h3>John Che Chairman ZKTeco visits Indian</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  aliquam, enim at laoreet malesuada, arcu ligula hendrerit
                  risus, sed iaculis quam justo eget enim. Etiam volutpat
                  faucibus vestibulum. Proin semper iaculis felis vitae finibus.
                  Pellentesque porttitor vitae erat et imperdiet. Etiam cursus
                  enim tortor, eu viverra dolor dictum ut. In tincidunt lobortis
                  lectus rutrum pulvinar. Morbi ullamcorper efficitur risus,
                  quis faucibus velit mollis a. Sed viverra ac turpis quis
                  cursus. Sed varius, nulla id tincidunt euismod, massa purus
                  tempus libero, a posuere ex arcu nec diam. Nam tempor ac quam
                  aliquet sollicitudin. Vivamus blandit mollis enim vitae
                  ultricies. In hac habitasse platea dictumst. Vestibulum vitae
                  ante at tellus imperdiet cursus.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  aliquam, enim at laoreet malesuada, arcu ligula hendrerit
                  risus, sed iaculis quam justo eget enim. Etiam volutpat
                  faucibus vestibulum. Proin semper iaculis felis vitae finibus.
                  Pellentesque porttitor vitae erat et imperdiet. Etiam cursus
                  enim tortor, eu viverra dolor dictum ut. In tincidunt lobortis
                  lectus rutrum pulvinar. Morbi ullamcorper efficitur risus,
                  quis faucibus velit mollis a. Sed viverra ac turpis quis
                  cursus. Sed varius, nulla id tincidunt euismod, massa purus
                  tempus libero, a posuere ex arcu nec diam. Nam tempor ac quam
                  aliquet sollicitudin. Vivamus blandit mollis enim vitae
                  ultricies. In hac habitasse platea dictumst. Vestibulum vitae
                  ante at tellus imperdiet cursus.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  aliquam, enim at laoreet malesuada, arcu ligula hendrerit
                  risus, sed iaculis quam justo eget enim. Etiam volutpat
                  faucibus vestibulum. Proin semper iaculis felis vitae finibus.
                </p>
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
}

.v-btn {
  background-color: green !important;
  width: 100%;
  color: white !important;
}
</style>

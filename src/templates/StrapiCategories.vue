<template>
  <layout>
    <div class="blogs-headline-image headline md:-mt-24" style="height: 20rem;">
      <div class="footer-image-overlay"></div>
    </div>
    <div class="container px-4 py-5 lg:py-5 lg:px-10">
      <section class="about-zk flex flex-col lg:flex-row justify-between">
        <div class=" lg:w-2/5"></div>
      </section>
      <section class="flex justify-center">
        <div class="md:flex w-full max-w-screen-xxl mt-6 justify-between">
          <CategoriesSidebar />
          <div class="w-full md:w-3/5 mt-12 md:mt-0 ">
            <div>
              <div
                class="flex border-solid card-blog w-full md:w-full lg:w-full xl:w-4/5 mb-10"
                v-for="item in category.articles"
                :key="item.id"
              >
                <g-image
                  :src="item.image[0].formats.thumbnail.url"
                  height="217"
                  width="250"
                  style="width: 40%; object-fit: cover;"
                  class="md:inherit"
                ></g-image>
                <div class="py-10 px-5 relative" style="width: 60%;">
                  <h4>{{ item.title }}</h4>
                  <p>
                    {{ item.excerpt }}
                  </p>
                  <g-link
                    :to="`/blog/${item.slug}`"
                    class="text-color-zkteco-green hover absolute"
                    style="bottom: 30px;"
                    >Read More</g-link
                  >
                </div>
              </div>

              <div class="text-center">
                <v-pagination
                  color="#82BB31"
                  circle
                  v-if="category.articles.length > 5"
                  v-model="page"
                  :length="3"
                ></v-pagination>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </layout>
</template>

<page-query>
query Categories($path: String!) {
  strapiCategories (path: $path) {
    id
    name
    articles {
			id
			title
			slug
			excerpt
			body
			created_by
			created_at
			image {
				url
				formats {
					thumbnail {
						url
					}
				}
			}
    }
  }
}
</page-query>

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
  computed: {
    category() {
      return this.$page.strapiCategories;
    },
  },
};
</script>

<style lang="scss" scoped>
.blogs-headline-image {
  background-image: url("../assets/newsfeed.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
  z-index: 1;
}

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

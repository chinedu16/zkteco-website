<template>
  <layout>
    <div id="post-categories">
      <div class="blogs-headline-image headline" style="height: 20rem;">
        <div class="footer-image-overlay"></div>
        <div class="overlay">
          <div class="page-header_wrap">
            <div class="page-heading">
              <h1>Blogs</h1>
            </div>
            <ul class="coustom-breadcrumb">
              <li><g-link to="/">Home</g-link></li> |
              <li>Blogs</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center align-center">
        <div class="breathing">
          <section class="about-zk flex flex-col lg:flex-row justify-between">
            <div class=" lg:w-2/5"></div>
          </section>
          <section>
            <div id="categories-blogs" class=" w-full max-w-screen-xxl">
              <CategoriesSidebar class="article__sidebar" />
              <div class="w-full article__item">
                <div>
                  <div
                    class="border-solid card-blog w-full md:w-full lg:w-full xl:w-4/5 mb-10"
                    v-for="item in category.articles"
                    :key="item.id"
                  >
                    <g-image
                      :src="item.image[0].formats.thumbnail.url"
                      :alt="item.title"
                      height="217"
                      width="250"
                    ></g-image>
                    <div class="card-info relative">
                      <h4>{{ item.title }}</h4>
                      <p>
                        {{ item.excerpt }}
                      </p>
                      <g-link
                        :to="`/blog/${item.slug}`"
                        class="text-color-zkteco-green hover"
                        >Read Article <RightCaret />
                      </g-link>
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
      </div>
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
        name
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
import RightCaret from "../components/Vectors/RightCaret";
import CategoriesSidebar from "../components/CategoriesSidebar";
export default {
   metaInfo: {
    title: "Articles Categories",
  },
  components: {
    MailOpen,
    CategoriesSidebar,
    RightCaret,
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
@import "../styles/base/_variable.scss";
@import "../styles/base/mixins";
#post-categories {
  .article__item {
    margin-bottom: 2rem;
    @include mq(md) {
      margin-bottom: 0rem;
    }
  }
  .card-blog {
    display: grid;
    background: #ffffff;
    box-shadow: 0px 8px 24px rgba(112, 112, 92, 0.15);
    border-radius: 5px;
    @include mq(md) {
      display: flex;
      height: 217px;
    }
    img {
      width: 100%;
      object-fit: contain;
      @include mq(md) {
        width: 40%; 
        object-fit: cover;
      }
      
    }
    .card-info {
      @include mq(md) {
        width: 60%;
      }

      a {
        display: flex;
        @include mq(md) {
          position: absolute;
          bottom: 30px;
        }
      }
      
    }
  }
}
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

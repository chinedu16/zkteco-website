<template>
  <SemiLayout>
    <div id="article-details" class="flex justify-center align-center">
      <div class="breathing">
        <section class="breadcrumbs pt-4 flex">
          <div class="position clearfix caseList-nav">
            <div class="fl">
              <g-link to="/">Home Page</g-link> &gt; <g-link to="/category/events">Articles</g-link> &gt; blog
            </div>
          </div>
        </section>
        <section class="flex justify-center">
          <div class="" id="categories-blogs-details">
            <CategoriesSidebar class="article__sidebar" />
            <div class="w-full article__item rightside-article">
              <div class="border">
                <div style="height: 20rem;">
                    <g-image
                    data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000"
                    class="w-full"
                    :src="article.image[0].url"
                    width="821"
                    height="384px"
                    style="width: 100%; height: 100%; object-fit: cover;"
                  ></g-image>
                </div>
                <div class="article-body">
                  <h3 style="margin-bottom: 2rem;">{{ article.title }}</h3>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="4000"
                    class="hidden md:block"
                    data-aos-easing="ease-out-cubic"
                    v-html="article.body"
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </SemiLayout>
</template>

<page-query>
query Articles($path: String!) {
  post: strapiArticles (path: $path) {
    id
    title
    slug
    body
    created_at
    excerpt
    created_by{
      lastname
      firstname
    }
    image {
      url
      name
      width
      height
    }
    SEO {
      id
      description
      title
    }
  }
}
</page-query>

<script>
import SemiLayout from "../layouts/SemiDefault";
import MailOpen from "../components/Vectors/MailOpen";
import CategoriesSidebar from "../components/CategoriesSidebar";
import PostSeo from '../mixins/SEO'

export default {
  mixins: [PostSeo],
  components: {
    MailOpen,
    CategoriesSidebar,
    SemiLayout,
  },
  data() {
    return {
    };
  },
  computed: {
    article() {
      return this.$page.post;
    },
  },
};
</script>

<style lang="scss">
@import "../styles/base/_variable.scss";
@import "../styles/base/mixins";
.number-categories {
  background: gainsboro;
}


#article-details {
  .breadcrumbs {
      display: block;
      @include mq(md){
        display: none;
      }
    }
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

@media (min-width: 640px) {
  .rightside-article {
    width: 71%;
  }
}



.article-body {
  padding: 20px;
  @include mq(md) {
    padding: 40px;
  }
  h3 {
    font-size: 20px;
    text-transform: uppercase;
    margin-bottom: 2rem;
    font-weight: 800;
    color: #82bb31;
    text-align: center;
  }
  p {
    a{
      display: none;
    }
    .image {
      height: 320px;
      width: 100%;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  
}

.theme--light.v-input:not(.v-input--is-disabled) input{
  color:#fff;
}
</style>

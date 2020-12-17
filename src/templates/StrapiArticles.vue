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
                    :alt="article.image[0].name"
                    width="821"
                    height="384px"
                    style="width: 100%; height: 100%; object-fit: cover;"
                  ></g-image>
                </div>
                <div class="article-body">
                  <h1 style="margin-bottom: 2rem;">{{ article.title }}</h1>
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
import SemiLayout from "@/layouts/SemiDefault";
import MailOpen from "@/components/Vectors/MailOpen";
import CategoriesSidebar from "@/components/CategoriesSidebar";
import PostSeo from '@/mixins/SEO'

export default {
  metaInfo() {
    const siteUrl = this.$static.metadata.siteUrl;
    const postPath = `${siteUrl}/blog/${this.$page.post.slug}`;
    const imagePath = this.$page.post.image[0];
    const keywordsArray = this.$page.post.SEO ? this.$page.post.SEO.description :  this.$page.post.excerpt;
    const tagsArray = this.$page.post.SEO ? this.$page.post.SEO.title :  this.$page.post.excerpt;
    return {
      title: 'Index',
      titleTemplate: this.$page.post.title,
      meta: [
        {
          name: "tags",
          content: tagsArray,
        },
        {
          name: "keywords",
          content: keywordsArray,
        },
        {
          key: "description",
          name: "description",
          content: this.$page.post.body,
        },
        { key: "og:url", property: "og:url", content: `${postPath}` },
        {
          key: "og:title",
          property: "og:title",
          content: this.$page.post.title,
        },
        {
          key: "og:type",
          property: "og:type",
          content: "article",
        },
        {
          key: "og:description",
          property: "og:description",
          content: this.$page.post.body,
        },
        {
          key: "og:image",
          property: "og:image",
          content: imagePath.url,
        },
        {
          key: "og:image:width",
          property: "og:image:width",
          content: (imagePath && imagePath.width) || "",
        },
        {
          key: "og:image:height",
          property: "og:image:height",
          content: (imagePath && imagePath.height) || "",
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.post.body,
        },
        { name: "twitter:card", content: "summary_large_image" },
        {
          key: "twitter:image",
          property: "twitter:image",
          content: imagePath.url,
        },
        {
          key: "twitter:title",
          property: "twitter:title",
          content: this.$page.post.title,
        },
        { name: "twitter:site", content: siteUrl },
        { name: "twitter:creator", content: "Zkteco" }
      ],
      script: [
        {
          src: "https://platform.twitter.com/widgets.js", 
          async: true,
          type: "application/ld+json",
          json: {
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            description: this.$page.post.body,
            datePublished: this.$page.post.created_at,
            author: {
              name: this.$static.metadata.author,
            },
            headline: this.$page.post.title,
            image: imagePath.url,
          },
        },
      ],
    }
  },
  mixins: [PostSeo],
  components: {
    MailOpen,
    CategoriesSidebar,
    SemiLayout,
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
  h1 {
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

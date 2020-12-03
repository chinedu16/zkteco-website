<static-query>
  query {
    metadata {
      siteName
      siteDescription
      siteUrl
      author
    }
  }
</static-query>

<script>
export default {
  metaInfo() {
    const siteUrl = this.$static.metadata.siteUrl;
    const postPath = `${siteUrl}/blog/${this.$page.post.slug}`;
    const imagePath = this.$page.post.image[0];
    const keywordsArray = this.$page.post.SEO ? this.$page.post.SEO.description :  this.$page.post.excerpt;
    const tagsArray = this.$page.post.SEO ? this.$page.post.SEO.title :  this.$page.post.excerpt;
    return {
      title: this.$page.post.title,
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
    };
  },
};
</script>

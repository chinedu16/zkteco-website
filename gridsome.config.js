// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
// const collections = [
//   {
//     query: `{
//       allStrapiProducts {
//         edges {
//           node {
//             id
//             name
//             slug
//             modified
//             images {
//               url
//             }
//           }
//         }
//       }
//     }`,
//     transformer: ({ data }) => data.allStrapiProducts.edges.map(({ node }) => node),
//     indexName: process.env.ALGOLIA_INDEX_NAME || "posts", // Algolia index name
//     itemFormatter: (item) => {
//       return {
//         objectID: item.id,
//         title: item.name,
//         slug: item.slug,
//         modified: String(item.modified),
//       };
//     }, // optional
//     matchFields: ["slug", "modified"], // Array<String> required with PartialUpdates
//   },
// ];

module.exports = {
  siteName: "ZKTeco West Africa",
  siteDescription:
    "ZKTeco is a globally-renowned provider of security, access control and time management solutions",
  siteUrl: process.env.SITE_URL
    ? process.env.SITE_URL
    : "https://zkteco-wa.com/",
  titleTemplate: `%s | ZKTeco West Africa`,
  icon: {
    favicon: "./src/assets/favicon.png",
    touchicon: "./src/assets/favicon.png",
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        baseDir: "./content",
        path: "**/*.md",
        typeName: "MarkdownPage",
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["noopener", "noreferrer"],
          plugins: ["@gridsome/remark-prismjs"],
        },
      },
    },
    // {
    //   use: `gridsome-plugin-algolia`,
    //   options: {
    //     appId: process.env.ALGOLIA_APP_ID,
    //     apiKey: process.env.ALGOLIA_ADMIN_KEY,
    //     collections,
    //     chunkSize: 10000, // default: 1000
    //     enablePartialUpdates: true, // default: false
    //   },
    // },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000, // default
        exclude: ["/exclude-me"],
        config: {
          "/*": {
            changefreq: "weekly",
            priority: 0.5,
          },
        },
      },
    },
    {
      use: "@gridsome/source-strapi",
      options: {
        apiURL: process.env.API_URL,
        queryLimit: 1000,
        contentTypes: [
          "articles",
          "products",
          "categories",
          "product-categories",
          "home-pages",
          "about-uses",
          "contact-uses",
          "sub-product-categories",
          "solution-categories",
          "solutions",
          "warranty-policies",
          "faqs",
          "teams",
          "download-centers",
        ],
        singleTypes: ["menu"],
      },
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: process.env.GA_ID ? process.env.GA_ID : "XX-999999999-9",
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {},
    },
  ],

  templates: {
    StrapiArticles: [
      {
        path: "/blog/:slug",
      },
    ],
    StrapiCategories: [
      {
        path: "/category/:slug",
      },
    ],
    StrapiProductCategories: [
      {
        path: "/product-categories/:slug",
      },
    ],
    StrapiProducts: [
      {
        path: "/product/:slug",
      },
    ],
    StrapiSubProductCategories: [
      {
        path: "/sub-categories/:slug",
      },
    ],
    StrapiSolutions: [
      {
        path: "/solution-details/:slug",
      },
    ],
    StrapiSolutionCategories: [
      {
        path: "/solution-categories/:slug",
      },
    ],
  },
};

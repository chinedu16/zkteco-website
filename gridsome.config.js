// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`


module.exports = {
  siteName: "ZkTeco West Africa",
  siteDescription: "ZKTeco is a globally-renowned provider of security, access control and time management solutions",
  siteUrl: process.env.SITE_URL ? process.env.SITE_URL : "https://example.com",
  titleTemplate: `%s | ZkTeco West Africa`,
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
    {
      use: "@gridsome/source-strapi",
      options: {
        apiURL: 'http://admin.zkteco-wa.com/',
        queryLimit: 1000,
        contentTypes: [
          "articles",
          "products",
          "categories",
          "product-categories",
          "home-pages",
          "about-uses",
          "contact-uses",
        ],
        singleTypes: ["menu"],
      },
    },
    // {
    //   use: "gridsome-plugin-tailwindcss",
    //   options: {
    //     tailwindConfig: "./tailwind.config.js",
    //   },
    // },
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
  },
};

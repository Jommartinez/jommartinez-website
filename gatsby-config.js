// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

module.exports = {
  siteMetadata: {
    title: `Jommartinez - Frontend & WordPress developer`,
    description: `Frontend & WordPress developer since 2010`,
    author: `@jommartinez`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jommartinez-website`,
        short_name: `jommartinez`,
        start_url: `/`,
        background_color: `red`,
        theme_color: `red`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-plugin-canonical-urls`,
    //   options: {
    //     siteUrl: process.env.URL,
    //     stripQueryString: true,
    //   },
    // },
    // {
    //   resolve: "gatsby-source-wordpress",
    //   options: {
    //     baseUrl: process.env.API_URL,
    //     protocol: "https",
    //     restApiRoutePrefix: "wp-json",
    //     hostingWPCOM: false,
    //     useACF: true,
    //     acfOptionPageIds: [],
    //     cookies: {},
    //     verboseOutput: false,
    //     perPage: 100,
    //     searchAndReplaceContentUrls: {
    //       sourceUrl: "https://source-url.com",
    //       replacementUrl: "https://replacement-url.com",
    //     },
    //     concurrentRequests: 10,
    //     includedRoutes: [
    //       "**/categories",
    //       "**/posts",
    //       "**/pages",
    //       "**/media",
    //       "**/tags",
    //       "**/taxonomies",
    //       "**/users",
    //       "**/ai_proyectos",
    //       "**/ai_categorias",
    //     ],
    //     excludedRoutes: ["**/posts/1456"],
    //     keepMediaSizes: false,
    //     normalizer: function ({ entities }) {
    //       return entities
    //     },
    //     normalizers: normalizers => [
    //       ...normalizers,
    //       {
    //         name: "nameOfTheFunction",
    //         normalizer: function ({ entities }) {
    //           // manipulate entities here
    //           return entities
    //         },
    //       },
    //     ],
    //   },
    // },
  ],
}

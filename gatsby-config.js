const path = require("path")

module.exports = {
  pathPrefix: "/gatsby-test",
  siteMetadata: {
    title: `Off the Dial`,
    description: `Off the Dial is a unique tournament organisation for Splatoon 2, dedicated to providing fresh tournament opportunities for free agents and teams alike.`,
  },
  plugins: [
    /* Filesystem stuff */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
        ignore: `../**/posts/**`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/pages/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/static/images`,
      },
    },
    `gatsby-plugin-root-import`,

    /* Styles & CSS */
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-emotion`,

    /* MDX */
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: path.resolve("src/templates/md.js"),
          posts: path.resolve("src/templates/post.js"),
        },
      },
    },
  ],
}

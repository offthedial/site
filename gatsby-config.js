const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Off the Dial`,
    description: `Off the Dial is a unique tournament organisation for Splatoon 2. Dedicated to providing fresh tournament opportunities for free agents.`,
    twitter: `@Off_The_Dial`,
  },
  plugins: [
    /* Filesystem stuff */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
        ignore: [`**/posts/*`], // Except posts
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

    /* Utilities */
    `gatsby-plugin-root-import`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/profile`, `/404`],
      },
    },

    /* Styles & CSS */
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },

    /* Image Processing */
    `gatsby-plugin-sharp`,

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
        gatsbyRemarkPlugins: [
          `gatsby-remark-images`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false,
            },
          },
          `gatsby-remark-prismjs`,
        ],
        remarkPlugins: [require(`remark-emoji`), require(`remark-twemoji`)],
      },
    },
  ],
}

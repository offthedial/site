const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Off the Dial`,
    description: `Off the Dial is a unique tournament organisation for Splatoon 2. Dedicated to providing fresh tournament opportunities for free agents.`,
    siteUrl: `https://otd.ink`,
    twitter: `@Off_The_Dial`,
  },
  plugins: [
    /* Firebase */
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyCwAhc1DyT1Ln5U3K8f-ldWT3Z0w9xm_4Q",
          authDomain: "off-the-dial-26e93.firebaseapp.com",
          databaseURL: "https://off-the-dial-26e93.firebaseio.com",
          projectId: "off-the-dial-26e93",
          storageBucket: "off-the-dial-26e93.appspot.com",
          messagingSenderId: "822224581984",
          appId: "1:822224581984:web:9510ee9ec192f4d19e5a05",
        },
      },
    },
    /* Filesystem stuff */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: path.join(__dirname, `src`, `pages`),
        ignore: [`**/posts/*`], // Except posts
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: path.join(__dirname, `src`, `pages`, `posts`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `static`, `images`),
      },
    },

    /* Utilities */
    `gatsby-plugin-root-import`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,

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

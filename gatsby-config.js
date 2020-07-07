module.exports = {
  siteMetadata: {
    title: `Off the Dial`,
    description: `Off the Dial is a unique tournament organisation for Splatoon 2, dedicated to providing fresh tournament opportunities for free agents and teams alike.`,
  },
  plugins: [
    "gatsby-plugin-root-import",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/pages/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },

    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
  ],
}

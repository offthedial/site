import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

function SEO({ title }) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            image
            siteUrl
            twitter
          }
        }
      }
    `
  )

  const metaTitle = title
    ? `${title} - ${siteMetadata.title}`
    : siteMetadata.title

  return (
    <Helmet htmlAttributes={{ lang: "en" }}>
      <meta property="og:type" content="website" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta content={metaTitle} name="title" />
      <meta content={metaTitle} property="og:title" />
      <meta content={metaTitle} property="twitter:title" />
      <meta content={siteMetadata.description} name="description" />
      <meta content={siteMetadata.description} property="og:description" />
      <meta content={siteMetadata.description} property="twitter:description" />
      <meta content={siteMetadata.image} property="og:image" />
      <meta content={siteMetadata.image} property="twitter:image" />
      <meta content={siteMetadata.siteUrl} property="og:url" />
      <meta content={siteMetadata.siteUrl} property="twitter:url" />
      <meta content={siteMetadata.twitter} property="twitter:creator" />
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.15.1/js/all.js"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="64x64"
        href="https://assets.otd.ink/favicon.png"
      />
    </Helmet>
  )
}

export default SEO

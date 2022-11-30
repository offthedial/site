import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

import logo from "src/static/logo.svg"
import banner from "src/static/banner.png"
import favicon from "src/static/favicon.svg"

const SEO = ({ title, description, image, creator }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
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
  const metaDesc = description
    ? `${description} - ${siteMetadata.description}`
    : siteMetadata.description
  let [metaImage, card] = title
    ? [image || logo, "summary"]
    : [banner, "summary_large_image"]

  return (
    <Helmet htmlAttributes={{ lang: "en" }}>
      <title>{metaTitle}</title>
      <description>{siteMetadata.description}</description>
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:url" content={siteMetadata.siteUrl} />
      <meta property="og:image" content={metaImage} />
      <meta name="twitter:site" content={siteMetadata.twitter} />
      <meta name="twitter:card" content={card} />
      {creator && <meta name="twitter:creator" content={creator} />}
      <meta name="theme-color" content="#5d9194" />
      <link rel="icon" type="image/png" sizes="64x64" href={favicon} />
    </Helmet>
  )
}

export default SEO

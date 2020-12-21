import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

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
  if (typeof window === "undefined") {
    return
  }

  console.log(description)

  const metaTitle = title
    ? `${title} - ${siteMetadata.title}`
    : siteMetadata.title
  const metaDesc = description
    ? `${description} - ${siteMetadata.description}`
    : siteMetadata.description
  let [metaImage, card] =
    window.location.pathname === "/"
      ? ["https://assets.otd.ink/banner.png", "summary_large_image"]
      : [image ? image : "https://assets.otd.ink/icon.png", "summary"]

  return (
    <Helmet htmlAttributes={{ lang: "en" }}>
      <title>{metaTitle}</title>
      <description>{siteMetadata.description}</description>
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:url" content={siteMetadata.siteUrl} />
      <meta property="og:image" content={metaImage} />
      <meta property="twitter:site" content={siteMetadata.twitter} />
      <meta property="twitter:card" content={card} />
      {creator && <meta property="twitter:creator" content={creator} />}
      <meta name="theme-color" content="#5d9194" />
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

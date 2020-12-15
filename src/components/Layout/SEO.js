import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import { PropTypes } from "prop-types"
import { Helmet } from "react-helmet"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaTitle =
    `${title} - ${site.siteMetadata.title}` || site.siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s - ${site.siteMetadata.title}`}
      defaultTitle={site.siteMetadata.title}
      link={[
        {
          rel: "icon",
          type: "image/png",
          sizes: "64x64",
          href: `https://assets.otd.ink/favicon.png`,
        },
      ]}
      meta={[
        {
          property: `og:title`,
          content:
            `${title} - ${site.siteMetadata.title}` || site.siteMetadata.title,
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `https://assets.otd.ink/icon.png?v=2`,
        },
        {
          property: `theme-color`,
          content: `#5d9194`,
        },
      ].concat(meta)}
    >
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.15.1/js/all.js"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={site.siteMetadata.twitter} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content="https://assets.otd.ink/banner.png" />
      <meta
        name="twitter:image:alt"
        content={`${site.siteMetadata.title} Banner`}
      />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default SEO

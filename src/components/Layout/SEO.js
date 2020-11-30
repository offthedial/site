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
          href: `https://assets.otd.ink/icon.png?v=2`,
        },
      ]}
    >
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
      />
      <meta name="theme-color" content="#5d9194" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content="https://assets.otd.ink/icon.png?v=2" />
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

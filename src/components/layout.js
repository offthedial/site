import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { rhythm } from "src/utils/typography"
import SEO from "./layout/seo"
import NavBar from "./layout/navbar"

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* SEO component */}
      <SEO title={pageTitle} />
      {/* NavBar component */}
      <NavBar siteTitle={data.site.siteMetadata.title} />
      {/* Actual page */}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1000,
          padding: `0 ${rhythm(1 / 4)} ${rhythm(1 / 4)}`,
        }}
      >
        {/* Main section */}
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

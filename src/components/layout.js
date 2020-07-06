import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

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
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        {/* Main section */}
        <main>{children}</main>
        {/* Footer */}
        <footer>
          <br></br>
          <hr></hr>
          <div
            style={{
              fontSize: `80%`,
              opacity: `80%`,
              fontStyle: `italic`,
            }}
          >
            This website is currently in beta, more features are to come.
            Stay tuned!
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

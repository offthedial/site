import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "react-bootstrap"

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
      <Container>
        {/* Main section */}
        <main>{children}</main>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

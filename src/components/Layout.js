import React from "react"
import { Container } from "react-bootstrap"

import SEO from "./layout/SEO"
import NavBar from "./layout/NavBar"

const Layout = ({ pageTitle, children }) => (
  <>
    <SEO title={pageTitle} />
    <NavBar siteTitle="Off the Dial" />
    <Container>
      <main>{children}</main>
    </Container>
  </>
)

export default Layout

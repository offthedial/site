import React from "react"

import { chakra } from "@chakra-ui/react"
import SEO from "./SEO"
import NavBar from "./NavBar"
import Footer from "./Footer"

const Layout = ({ pageTitle, meta, main, children, ...rest }) => (
  <chakra.div className="layout" {...rest}>
    <SEO title={pageTitle} {...meta} />
    <NavBar />
    <main style={{ ...main }}>{children}</main>
    <Footer />
  </chakra.div>
)

export default Layout

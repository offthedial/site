import React from "react"

import SEO from "./SEO"
import NavBar from "./NavBar"
import Footer from "./Footer"

const Layout = ({ pageTitle, meta, main, children }) => (
  <div class="layout">
    <SEO title={pageTitle} {...meta} />
    <NavBar />
    <main style={{ ...main }}>{children}</main>
    <Footer />
  </div>
)

export default Layout

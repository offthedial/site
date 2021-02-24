import React from "react"

import SEO from "./SEO"
import NavBar from "./NavBar"
import Footer from "./Footer"

const Layout = ({ pageTitle, meta, children }) => (
  <div class="layout">
    <SEO title={pageTitle} {...meta} />
    <NavBar />
    <main>
      <div>{children}</div>
    </main>
    <Footer />
  </div>
)

export default Layout

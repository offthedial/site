import React from "react"

import SEO from "./SEO"
import NavBar from "./NavBar"
import MediaFooter from "./MediaFooter"

const Layout = ({ pageTitle, meta, mediaFooter = true, children }) => (
  <div class="layout">
    <SEO title={pageTitle} {...meta} />
    <NavBar />
    <div class="content layout-content">{children}</div>
    {mediaFooter && <MediaFooter />}
  </div>
)

export default Layout

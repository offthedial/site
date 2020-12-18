import React from "react"

import SEO from "./SEO"
import NavBar from "./NavBar"
import MediaFooter from "./MediaFooter"

const Layout = ({ pageTitle, mediaFooter = true, children }) => (
  <div class="layout">
    <SEO title={pageTitle} />
    <NavBar />
    <div class="content layout-content">{children}</div>
    {mediaFooter && <MediaFooter />}
  </div>
)

export default Layout

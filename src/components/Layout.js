import React from "react"

import SEO from "./layout/SEO"
import NavBar from "./layout/NavBar"
import MediaFooter from "./layout/MediaFooter"

const Layout = ({ pageTitle, mediaFooter = true, children }) => (
  <div class="layout">
    <SEO title={pageTitle} />
    <NavBar siteTitle="Off the Dial" />
    <div class="content layout-content">{children}</div>
    {mediaFooter && <MediaFooter />}
  </div>
)

export default Layout

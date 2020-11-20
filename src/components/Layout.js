import React from "react"

import SEO from "./layout/SEO"
import NavBar from "./layout/NavBar"
import MediaFooter from "./layout/MediaFooter"

const Layout = ({ pageTitle, mediaFooter = true, children }) => (
  <>
    <SEO title={pageTitle} />
    <NavBar siteTitle="Off the Dial" />
    <div class="content">{children}</div>
    {mediaFooter && <MediaFooter />}
  </>
)

export default Layout

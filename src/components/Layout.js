import React from "react"

import SEO from "./layout/SEO"
import NavBar from "./layout/NavBar"

const Layout = ({ pageTitle, children }) => (
  <>
    <SEO title={pageTitle} />
    <NavBar siteTitle="Off the Dial" />
    <div class="content">{children}</div>
  </>
)

export default Layout

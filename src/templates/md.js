import React from "react"
import { MDXProvider } from "@mdx-js/react"

import Layout from "src/components/Layout"
import Mention from "src/components/Mention"
import Footer from "src/components/Footer"

const shortcodes = { Mention, Footer }

const Post = ({ pageContext, children }) => {
  return (
    <Layout pageTitle={pageContext.frontmatter.title}>
      <MDXProvider components={shortcodes}>
        <div class="section pt-5">
          <div class="container">
            {children}
          </div>
        </div>
      </MDXProvider>
    </Layout>
  )
}

export default Post

import React from "react"
import { MDXProvider } from "@mdx-js/react"

import Layout from "src/components/layout"

import Mention from "src/components/mention"
import Footer from "src/components/footer"

const shortcodes = { Mention, Footer }

const Post = ({ pageContext, children }) => {
  return (
    <Layout pageTitle={pageContext.frontmatter.title}>
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </Layout>
  )
}

export default Post

import React from "react"
import { MDXProvider } from "@mdx-js/react"

import Layout from "src/components/Layout"
import PageContainer from "src/components/PageContainer"

import Mention from "src/components/Mention"
import Footer from "src/components/Footer"

const shortcodes = { Mention, Footer }

const Post = ({ pageContext, children }) => (
  <Layout pageTitle={pageContext.frontmatter.title}>
    <PageContainer>
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </PageContainer>
  </Layout>
)

export default Post

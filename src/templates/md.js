import React from "react"
import { MDXProvider } from "@mdx-js/react"

import Layout from "src/components/Layout"
import PageHero from "src/components/PageHero"

import Mention from "src/components/Mention"
import Footer from "src/components/Footer"

const shortcodes = { Mention, Footer }

const Post = ({ pageContext, children }) => (
  <Layout pageTitle={pageContext.frontmatter.title}>
    {pageContext.frontmatter.hero && (
      <PageHero title={pageContext.frontmatter.title}>
        {pageContext.frontmatter.hero}
      </PageHero>
    )}
    <div class={"section " + (pageContext.frontmatter.hero ? "pt-0" : "pt-5")}>
      <div class="container">
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </div>
    </div>
  </Layout>
)

export default Post

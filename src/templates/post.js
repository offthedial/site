import React from "react"
import { MDXProvider } from "@mdx-js/react"

import { rhythm, gray } from "src/utils/typography"
import Layout from "src/components/layout"

import Mention from "src/components/mention"
import Footer from "src/components/footer"

const shortcodes = { Mention, Footer }

const Post = ({ pageContext, children }) => {
  console.log(typeof(pageContext.frontmatter.date))
  return (
  <Layout pageTitle={pageContext.frontmatter.title}>
    <div>
      <h1 style={{ marginBottom: rhythm(1 / 4) }}>
        {pageContext.frontmatter.title}{" "}
        <span style={{ color: gray(33), fontSize: rhythm(1) }}>
          — {pageContext.frontmatter.date}
        </span>
      </h1>
      <h2 style={{ color: gray(33), fontSize: rhythm(0.8) }}>
        <span style={{ color: gray(40) }}>Written By:</span> {pageContext.frontmatter.author}
      </h2>
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </div>
  </Layout>
)}

export default Post
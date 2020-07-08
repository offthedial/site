import React from "react"
import { graphql } from "gatsby"

import { rhythm, gray } from "src/utils/typography"
import Layout from "src/components/layout"

export default function Post({ data }) {
  const post = data.markdownRemark
  return (
    <Layout pageTitle={" Posts | " + post.frontmatter.title}>
      <div>
        <h1 style={{ marginBottom: rhythm(1 / 4) }}>
          {post.frontmatter.title}{" "}
          <span style={{ color: gray(33), fontSize: rhythm(1) }}>
            — {post.frontmatter.date}
          </span>
        </h1>
        <h2 style={{ color: gray(33), fontSize: rhythm(0.8) }}>
          Written By: {post.frontmatter.author}
        </h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
      }
    }
  }
`

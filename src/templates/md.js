import React from "react"
import { graphql } from "gatsby"

import Layout from "src/components/layout"

export default function MarkdownPage({ data }) {
  const post = data.markdownRemark
  return (
    <Layout pageTitle="Page">
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`
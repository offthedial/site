import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import Layout from "src/components/Layout"
import Mention from "src/components/Mention"
import Title from "src/components/Title"

const shortcodes = { Link, Mention }

const Page = ({ data: { mdx }, children }) => (
  <Layout
    className="mx-8 mb-14"
    helmet={{ title: mdx.frontmatter.title, description: mdx.frontmatter.desc }}
  >
    <Title title={mdx.frontmatter.title}>{mdx.frontmatter.desc}</Title>
    <article className="prose prose-lg prose-slate mx-auto dark:prose-invert">
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </article>
  </Layout>
)

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        desc
      }
    }
  }
`

export default Page

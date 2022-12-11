import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { addMinutes, format } from "date-fns"
import Layout from "src/components/Layout"
import Mention from "src/components/Mention"
import Title from "src/components/Title"

const shortcodes = { Link, Mention }

const Post = ({ data: { mdx }, children }) => (
  <Layout
    className="mx-8 mb-14"
    helmet={{ title: mdx.frontmatter.title, description: mdx.excerpt }}
  >
    <Title title={mdx.frontmatter.title}>
      <div className="flex items-baseline gap-4">
        <p>{mdx.frontmatter.author}</p>
        <p>·</p>
        <p>{formatDate(mdx.frontmatter.date)}</p>
      </div>
    </Title>
    <article className="prose prose-lg prose-slate mx-auto dark:prose-invert">
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </article>
  </Layout>
)

const formatDate = rawDate => {
  let date = new Date(rawDate)
  date = addMinutes(date, date.getTimezoneOffset())
  date = format(date, "MMMM dd, yyyy")
  return date
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        author
      }
      excerpt(pruneLength: 160)
    }
  }
`

export default Post

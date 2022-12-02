import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { addMinutes, format } from "date-fns"
import Mention from "src/components/Mention"
import Title from "src/components/Title"

const shortcodes = { Link, Mention }

const Post = ({ data: { mdx }, children }) => {
  return (
    <div>
      <Title title={mdx.frontmatter.title}>
        <div>
          {mdx.frontmatter.author}
          {` · `}
          {formatDate(mdx.frontmatter.date)}
        </div>
      </Title>
      <div className="prose dark:prose-invert prose-slate">
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </div>
    </div>
  )
}

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
      }
    }
  }
`

export default Post

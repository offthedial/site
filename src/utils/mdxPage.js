import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import Mention from "src/components/Mention"
import Title from "src/components/Title"

const shortcodes = { Link, Mention }

const Page = ({ data: { mdx }, children }) => {
  return (
    <div>
      <Title title={mdx.frontmatter.title} />
      <div className="max-w-3xl prose dark:prose-invert prose-slate">
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </div>
    </div>
  )
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

export default Page

import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"

import { rhythm, gray } from "src/utils/typography"
import Layout from "src/components/layout"

export default function Post({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1
            css={css`
              margin-bottom: ${rhythm(1 / 4)};
            `}
          >
            {post.frontmatter.title}{" "}
            <span
              css={css`
                color: ${gray(33)};
                font-size: ${rhythm(1)};
              `}
            >
              — {post.frontmatter.date}
            </span>
        </h1>
        <h2
          css={css`
            color: ${gray(33)};
            font-size: ${rhythm(.8)}
          `}
        >
          Written By: {post.frontmatter.author}
        </h2>
        {/* Actual Post */}
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
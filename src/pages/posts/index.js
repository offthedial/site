import React from "react"
import { Card } from "react-bootstrap"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"

import { rhythm, gray } from "src/utils/typography"
import Layout from "src/components/layout"

export default function Posts({ data }) {
  return (
    <Layout pageTitle="Posts">
      <h4>
        Check out the latest blog posts, news, and updates that we’re making to
        Off the Dial below! Posts may consist of patch notes, new features or
        just anything that we feel has a need to be said.
      </h4>
      <h1 style={{ marginBottom: rhythm(1 / 6) }}>
        <h3
          style={{
            color: gray(40),
            float: "right",
            marginTop: rhythm(1 / 2),
          }}
        >
          Total Posts: {data.allMarkdownRemark.totalCount}
        </h3>
        Posts:
      </h1>
      <hr />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.fields.slug}>
          <Card
            style={{
              margin: rhythm(2 / 3),
            }}
          >
            <Link
              css={css`
                padding: ${rhythm(2 / 3)};
                color: inherit;
                text-decoration: none !important;
              `}
              to={node.fields.slug}
            >
              <Card.Title>
                <h1 style={{ marginBottom: rhythm(1 / 4) }}>
                  {node.frontmatter.title}
                </h1>
              </Card.Title>
              <Card.Subtitle className="mb-2" style={{ color: gray(33) }}>
                Written on {node.frontmatter.date}
              </Card.Subtitle>
              <Card.Text>
                <blockquote>
                  <i>{node.excerpt}</i>
                </blockquote>
              </Card.Text>
            </Link>
          </Card>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(pages)/(posts)/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            author
          }
          fields {
            slug
          }
          parent {
            ... on File {
              relativeDirectory
            }
          }
          excerpt(pruneLength: 200)
        }
      }
    }
  }
`

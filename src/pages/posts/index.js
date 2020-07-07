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
      <h1
        css={css`
          margin-bottom: ${rhythm(1 / 6)};
        `}
      >
        <h3
          css={css`
            color: ${gray(40)};
            float: right;
            margin-top: ${rhythm(1 / 2)};
          `}
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
              style={{
                padding: rhythm(2 / 3),
              }}
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
                border-bottom: 0 !important;
              `}
            >
              <Card.Title>
                <h3
                  css={css`
                    margin-bottom: ${rhythm(1 / 4)};
                  `}
                >
                  {node.frontmatter.title}{" "}
                  <span
                    css={css`
                      color: ${gray(33)};
                      font-size: 80%;
                    `}
                  >
                    — {node.frontmatter.date}
                  </span>
                </h3>
              </Card.Title>
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
          excerpt
        }
      }
    }
  }
`

import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "src/components/Layout"
import PageHero from "src/components/PageHero"

const Posts = ({ data }) => (
  <Layout pageTitle="Posts">
    <PageHero title="Posts">
      Check out the latest blog posts, news, and updates that we’re making to
      Off the Dial below! Posts may consist of patch notes, new features or just
      anything that we feel has a need to be said.
    </PageHero>
    <div class="section pt-0">
      <div class="container">
        {data.allMdx.edges.map(({ node }) => (
          <div key={node.parent.name} class="post card mx-3 my-3">
            <Link to={node.parent.name}>
              <div class="card-content">
                <h2 class="mb-0">{node.frontmatter.title}</h2>
                <p class="has-text-grey mb-3 is-size-5">
                  {node.frontmatter.author} · {node.frontmatter.date}
                </p>
                <blockquote class="has-text-grey">
                  <i>{node.excerpt}</i>
                </blockquote>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMdx(
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
          parent {
            ... on File {
              name
            }
          }
          excerpt(pruneLength: 200)
        }
      }
    }
  }
`

export default Posts

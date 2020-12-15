import React from "react"

import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "src/components/Layout"
import PageHero from "src/components/PageHero"

const Post = styled.div.attrs(props => ({
  className: "bg-hover-shade card mx-3 my-3",
  key: props.name,
}))``

const Posts = ({ data }) => (
  <Layout pageTitle="Posts">
    <PageHero title="Posts">
      Check out the latest blog posts, news, and updates from Off the Dial!
      Posts may consist of patch notes, new features or anything else we want to
      say.
    </PageHero>
    <div class="section pt-0">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-10">
            {data.allMdx.edges.map(({ node }) => (
              <Post name={node.parent.name}>
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
              </Post>
            ))}
          </div>
        </div>
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

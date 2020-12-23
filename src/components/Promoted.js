import React from "react"

import { graphql, useStaticQuery, Link } from "gatsby"

const Promoted = ({ slug }) => {
  const data = useStaticQuery(graphql`
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
              tournament
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
  `)
  let nodes = data.allMdx.edges.filter(function (n) {
    return n["node"]["parent"]["name"] === slug
  })
  let node = nodes[0].node
  return (
    <div class="card message is-cyan">
      <div class="message-header">
        <p class="is-size-4 has-text-weight-medium">
          {null === node.frontmatter.tournament
            ? "Recent Post"
            : "Upcoming Tournament Info"}
        </p>
      </div>
      <div class="message-body">
        <div class="is-size-3 has-text-weight-medium">
          {node.frontmatter.title}
        </div>
        <div class="is-size-5">
          {node.frontmatter.author} · {node.frontmatter.date}
        </div>
        <blockquote
          class="is-italic my-3"
          style={{ borderLeftColor: "#1abfc7" }}
        >
          {node.excerpt}
        </blockquote>
        <div class="mt-4 buttons">
          <Link to={`/posts/${node.parent.name}`} class="button is-cyan">
            Read More
          </Link>
          {node.frontmatter.tournament && (
            <Link
              to={`/${node.frontmatter.tournament}`}
              class="button is-cyan is-outlined"
            >
              Tournament Page
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Promoted

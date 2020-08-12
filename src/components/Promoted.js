import React from "react"
import { useStaticQuery } from "gatsby"

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
    <div class="card">
      <article class="message is-info">
        <div class="message-header">
          <p class="is-size-4">Current Tournament Info</p>
        </div>
        <div class="message-body">
          <div class="is-size-3">{node.frontmatter.title}</div>
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
            <a
              href={`/posts/${node.parent.name}`}
              class="button is-info is-outlined"
            >
              Read More
            </a>
            <a
              href={`/${node.frontmatter.tournament}`}
              class="button is-info is-outlined"
            >
              Tournament Page
            </a>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Promoted
import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

import Layout from "src/components/Layout"
import PageHero from "src/components/PageHero"

const Staff = ({ data }) => (
  <Layout pageTitle="Staff">
    <PageHero title="Our Staff Team">
      Off the Dial is thankful to have such an awesome staff team, each staff
      member contributes a key part to Off the Dial as a whole. If any of them
      interest you, feel free to read about them here.
    </PageHero>
    <div class="section pt-0">
      <div class="container layout-content">
        <div class="grid-2">
          {mapMdx(data).map(({ node }) => (
            <StaffCard
              id={node.frontmatter.name}
              name={node.frontmatter.name}
              role={node.frontmatter.role + " & " + node.frontmatter.hobby}
              link={node.frontmatter.link[0]}
              linkRef={node.frontmatter.link[1]}
            >
              <MDXRenderer>{node.body}</MDXRenderer>
            </StaffCard>
          ))}
        </div>
      </div>
    </div>
  </Layout>
)

const StaffCard = ({ id, name, role, link, linkRef, children }) => (
  <div class="card mx-3 my-3">
    <div class="card-content">
      <div class="mb-3">
        <div class="has-text-grey">{role}</div>
        <h2 id={id} class="my-1">
          {name}
        </h2>
        <a
          class="is-link is-hover-underline has-text-weight-medium"
          href={linkRef}
        >
          {link}
        </a>
      </div>

      {children}
    </div>
  </div>
)

function mapMdx(data) {
  let edges = data.allMdx.edges
  console.log(edges)
  edges.sort((a, b) =>
    a.node.slug > b.node.slug ? 1 : b.node.slug > a.node.slug ? -1 : 0
  )
  console.log(edges)
  return edges
}

export const query = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/(pages)/(staff)/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            name
            role
            hobby
            link
          }
          slug
          body
        }
      }
    }
  }
`

export default Staff

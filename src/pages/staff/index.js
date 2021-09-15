import React from "react"

import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "src/components/Layout"
import PageHero from "src/components/PageHero"

const mapStaffCards = data => {
  let edges = data.allMdx.edges
  edges.sort((a, b) =>
    a.node.slug > b.node.slug ? 1 : b.node.slug > a.node.slug ? -1 : 0
  )
  return edges.map(({ node }) => (
    <StaffCard
      id={node.frontmatter.name}
      name={node.frontmatter.name}
      role={node.frontmatter.role + " & " + node.frontmatter.hobby}
      link={node.frontmatter?.link?.[0]}
      linkRef={node.frontmatter?.link?.[1]}
    >
      <MDXRenderer>{node.body}</MDXRenderer>
    </StaffCard>
  ))
}

const Staff = ({ data }) => (
  <Layout pageTitle="Staff">
    <PageHero title="Our Staff Team">
      Our staff team are currently being revised - as some have left and we have new faces. Stay tuned for the update (will be updated once IDTGA 25 blog post is released)!
    </PageHero>
    <div class="section pt-0">
      <div class="container layout-content">
        <div class="grid-2 is-hidden-mobile">{mapStaffCards(data)}</div>
        <div class="is-hidden-tablet">{mapStaffCards(data)}</div>
      </div>
    </div>
  </Layout>
)

const StaffCard = ({ id, name, role, link, linkRef, children }) => (
  <div id={id} class="card mx-3 my-3">
    <div class="card-content">
      <div class="mb-3">
        <div class="has-text-grey">{role}</div>
        <h2 class="my-1">{name}</h2>
        {link && (
          <a
            class="is-link is-hover-underline has-text-weight-medium"
            href={linkRef}
          >
            {link}
          </a>
        )}
      </div>
      {children}
    </div>
  </div>
)

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

import React from "react"

import { graphql } from "gatsby"
import * as Chakra from "@chakra-ui/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "src/components/Layout"
import Title from "src/components/Title"

const Staff = ({ data }) => (
  <Layout pageTitle="Staff">
    <Title title="Our Staff Team">
      Off the Dial is thankful to have such an awesome staff team, each staff
      member contributes a key part to Off the Dial as a whole. If any of them
      interest you, feel free to read about them here.
    </Title>
    <Chakra.Container maxW="container.xl">
      <Chakra.SimpleGrid columns={[null, 1, 1, 2]}>
        {mapStaffCards(data)}
      </Chakra.SimpleGrid>
    </Chakra.Container>
  </Layout>
)

const mapStaffCards = data => {
  let edges = data.allMdx.edges
  edges.sort((a, b) =>
    a.node.slug > b.node.slug ? 1 : b.node.slug > a.node.slug ? -1 : 0
  )
  return edges.map(({ node }) => (
    <Chakra.Box key={node.slug} layerStyle="card" m={6}>
      <Chakra.Box p={8}>
        <Chakra.Box pb={8}>
          <Chakra.Text color="gray.500">
            {node.frontmatter.role + " & " + node.frontmatter.hobby}
          </Chakra.Text>
          <Chakra.Text fontSize="3xl" lineHeight="short" fontWeight="bold">
            {node.frontmatter.name}
          </Chakra.Text>
          {node.frontmatter?.link?.[0] && (
            <Chakra.Link
              fontWeight="bold"
              color="otd.slate.0"
              href={node.frontmatter?.link?.[1]}
            >
              {node.frontmatter?.link?.[0]}
            </Chakra.Link>
          )}
        </Chakra.Box>
        <article>
          <MDXRenderer>{node.body}</MDXRenderer>
        </article>
      </Chakra.Box>
    </Chakra.Box>
  ))
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

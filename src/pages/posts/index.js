import React from "react"

import * as Chakra from "@chakra-ui/react"
import { graphql, Link } from "gatsby"
import Layout from "src/components/Layout"
import Title from "src/components/Title"

const Posts = ({ data }) => (
  <Layout pageTitle="Posts">
    <Title title="Posts">
      Check out the latest blog posts, news, and updates from Off the Dial!
      Posts may consist of patch notes, new features or anything else we want to
      say.
    </Title>
    <Chakra.Container maxW="container.md">
      <Chakra.Stack spacing={6}>
        {data.allMdx.edges.map(({ node }) => (
          <Link to={node.parent.name} key={node.parent.name}>
            <Chakra.Box layerStyle="lifted" p={6} _hover={{ layerStyle: "tint" }}>
              <Chakra.Box fontSize="lg">
                <Chakra.Text fontSize="2xl" fontWeight="bold" lineHeight="none">
                  {node.frontmatter.title}
                </Chakra.Text>
                <Chakra.Text textStyle="mute" mb={2}>
                  {node.frontmatter.author} · {node.frontmatter.date}
                </Chakra.Text>
              </Chakra.Box>
              <Chakra.Text
                textStyle="semimute"
                as="blockquote"
                fontStyle="italic"
              >
                {node.excerpt}
              </Chakra.Text>
            </Chakra.Box>
          </Link>
        ))}
      </Chakra.Stack>
    </Chakra.Container>
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

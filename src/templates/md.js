import React from "react"

import { MDXProvider } from "@mdx-js/react"
import * as Chakra from "@chakra-ui/react"
import Layout from "src/components/Layout"
import Title from "src/components/Title"
import Mention from "src/components/Mention"

const shortcodes = { Mention, Title }

const Post = ({ pageContext, children }) => (
  <Layout pageTitle={pageContext.frontmatter.title}>
    <Chakra.Container maxW="container.lg">
      <MDXProvider components={shortcodes}>
        <article>{children}</article>
      </MDXProvider>
    </Chakra.Container>
  </Layout>
)

export default Post

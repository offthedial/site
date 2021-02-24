import React from "react"

import * as Chakra from "@chakra-ui/react"
import { MDXProvider } from "@mdx-js/react"
import { addMinutes, format } from "date-fns"
import Layout from "src/components/Layout"
import Title from "src/components/Title"

const Post = ({ pageContext, children }) => (
  <Layout pageTitle={pageContext.frontmatter.title}>
    <Title title={pageContext.frontmatter.title}>
      <Chakra.Text mb={2}>
        {pageContext.frontmatter.author}
        {` · `}
        {formatPostDate(pageContext.frontmatter.date)}
      </Chakra.Text>
    </Title>
    <Chakra.Container fontSize="sl">
      <MDXProvider components={{ Title }}>
        <article>{children}</article>
      </MDXProvider>
    </Chakra.Container>
  </Layout>
)

const formatPostDate = date => {
  let postDate = new Date(date)
  postDate = addMinutes(postDate, postDate.getTimezoneOffset())
  return format(postDate, "MMMM dd, yyyy")
}

export default Post

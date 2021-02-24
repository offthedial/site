import React from "react"

import * as Chakra from "@chakra-ui/react"
import { MDXProvider } from "@mdx-js/react"
import { addMinutes, format } from "date-fns"
import Layout from "src/components/Layout"
import Title from "src/components/Title"
import Mention from "src/components/Mention"

const shortcodes = { Mention, Title }

const Post = ({ pageContext, children }) => {
  let date = new Date(pageContext.frontmatter.date)
  date = addMinutes(date, date.getTimezoneOffset())
  date = format(date, "MMMM dd, yyyy")

  return (
    <Layout pageTitle={pageContext.frontmatter.title}>
      <Title title={pageContext.frontmatter.title}>
        <Chakra.Text mb={2}>
          {pageContext.frontmatter.author}
          {` · `}
          {date}
        </Chakra.Text>
      </Title>
      <Chakra.Container fontSize="sl">
        <MDXProvider components={shortcodes}>
          <article>{children}</article>
        </MDXProvider>
      </Chakra.Container>
    </Layout>
  )
}

export default Post

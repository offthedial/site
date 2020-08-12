import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { format } from "date-fns"

import Layout from "src/components/Layout"
import PageContainer from "src/components/PageContainer"

import Mention from "src/components/Mention"
import Footer from "src/components/Footer"

const shortcodes = { Mention, Footer }

const Post = ({ pageContext, children }) => (
  <Layout pageTitle={pageContext.frontmatter.title}>
    <PageContainer>
      <h1 class="title">{pageContext.frontmatter.title}</h1>
      <h2 class="subtitle has-text-weight-normal has-text-grey is-size-5">
        {pageContext.frontmatter.author} ·{" "}
        {format(new Date(pageContext.frontmatter.date), "MMMM dd, yyyy")}
        {console.log(pageContext.frontmatter.tournament)}
        {undefined === pageContext.frontmatter.tournament ? null : (
          <div>
            <a
              href={`/${pageContext.frontmatter.tournament}`}
              class="button mt-2 is-primary is-outlined"
            >
              Tournament Page
            </a>
          </div>
        )}
      </h2>
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </PageContainer>
  </Layout>
)

export default Post

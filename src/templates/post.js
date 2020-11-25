import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { addMinutes, format } from "date-fns"

import Layout from "src/components/Layout"
import PostContent from "src/components/PostContent"

import Mention from "src/components/Mention"
import Footer from "src/components/Footer"
import { Link } from "gatsby"

const shortcodes = { Mention, Footer }

const Post = ({ pageContext, children }) => (
  <Layout pageTitle={pageContext.frontmatter.title}>
    <div class="section has-text-centered">
      <h1 class="title">{pageContext.frontmatter.title}</h1>
      <h2 class="subtitle has-text-weight-normal has-text-grey is-size-5">
        {pageContext.frontmatter.author} ·{" "}
        {formatPostDate(pageContext.frontmatter.date)}
        {pageContext.frontmatter.tournament && (
          <div>
            <Link
              to={`/${pageContext.frontmatter.tournament}`}
              class="button mt-2 is-primary is-outlined"
            >
              Tournament Page
            </Link>
          </div>
        )}
      </h2>
    </div>
    <div class="section pt-0">
      <PostContent>
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </PostContent>
    </div>
  </Layout>
)

function formatPostDate(date) {
  let postDate = new Date(date)
  postDate = addMinutes(postDate, postDate.getTimezoneOffset())
  return format(postDate, "MMMM dd, yyyy")
}

export default Post

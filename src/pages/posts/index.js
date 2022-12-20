import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "src/components/Layout"
import Title from "src/components/Title"

const Posts = ({ data }) => (
  <Layout
    className="px-8 pb-8"
    helmet={{
      title: "Posts",
      description:
        "Check out the latest blog posts, news, and updates from Off the Dial! Posts may consist of patch notes, new features or anything else we want to say.",
    }}
  >
    <Title title="Posts">
      Check out the latest blog posts, news, and updates from Off the Dial!
      Posts may consist of patch notes, new features or anything else we want to
      say.
    </Title>
    <div className="mx-auto max-w-xl">
      {data.allMdx.nodes.map(node => (
        <Link to={node.parent.name} key={node.parent.name}>
          <div className="rounded-lg p-8 text-lg transition-all ease-out hover:bg-slate-100 hover:shadow-lg dark:hover:bg-slate-800">
            <h3 className="text-2xl font-medium">{node.frontmatter.title}</h3>
            <div className="mb-6 flex flex-wrap items-baseline text-lg text-slate-600 dark:text-slate-400">
              <p>{node.frontmatter.author}</p>
              <span className="mx-2.5">·</span>
              <p>{node.frontmatter.date}</p>
            </div>
            <article className="prose prose-slate dark:prose-invert">
              <blockquote className="font-medium text-slate-700 dark:text-slate-300">
                {node.excerpt}
              </blockquote>
            </article>
          </div>
        </Link>
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  {
    allMdx(
      filter: { internal: { contentFilePath: { glob: "**/pages/posts/*" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      totalCount
      nodes {
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
        excerpt(pruneLength: 160)
      }
    }
  }
`

export default Posts

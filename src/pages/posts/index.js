import React from "react"
import { graphql, Link } from "gatsby"
import Title from "src/components/Title"

const Posts = ({ data }) => {
  console.log(data)
  return (
    <div className="flex flex-col items-center">
      {/* <Layout pageTitle="Posts"> */}
      <Title title="Posts">
        Check out the latest blog posts, news, and updates from Off the Dial!
        Posts may consist of patch notes, new features or anything else we want
        to say.
      </Title>
      <div className="max-w-xl">
        <div className="flex flex-col gap-8 pb-12">
          {data.allMdx.nodes.map(node => (
            <Link to={node.parent.name} key={node.parent.name}>
              <div className="rounded-lg p-8 transition-all ease-out hover:shadow-lg dark:hover:bg-slate-800 hover:bg-slate-100">
                <div fontSize="lg">
                  <div className="text-2xl font-medium">
                    {node.frontmatter.title}
                  </div>
                  <div className="mb-6 text-lg text-slate-600 dark:text-slate-400">
                    {node.frontmatter.author} · {node.frontmatter.date}
                  </div>
                </div>
                <div className="prose dark:prose-invert prose-slate">
                  <blockquote className="text-slate-700 dark:text-slate-300 font-medium">
                    {node.excerpt}
                  </blockquote>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* </Layout> */}
    </div>
  )
}

export const query = graphql`
  {
    allMdx(
      filter: { internal: { contentFilePath: { regex: "/(pages)/(posts)/" } } }
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

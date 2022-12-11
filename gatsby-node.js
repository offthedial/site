const path = require("path")
const pageTemplate = path.resolve(`./src/utils/mdxPage.js`)
const postTemplate = path.resolve(`./src/utils/mdxPost.js`)

const createMarkdownPages = async (createPage, graphql) => {
  const result = await graphql(`
    {
      allMdx(filter: { internal: { contentFilePath: { regex: "/pages/" } } }) {
        nodes {
          id
          internal {
            contentFilePath
          }
          parent {
            ... on File {
              relativePath
            }
          }
        }
      }
    }
  `)
  result.data.allMdx.nodes.forEach(node => {
    const template = !!node.internal.contentFilePath.match(/\/pages\/posts\//)
      ? postTemplate
      : pageTemplate
    const path = node.parent.relativePath
    createPage({
      path: path.slice(0, path.length - 3),
      component: `${template}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id },
    })
  })
}

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  await createMarkdownPages(createPage, graphql)
}

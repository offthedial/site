const path = require("path")
const pageTemplate = path.resolve(`./src/utils/mdxPage.js`)
const postTemplate = path.resolve(`./src/utils/mdxPost.js`)

const createMarkdownPages = async (createPage, graphql) => {
  const result = await graphql(`
    {
      allMdx(
        filter: { internal: { contentFilePath: { regex: "/(pages)/" } } }
      ) {
        nodes {
          id
          internal {
            contentFilePath
          }
          parent {
            ... on File {
              name
            }
          }
        }
      }
    }
  `)
  result.data.allMdx.nodes.forEach(node => {
    if (!!node.internal.contentFilePath.match(/\/(pages)\/(posts)\//)) {
      createPage({
        path: node.parent.name,
        component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
        context: { id: node.id },
      })
    } else {
      createPage({
        path: node.parent.name,
        component: `${pageTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
        context: { id: node.id },
      })
    }
  })
}

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  await createMarkdownPages(createPage, graphql)
}

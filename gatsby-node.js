const path = require("path")
const pageTemplate = path.resolve(`./src/components/mdxPage.js`)
const postTemplate = path.resolve(`./src/components/mdxPost.js`)

const createMarkdownPages = async (createPage, graphql) => {
  const result = await graphql(`
    {
      allMdx(
        filter: { internal: { contentFilePath: { glob: "**/pages/**/*.md" } } }
      ) {
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

const createRedirectPages = async createPage => {
  const links = [
    ["youtube", "https://www.youtube.com/channel/UCjFqnfg0CKsnQ8ag1MfNtuQ"],
    ["patreon", "https://shop.otd.ink"],
    ["shop", "https://shop.otd.ink"],
    ["twitch", "https://twitch.tv/offthedial"],
    ["twitter", "https://twitter.com/off_the_dial"],
    ["github", "https://github.com/offthedial"],
    ["discord", "https://discord.gg/RDj8axT"],
    ["tiktok", "https://www.tiktok.com/@offthedial"]
    [
      "feedback",
      "https://forms.gle/r76cP4xA8uGKkfZz8"
    ],
    [ "apply", "https://forms.gle/DkkxS6RdxXGobxcx7"],
  ]
  links.forEach(link => {
    createPage({
      path: "/" + link[0],
      component: path.resolve(`./src/components/Redirect.js`),
      context: {
        to: link[1],
      },
    })
  })
}

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  await createMarkdownPages(createPage, graphql)
  await createRedirectPages(createPage, graphql)
}

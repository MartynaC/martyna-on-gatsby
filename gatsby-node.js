const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve(`src/templates/projectTemplate.js`)
  const result = await graphql(`
    {
      allProjectsJson {
        edges {
          node {
            id
            title
            slug
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allProjectsJson.edges.forEach(({ node }) => {
    createPage({
      path: `/project/${node.slug}`,
      component: projectTemplate,
      context: {
        id: node.id,
      },
    })
  })
}

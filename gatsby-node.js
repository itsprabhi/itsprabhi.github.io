const path = require('path')

// module.exports.onCreateNode = ({node, actions}) => {
//     const {createNodeField} = actions
//     if(node.internal.type === 'MarkdownRemark'){
//         const slug = path.basename(node.fileAbsolutePath, '.md')
//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug
//         })
//     }
// }

module.exports.createPages = async ({graphql,actions}) => {
    const { createPage } = actions
    const projectTemplate = path.resolve(`./src/templates/project.js`)
    const res = await graphql(`
        query{
            allContentfulProject{
                edges{
                    node{
                        slug
                    }
                }
            }
        }
    `)
    res.data.allContentfulProject.edges.forEach((edge) => {
        // console.log(edge.node..slug)
        createPage({
            component: projectTemplate,
            path: `/work/${edge.node.slug}`,
            context:{
                slug: edge.node.slug
            }
        })
    })
}
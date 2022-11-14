const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Cities {
      allMdx {
        nodes {
          frontmatter {
            slug
            galleryDir
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  const ecosystemTemplate = path.resolve('./src/templates/EcosystemDetail.jsx');

  data.allMdx.nodes.forEach((node) => {
    actions.createPage({
      path: `/${node.frontmatter.slug}`,
      component: `${ecosystemTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { slug: node.frontmatter.slug, relativeDir: node.frontmatter.galleryDir },
    });
  });
};

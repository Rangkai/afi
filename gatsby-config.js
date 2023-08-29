/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    '@chakra-ui/gatsby-plugin',
    'gatsby-plugin-eslint',
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'cities',
        path: `${__dirname}/src/cities/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pdfs',
        path: `${__dirname}/src/pdfs/`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        mdxOptions: {
          remarkPlugins: [
            {
              resolve: 'gatsby-remark-images',
              options: {},
            },
          ],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-2WTHDM4DRC', // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
  ],
  siteMetadata: {
    title: 'AFI - Apresiasi Film Indonesia',
    description: 'APRESIASI FILM INDONESIA adalah upaya untuk menelusuri akar dan ranting budaya perfilman di Indonesia melalui kolaborasi pendataan, kuratorial disertai dengan tindak lanjut berdasarkan hasil riset kuantitatif & kualitatif. Program ini dirintis oleh Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi dan dikelola oleh Cinema Poetica dan Rangkai.',
  },
};

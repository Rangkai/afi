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
  ],
  siteMetadata: {
    title: 'AFI - Apresiasi Film Indonesia',
    description: 'Untuk mengapresiasi film Indonesia seluas-luasnya, perlu diusahakan berbagai cara untuk memperkenalkan keragamannya. APRESIASI FILM INDONESIA 2022 adalah upaya untuk menelusuri akar dan ranting budaya perfilman di Indonesia melalui kolaborasi pendataan dan kuratorial. Program ini dirintis oleh Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi dan dikelola oleh Cinema Poetica dan Rangkai.',
  },
};

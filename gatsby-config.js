/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'motocycles',
    siteUrl: 'https://www.yourdomain.tld',
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com/css2`],
        web: [
          {
            name: `Poppins`,
            file: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap`,
          },
          {
            name: `Montserrat`,
            file: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,500;1,300&display=swap',
          },
          {
            name: `Kanit`,
            file: 'https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,300;0,400;1,200&display=swap',
          },
          {
            name: `Material Symbols Outlined`,
            file: `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined`,
          },
        ],
      },
    },
  ],
}

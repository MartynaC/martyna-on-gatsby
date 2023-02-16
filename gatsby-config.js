module.exports = {
   flags: {
       DEV_SSR: true,
      },
  siteMetadata: {
    title: `Martyna Chojnacka's Portfolio`,
    description: `Martyna Chojnacka's Portfolio based on gatsby bootstrap 5 starter.`,
    author: `Martyna Chojnacka`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-json`,

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `nunito` // you can also specify font weights and styles
        ],
        display: 'swap'
      },
    },
   
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-bootstrap-5`,
        short_name: `gb5-starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `static/favicon1.png`, 
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
}

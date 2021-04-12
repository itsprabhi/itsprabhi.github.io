

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

// console.log(`${process.env.CONTENTFUL_SPACE_ID}`,'@@@@@@@@@@@@')

module.exports = {
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options:{
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options:{
                name:'src',
                path: `${__dirname}/src/`
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `Prabhi`,
              short_name: `Prabhi`,
              start_url: `/`,
              background_color: `#f7f0eb`,
              theme_color: `#a2466c`,
              display: `standalone`,
              icon:'./src/images/P.png'
            },
        },
        'gatsby-transformer-remark',
        'gatsby-plugin-react-helmet'
    ],
    siteMetadata:{
        title: 'Prabhi',
        author: 'Prabhsharan Gosal',

    }
}
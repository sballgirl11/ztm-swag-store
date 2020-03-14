module.exports = {
  siteMetadata: {
    title: `ZTM Swag Store`,
    author: `Brittney Postma`,
    description: `A swag store for the ZTM community.`,
    siteUrl: `https://ztm-swag-store.netlify.com/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/items`,
        name: `items`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ZTM Swag Store`,
        short_name: `ZTM Store`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#F51767`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-snipcartv3',
      options: {
        //replace with own Snipcart API key
        apiKey: 'ZTU4YTVkMzAtZDdjYi00NGU3LWE2YTktZWI2ZWRjY2JmZmM3NjM3MTk3MDM3OTI1NTY0OTYw',
        autopop: true,
          }
    },
    `gatsby-plugin-styled-components`,
  ],
}

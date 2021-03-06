module.exports = {
  siteMetadata: {
    title: `BPODE`,
    description: `New thinking from top and beyond.`,
    author: `Will and Presh`,
    url:`https://www.bpode.com`,
    twitterUsername: `@williamschuddy`,
    image: "/meta-image.jpg",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-csv`,
    `gatsby-transformer-json`,
    //`gatsby-transformer-remark`,
    `remark-math`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
              backgroundColor:`transparent`,
             // tracedSVG : true,
            },
          },
          {
            
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BPODE`,
        short_name: `BPODE`,
        start_url: `/`,
        background_color: `#23abe2`,
        theme_color: `#23abe2`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/episodes`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
      trackingId: "UA-44315602-3",
       //Defines where to place the tracking script - `true` in the head and `false` in the body
       head: true,
      
     //  Setting this parameter is optional
       anonymize: true,
       //Setting this parameter is also optional
       respectDNT: true,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

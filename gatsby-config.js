const queries = require("./src/utils/algolia")
require("dotenv").config()

// TODO automatically load from /intl/ files
// TODO update
// const supportedLanguages = [
//   `ar`,
//   `bn`,
//   `cs`,
//   `de`,
//   `el`,
//   `es`,
//   `fa`,
//   `fr`,
//   `id`,
//   `ig`,
//   `it`,
//   `ja`,
//   `ko`,
//   `nl`,
//   `pl`,
//   `pt-br`,
//   `ro`,
//   `ru`,
//   `se`,
//   `sk`,
//   `sl`,
//   `tr`,
//   `zh`,
// ]
const supportedLanguages = [`es`, `en`]
const defaultLanguage = `en`

module.exports = {
  siteMetadata: {
    // `title` & `description` pulls from respective ${lang}.json files in SEO.js
    title: `Ethereum.org`,
    description: `Ethereum is a global, decentralized platform for money and new kinds of applications. On Ethereum, you can write code that controls money, and build applications accessible anywhere in the world.`,
    url: "https://ethereum.org",
    siteUrl: "https://ethereum.org", // TODO sitemap
    author: `@Ethereum`,
    image: "https://ethereum.org/og-image.png",
    defaultLanguage,
    supportedLanguages,
  },
  plugins: [
    // Site search
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
    // i18n support
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: supportedLanguages,
        // language file path
        defaultLanguage,
        // redirect to `/en/` when connecting `/`
        redirect: true,
      },
    },
    // MDX support
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        // process all `.md` files as MDX
        extensions: [`.mdx`, `.md`],
      },
    },
    // SEO tags
    `gatsby-plugin-react-helmet`,
    // Needed for `gatsby-image`
    `gatsby-plugin-sharp`,
    // CSS in JS
    `gatsby-plugin-styled-components`,
    // Source images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // process files from /src/content/ (used in gatsby-node.js)
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/content`,
      },
    },
    // Needed for `gatsby-image`
    `gatsby-transformer-sharp`,
  ],
}

module.exports = {
  siteMetadata: {
    title: "website title",
    description: "website description",
    image: "random image",
    url: "https://www.doe.com",
    creator: "@johndoe",
  },
  plugins: [
    "gatsby-plugin-top-layout",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mui-emotion",
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: ["en", "pt"],
        defaultLanguage: "en",
        redirect: false,
      },
    },
  ],
}

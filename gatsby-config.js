module.exports = {
  pathPrefix: "/portfolio-site",
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Portfolio",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
};

module.exports = {
    siteMetadata: {
        title: 'Silhouette',
        titleTemplate: '%s, a portfolio by Arthur Fröhlich.',
        description: 'My simple portfolio.',
        url: 'https://znuznu.github.io/silhouette/'
    },
    plugins: [
        'gatsby-plugin-root-import',
        'gatsby-plugin-sass',
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`
    ]
};

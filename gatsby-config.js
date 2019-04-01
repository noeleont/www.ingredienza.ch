module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/assets`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-component',
            options: {
              components: [ 'contact' ],
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
  mapping: {
    'MarkdownRemark.frontmatter.fatto_table.products.article': `MarkdownRemark.frontmatter.articleNr`,
    'MarkdownRemark.frontmatter.gnocchi_table_1.products.article': `MarkdownRemark.frontmatter.articleNr`,
    'MarkdownRemark.frontmatter.gnocchi_table_2.products.article': `MarkdownRemark.frontmatter.articleNr`,
    'MarkdownRemark.frontmatter.gnocchi_table_3.products.article': `MarkdownRemark.frontmatter.articleNr`,
    'MarkdownRemark.frontmatter.ravioli_table_1.products.article': `MarkdownRemark.frontmatter.articleNr`,
    'MarkdownRemark.frontmatter.ravioli_table_2.products.article': `MarkdownRemark.frontmatter.articleNr`,
    'MarkdownRemark.frontmatter.ravioli_table_3.products.article': `MarkdownRemark.frontmatter.articleNr`,
    'MarkdownRemark.frontmatter.ravioli_table_4.products.article': `MarkdownRemark.frontmatter.articleNr`,
    'MarkdownRemark.frontmatter.noodles_tables.products.article': `MarkdownRemark.frontmatter.articleNr`,
    'MarkdownRemark.frontmatter.season_tables.products.article': `MarkdownRemark.frontmatter.articleNr`,
    'MarkdownRemark.frontmatter.tables.products.article': `MarkdownRemark.frontmatter.articleNr`,
  }
}

module.exports = {
  plugins: [
    'gatsby-plugin-offline',
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
		{
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
         features: [`Array.prototype.includes`, `WeakMap`, `default-3.6`]
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Ingredienza',
        short_name: 'Ingredienza',
        start_url: '/',
        icon: 'static/assets/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
  mapping: {
    'MarkdownRemark.frontmatter.tables.products.article': `MarkdownRemark.frontmatter.articleNr`,
    'MarkdownRemark.frontmatter.employees.favorite': `MarkdownRemark.frontmatter.articleNr`,
    'MarkdownRemark.frontmatter.product': `MarkdownRemark.frontmatter.articleNr`,
  },
  siteMetadata: {
    nav: {
      de: {
        main: [
          { to: "/", text: "Home" },
          { to: "/standorte", text: "Standorte" },
          { to: "/team", text: "Unser Team" },
          { to: "/produkte/", text: "Produkte" },
          { to: "/preisliste/", text: "Preisliste" },
          { to: "/konditionen", text: "Konditionen" },
          { to: "/kontakt", text: "Kontakt" },
        ],
        sub: {
          heading: "Unsere Produkt&shy;kategorien",
          links: [
            { 
              to: "/produkte/gnocchi", 
              text: "Gnocchi" 
            },
            { 
              to: "/produkte/ravioli",
              text: "Ravioli"
            },
            {
              to: "/produkte/nudeln",
              text: "Nudeln"
            },
            {
              to: "/produkte/saison_und_spez",
              text: "Saisonprodukte & Spezialitäten"
            },
            {
              to: "/produkte/spezial",
              text: "Teigwaren mit Spezialfüllung"
            },
            {
              to: "/produkte/vegan",
              text: "Ingredienza goes vegan"
            },
            {
              to: "/produkte/fatto_a_mano",
              text: "Fatto a mano"
            }
          ]
        }
      },
      fr: {
        main: [
          { to: "/fr/", text: "Page d’accueil" },
          { to: "/fr/lieux", text: "Lieux de vente" },
          { to: "/fr/produits/", text: "Produits" },
          { to: "/fr/tarifs/", text: "Tarifs" },
          { to: "/fr/conditions", text: "Conditions de vente" },
          { to: "/fr/relation/", text: "Contact" },
        ],
        sub: {
          heading: "Nos catégories de produits",
          links: [
            { 
              to: "/fr/produits/gnocchi", 
              text: "Gnocchi" 
            },
            { 
              to: "/fr/produits/ravioli",
              text: "Ravioli"
            },
            {
              to: "/fr/produits/pates",
              text: "Pâtes"
            },
            {
              to: "/fr/produits/saison",
              text: "Produits de saison"
            },
            {
              to: "/fr/produits/speciales",
              text: "Pâtes et farces spéciales"
            },
            {
              to: "/fr/produits/vegan",
              text: "Ingredienza version végétalienne"
            },
            {
              to: "/fr/produits/fatto_a_mano",
              text: "Fatto a mano"
            },
          ]
        }
      }
    }
  }
}

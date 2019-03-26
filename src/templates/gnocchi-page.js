import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import ProductNav from '../components/ProductNav'
import ProductTable from '../components/ProductTable'

export const GnocchiPageTemplate = ({
  image,
  tables,
  html,
}) => (
    <div>
		{ image ?
			<Img
				style={{
					zIndex: -1,
					position: "fixed",
					right: 0,
					bottom: 0,
					height: "100vh",
					width: "100vw",  
				}}
				fluid={image.childImageSharp.fluid}
			/> : null 
		}
    <div dangerouslySetInnerHTML={{ __html: html }} /> 

      { tables.map( (table, i) => {
          if (table.outro !== "") {
            return ( 
              <div key={i}>
                <h2> {table.heading} </h2>
                <ProductTable
                  showHeader={table.showColName}
                  products={table.products} />
                <br />
                <strong>
                  <div dangerouslySetInnerHTML={{ __html: table.outro }} /> 
                </strong>
              </div>
            ) 
          }
          return ( 
              <div key={i}>
                <h2> {table.heading} </h2>
                <ProductTable
                  showHeader={table.showColName}
                  products={table.products} />
              </div>
          ) 
        })
      }

    <ProductNav links={[
      { to: "/produkte/gnocchi", text: "Gnocchi" },
      { to: "/produkte/ravioli", text: "Ravioli" },
      { to: "/produkte/nudeln", text: "Nudeln" },
      { to: "/produkte/saison_und_spez", text: "Saisonprodukte & Spezialitäten" },
      { to: "/produkte/spezial", text: "Teigwaren mit Spezialfüllung" },
      { to: "/produkte/vegan", text: "Ingredienza goes vegan" },
      { to: "/produkte/fatto_a_mano", text: "Fatto a mano" }
    ]}
    />
  </div>
)

GnocchiPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  html: PropTypes.string,
  tables: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      outro: PropTypes.string,
      showColName: PropTypes.bool,
      products: PropTypes.arrayOf(PropTypes.shape({
        showArticleNr: PropTypes.bool,
        article: PropTypes.shape({
          frontmatter: PropTypes.shape({
            articleNr: PropTypes.string,
            description: PropTypes.string,
            unit: PropTypes.string,
            price: PropTypes.string,
          })
        })
      }))
    })
  )
}

const GnocchiPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  // TODO: Replace with for loop and string literals  
  const products_1 = frontmatter.gnocchi_table_1.products.map(
    ({ article, showArticleNr }) => ( {...article.frontmatter, showArticleNr} ))

  const table_1 = {
    heading: frontmatter.gnocchi_table_1.heading,
    products: products_1, 
    showColName: frontmatter.gnocchi_table_1.showColName
  }

  const products_2 = frontmatter.gnocchi_table_2.products.map(
    ({ article, showArticleNr }) => ( {...article.frontmatter, showArticleNr} ))

  const table_2 = {
    heading: frontmatter.gnocchi_table_2.heading,
    products: products_2,
    showColName: frontmatter.gnocchi_table_2.showColName,
    outro: frontmatter.gnocchi_table_2.outro}

  const products_3 = frontmatter.gnocchi_table_3.products.map(
    ({ article, showArticleNr }) => ( {...article.frontmatter, showArticleNr} ))

  const table_3 = {
    heading: frontmatter.gnocchi_table_3.heading,
    products: products_3, 
    showColName: frontmatter.gnocchi_table_3.showColName,
    outro: frontmatter.gnocchi_table_3.outro}


  return (
    <Layout meta={frontmatter.meta}>
      <GnocchiPageTemplate
        image={frontmatter.image}
        tables={[table_1, table_2, table_3]}
        html={html}
      />
    </Layout>
  )
}

GnocchiPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default GnocchiPage

export const pageQuery = graphql`
query GnocchiPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "gnocchi-page"}}) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        meta {
          title
          description
          keywords
        }
        gnocchi_table_1 {
          heading
          showColName
          products {
            showArticleNr
            article {
              frontmatter {
                articleNr
                description
                unit
                price
              }
            }
          }
        }
        gnocchi_table_2 {
          heading
          outro
          showColName
          products {
            showArticleNr
            article {
              frontmatter {
                articleNr
                description
                unit
                price
              }
            }
          }
        }
        gnocchi_table_3 {
          heading
          outro
          showColName
          products {
            showArticleNr
            article {
              frontmatter {
                articleNr
                description
                unit
                price
              }
            }
          }
        }
      }
      html
    }
  }
`

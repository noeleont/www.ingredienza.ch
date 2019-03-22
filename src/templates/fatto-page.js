import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import ProductTable from '../components/ProductTable'

export const FattoPageTemplate = ({
  image,
  table,
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
			/> : <div />
		}
    <div dangerouslySetInnerHTML={{ __html: html }} /> 
      {table.products ? 
        (<ProductTable showHeader={table.showColName} products={table.products} />) : null}
  </div>
)

FattoPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  html: PropTypes.string,
  table: PropTypes.shape({
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
}

const FattoPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  const products = frontmatter.fatto_table.products.map(
    ({ article, showArticleNr }) => ( {...article.frontmatter, showArticleNr} ))
  
  const table = {products, showColName: frontmatter.fatto_table.showColName}

  return (
    <Layout meta={frontmatter.meta}>
      <FattoPageTemplate
        image={frontmatter.image}
        table={table}
        html={html}
      />
    </Layout>
  )
}

FattoPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default FattoPage

export const pageQuery = graphql`
query FattoPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "fatto-page"}}) {
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
        fatto_table {
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

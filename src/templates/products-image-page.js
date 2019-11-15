import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import ProductNav from '../components/ProductNav'
import ProductTable from '../components/ProductTableImage'

export const ProductsImagePageTemplate = ({
  image,
  tables,
  html,
  lang
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

    { tables.map( (table, i) => (
      <div key={i}>
        { table.heading? <h2> {table.heading} </h2> : null }
        <ProductTable
          showHeader={table.showColName}
          products={table.products}
          lang={lang}
        />
        { table.outro? 
          <strong>
            <br />
            <div dangerouslySetInnerHTML={{ __html: table.outro }} /> 
            <br />
          </strong> : null
        }
      </div>
    ))}

    <ProductNav lang={lang}/>
  </div>
)

ProductsImagePageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  html: PropTypes.string,
  lang: PropTypes.string,
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

const ProductsImagePage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  var tables = []

  frontmatter.tables.forEach(table => {  
    const products = table.products.map(
      ({ article, showArticleNr }) => { 
        if (article) {
          return {...article.frontmatter, showArticleNr} 
        }
      })
    tables.push({
      heading: table.heading,
      products: products, 
      showColName: table.showColName,
      outro: table.outro
    })
  })

  return (
    <Layout lang={frontmatter.lang} meta={frontmatter.meta}>
      <ProductsImagePageTemplate
        image={frontmatter.image}
        tables={tables}
        html={html}
        lang={frontmatter.lang}
      />
    </Layout>
  )
}

ProductsImagePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductsImagePage

export const pageQuery = graphql`
query ProductsImagePageTemplate($id: String!) {
  markdownRemark(id: { eq: $id }) {
    frontmatter {
      lang
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
      tables {
        heading
        outro
        showColName
        products {
          showArticleNr
          article {
            frontmatter {
              articleNr
              description: description_de
              unit
              price
              image {
                childImageSharp {
                  fixed(width: 90, quality: 100) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
    html
  }
}`

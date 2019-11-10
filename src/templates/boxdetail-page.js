import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/Layout'
import BoxTable from '../components/BoxTable'

export const BoxDetailPageTemplate = ({
  image,
  html,
  lang,
  tables,
}) => (
  <div id="main">
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
    { tables.map( (table, i) => (
      <div key={i}>
        { table.heading? <h2> {table.heading} </h2> : null }
        <BoxTable showHeader={table.showColName} 
                  products={table.products} lang={lang} />
        { table.outro? 
          <strong>
            <br />
            <div dangerouslySetInnerHTML={{ __html: table.outro }} /> 
            <br />
          </strong> : null
        }
      </div>
    ))}
  </div>
)

BoxDetailPageTemplate.propTypes = {
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

const BoxDetailPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  var tables = []

  frontmatter.tables.forEach(table => {  
    const products = table.products.map(
      ({ article }) => ( {...article.frontmatter} ))
    tables.push({
      heading: table.heading,
      products: products, 
      showColName: table.showColName,
      outro: table.outro
    })
  })

  return (
    <Layout lang={frontmatter.lang} meta={frontmatter.meta}>
      <BoxDetailPageTemplate
        image={frontmatter.image}
        html={html}
        lang={frontmatter.lang}
        tables={tables}
      />
    </Layout>
  )
}

BoxDetailPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default BoxDetailPage;

export const pageQuery = graphql`
query BoxDetailPageTemplate($id: String!) {
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
            article {
              frontmatter {
                articleNr
                product {
                  frontmatter {
                    description: description_de
                  }
                }
                units {
                  amount
                  weight
                }
                price_ep
                price_vp
                image {
                  childImageSharp {
                    fixed(width: 90, quality: 100) {
                      ...GatsbyImageSharpFixed
                    }
                    modal: fixed(width: 300, quality: 100) {
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
  }
`

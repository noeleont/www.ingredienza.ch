import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ReactModal from 'react-modal';
import { connect } from "react-redux"
import Img from "gatsby-image"

import Layout from '../components/Layout'
import BoxTable from '../components/BoxTable'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

ReactModal.setAppElement('#___gatsby');

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

const BoxDetailPage = ({ data, modalIsOpen, modalClose, modalImage}) => {
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
      <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={modalClose}
          contentLabel=""
          style={customStyles}
      >
        {modalImage ? <Img fixed={modalImage} /> : <div /> }
        <a style={{ cursor: 'pointer', }}onClick={modalClose} aria-label="Close Pasta Modal">&times;</a>
      </ReactModal>   
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

const mapStateToProps = ({ modalIsOpen, image }) => {
  return { modalIsOpen, modalImage: image}
}

const mapDispatchToProps = dispatch => {
  return { modalClose: () => dispatch({ type: `CLOSE_MODAL` }) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxDetailPage);

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

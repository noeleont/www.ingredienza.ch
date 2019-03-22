import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/Layout'
import ProductNav from '../components/ProductNav'

export const ProductPageTemplate = ({
  image,
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

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  html: PropTypes.object,
}

const ProductPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout meta={frontmatter.meta}>
      <ProductPageTemplate
        image={frontmatter.image}
        html={html}
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const pageQuery = graphql`
query ProductPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "product-page"}}) {
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
      }
      html
    }
  }
`

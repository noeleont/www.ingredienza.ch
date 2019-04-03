import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/Layout'
import ProductNav from '../components/ProductNav'

export const ProductPageTemplate = ({
  image,
  html,
  lang,
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
    <ProductNav lang={lang}/>
	</div>
)

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  html: PropTypes.string,
  lang: PropTypes.string,
}

const ProductPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout lang={frontmatter.lang} meta={frontmatter.meta}>
      <ProductPageTemplate
        image={frontmatter.image}
        html={html}
        lang={frontmatter.lang}
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
query ProductPageTemplate($id: String!) {
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
      }
      html
    }
  }
`

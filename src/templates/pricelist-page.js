import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/Layout'

export const PricelistPageTemplate = ({
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
	</div>
)

PricelistPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricelist_pdf: PropTypes.string,
  html: PropTypes.object,
}

const PricelistPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout meta={frontmatter.meta}>
      <PricelistPageTemplate
        image={frontmatter.image}
        pricelist_pdf={frontmatter.pricelist_pdf}
        html={html}
      />
    </Layout>
  )
}

PricelistPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PricelistPage

export const pageQuery = graphql`
query PricelistPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "pricelist-page"}}) {
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
        pricelist_pdf
      }
      html
    }
  }
`

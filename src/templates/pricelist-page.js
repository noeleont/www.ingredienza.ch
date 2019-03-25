import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import styled from 'styled-components'

import Layout from '../components/Layout'

// Always show a bottom border for download link
const Content = styled.div`
  a {
    text-decoration: none;
    border-bottom: .1rem solid rgba( 0, 0, 0, .35 );
    color: #000;
  }
`

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
			/> : null
		}
		<Content dangerouslySetInnerHTML={{ __html: html }} />
	</div>
)

PricelistPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  html: PropTypes.object,
}

const PricelistPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout meta={frontmatter.meta}>
      <PricelistPageTemplate
        image={frontmatter.image}
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
      }
      html
    }
  }
`
